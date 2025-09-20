// Yandex Cloud Function for NEXUS Telegram Form Notifications
// Uses same bot and chat as VNVNC but with NEXUS identifier

const https = require('https');

// Environment variables (set in Yandex Cloud Function)
// Same bot token and chat ID as VNVNC
const BOT_TOKEN = process.env.BOT_TOKEN || '8159622033:AAGIJbyBHqaAH8c9fUYEfzQcJ0gzTcxV1GM';
const CHAT_IDS = (process.env.CHAT_IDS || '370712609,5444525103').split(',');

function sendTelegramMessage(chatId, message) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        });

        const options = {
            hostname: 'api.telegram.org',
            path: `/bot${BOT_TOKEN}/sendMessage`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (response.ok) {
                        resolve(response);
                    } else {
                        reject(new Error(`Telegram API error: ${response.description}`));
                    }
                } catch (e) {
                    reject(e);
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

exports.handler = async (event) => {
    // Parse request body
    let body;
    try {
        body = JSON.parse(event.body);
    } catch (e) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({ error: 'Invalid JSON' })
        };
    }

    // Handle OPTIONS request for CORS
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: ''
        };
    }

    // Extract form data
    const {
        name,
        company,
        email,
        phone,
        event_date,
        guests,
        event_type,
        message
    } = body;

    // Validate required fields
    if (!name || !email || !phone) {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({ error: 'Missing required fields' })
        };
    }

    // Format event type
    const eventTypes = {
        'corporate': 'Корпоративное мероприятие',
        'conference': 'Конференция',
        'concert': 'Концерт',
        'exhibition': 'Выставка',
        'private': 'Частное мероприятие',
        'other': 'Другое'
    };

    // Create Telegram message with NEXUS identifier
    const telegramMessage = `
🏢 <b>НОВАЯ ЗАЯВКА С САЙТА NEXUS</b>

👤 <b>Контактное лицо:</b> ${name}
${company ? `🏢 <b>Компания:</b> ${company}\n` : ''}
📧 <b>Email:</b> ${email}
📱 <b>Телефон:</b> ${phone}

${event_date ? `📅 <b>Дата мероприятия:</b> ${event_date}\n` : ''}
${guests ? `👥 <b>Количество гостей:</b> ${guests}\n` : ''}
${event_type ? `🎯 <b>Формат:</b> ${eventTypes[event_type] || event_type}\n` : ''}

${message ? `💬 <b>Сообщение:</b>\n${message}\n` : ''}

⏰ <b>Время заявки:</b> ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}
🌐 <b>Источник:</b> nexus-space.ru
    `.trim();

    try {
        // Send to all configured Telegram chats
        const sendPromises = CHAT_IDS.map(chatId =>
            sendTelegramMessage(chatId.trim(), telegramMessage)
        );

        await Promise.all(sendPromises);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({
                success: true,
                message: 'Заявка успешно отправлена'
            })
        };
    } catch (error) {
        console.error('Error sending to Telegram:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Methods': 'POST, OPTIONS'
            },
            body: JSON.stringify({
                error: 'Failed to send message',
                details: error.message
            })
        };
    }
};