# Telegram Integration Documentation

## Overview
The NEXUS website has Telegram bot integration for instant notifications when users submit contact forms. Messages are sent to specified Telegram chats for immediate response.

## Configuration

### Bot Details
- **Bot Username**: @nexus_space_bot
- **Bot Token**: `102934750:AAE9kVClDad9yAyk8f2cYhrcsYqJeDybfLo`
- **Chat IDs**: `429156227`, `433491`

### Deployment Platforms

#### 1. Vercel (Primary - Next.js)
- **Endpoint**: `/api/contact` (handled by Next.js API route)
- **File**: `src/app/api/contact/route.ts`
- **Environment Variables**:
  - `TELEGRAM_BOT_TOKEN`: Set in Vercel dashboard
  - `CHAT_IDS`: Set in Vercel dashboard
- **Production URL**: https://nexus-space.ru/api/contact

#### 2. Yandex Cloud Function (Backup)
- **Function Name**: `nexus-telegram-form`
- **Function ID**: `d4e4ktmcdksvtbk9mepo`
- **Runtime**: Node.js 18
- **API Gateway**: `https://d5d621jmge79dusl8rkh.kf69zffa.apigw.yandexcloud.net`
- **Endpoint**: `/api/nexus-form`
- **File**: `yandex-functions/telegram-form.js`

## Message Format

Messages sent to Telegram include:
- Contact person name
- Company (if provided)
- Email
- Phone number
- Event date (if provided)
- Number of guests (if provided)
- Event type (corporate, conference, concert, etc.)
- Custom message
- Timestamp (Moscow timezone)
- Source identifier (NEXUS)

### Example Message
```
🏢 НОВАЯ ЗАЯВКА С САЙТА NEXUS

👤 Контактное лицо: Иван Иванов
🏢 Компания: ООО "Компания"
📧 Email: ivan@example.com
📱 Телефон: +7 (921) 123-45-67

📅 Дата мероприятия: 25 декабря 2025
👥 Количество гостей: 100
🎯 Формат: Корпоративное мероприятие

💬 Сообщение:
Хотим провести новогодний корпоратив

⏰ Время заявки: 21.09.2025, 23:30:00
🌐 Источник: nexus-space.ru
```

## Testing

### Test Vercel Endpoint
```bash
curl -X POST https://nexus-space.ru/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+79211234567",
    "message": "Test message"
  }'
```

### Test Yandex Function
```bash
curl -X POST https://d5d621jmge79dusl8rkh.kf69zffa.apigw.yandexcloud.net/api/nexus-form \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+79211234567",
    "message": "Test message"
  }'
```

## Deployment

### Update Vercel
1. Update code in `src/app/api/contact/route.ts`
2. Commit and push to GitHub
3. Run `vercel --prod` or wait for automatic deployment

### Update Yandex Function
1. Update code in `yandex-functions/telegram-form.js`
2. Create zip: `zip telegram-form.zip telegram-form.js`
3. Deploy:
```bash
yc serverless function version create \
  --function-name nexus-telegram-form \
  --runtime nodejs18 \
  --entrypoint telegram-form.handler \
  --memory 128m \
  --execution-timeout 10s \
  --source-path telegram-form.zip \
  --environment BOT_TOKEN='102934750:AAE9kVClDad9yAyk8f2cYhrcsYqJeDybfLo' \
  --environment CHAT_IDS='429156227,433491'
```

## Troubleshooting

### Bot Token Issues
- Verify token with BotFather: `/mybots` → Select bot → API Token
- Ensure bot is active and not blocked
- Check bot has access to send messages

### Chat ID Issues
- Bot must be added to the chat/group
- For groups, bot needs permission to send messages
- Use @userinfobot to find chat IDs

### Message Not Delivered
1. Check Vercel logs: `vercel logs`
2. Check Yandex function logs: `yc serverless function logs --name nexus-telegram-form`
3. Verify environment variables are set correctly
4. Test bot token directly with Telegram API

### CORS Issues
Both endpoints handle CORS automatically. If issues persist:
- Vercel: Check Next.js CORS configuration
- Yandex: API Gateway handles OPTIONS requests

## Security Notes
- Bot token should never be committed to public repositories
- Use environment variables for sensitive data
- Implement rate limiting if needed
- Consider adding validation for phone numbers and emails

## Last Updated
September 21, 2025 - Bot token and integration confirmed working