# Yandex Cloud Function Deployment for NEXUS Telegram Form

## Prerequisites
1. Yandex Cloud account with billing enabled
2. Yandex Cloud CLI installed (`yc`)
3. Function runtime: Node.js 18

## Deployment Steps

### 1. Create Function
```bash
yc serverless function create \
  --name nexus-telegram-form \
  --description "NEXUS website contact form to Telegram"
```

### 2. Deploy Function Code
```bash
# Zip the function
zip telegram-form.zip telegram-form.js

# Deploy to Yandex Cloud
yc serverless function version create \
  --function-name nexus-telegram-form \
  --runtime nodejs18 \
  --entrypoint telegram-form.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path telegram-form.zip \
  --environment BOT_TOKEN=102934750:AAE9kVClDad9yAyk8f2cYhrcsYqJeDybfLo \
  --environment CHAT_IDS=429156227,433491
```

### 3. Create API Gateway
Create file `api-gateway-spec.yaml`:

```yaml
openapi: 3.0.0
info:
  title: NEXUS Forms API
  version: 1.0.0

paths:
  /api/nexus-form:
    post:
      summary: Submit contact form
      x-yc-apigateway-integration:
        type: cloud-functions
        function_id: <YOUR_FUNCTION_ID>
        service_account_id: <YOUR_SERVICE_ACCOUNT_ID>
      operationId: submitForm
      responses:
        '200':
          description: Success
    options:
      summary: CORS preflight
      x-yc-apigateway-integration:
        type: dummy
        dummy:
          content:
            '*': OK
          headers:
            Access-Control-Allow-Origin: '*'
            Access-Control-Allow-Methods: 'POST, OPTIONS'
            Access-Control-Allow-Headers: 'Content-Type'
      responses:
        '200':
          description: Success
```

Deploy API Gateway:
```bash
yc serverless api-gateway create \
  --name nexus-api \
  --spec=api-gateway-spec.yaml \
  --description "NEXUS website API gateway"
```

### 4. Update Website Endpoint
Update the `FORM_ENDPOINT` in `src/components/ui/ContactForm.tsx`:
```javascript
const FORM_ENDPOINT = "https://<YOUR-API-GATEWAY-ID>.apigw.yandexcloud.net/api/nexus-form";
```

## Testing

Test the function locally:
```bash
curl -X POST https://<YOUR-API-GATEWAY-ID>.apigw.yandexcloud.net/api/nexus-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+79999999999",
    "message": "Test message from NEXUS website"
  }'
```

## Environment Variables

- `BOT_TOKEN`: Telegram bot token - `102934750:AAE9kVClDad9yAyk8f2cYhrcsYqJeDybfLo`
- `CHAT_IDS`: Comma-separated list of Telegram chat IDs - `429156227,433491`

## Notes

- The function uses the NEXUS Telegram bot (@nexus_space_bot)
- Messages are tagged with "NEXUS" to distinguish from other submissions
- All times are in Moscow timezone
- The function handles CORS automatically for browser requests
- API endpoint is available at: `https://d5d621jmge79dusl8rkh.kf69zffa.apigw.yandexcloud.net/api/nexus-form`