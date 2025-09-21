import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Telegram Bot Configuration
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '102934750:AAE9kVClDad9yAyk8f2cYhrcsYqJeDybfLo';
    const CHAT_IDS = (process.env.CHAT_IDS || '429156227,433491').split(',');

    if (!TELEGRAM_BOT_TOKEN || CHAT_IDS.length === 0) {
      console.error('Telegram configuration missing');
      // Still return success to not lose the lead
      return NextResponse.json({
        success: true,
        message: 'Заявка принята. Мы свяжемся с вами в ближайшее время.'
      });
    }

    // Format phone number
    const formatPhone = (phone: string): string => {
      const digits = phone.replace(/\D/g, '');
      if (digits.length === 11 && (digits[0] === '7' || digits[0] === '8')) {
        return `+7 (${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7, 9)}-${digits.slice(9, 11)}`;
      }
      return phone;
    };

    const formattedPhone = formatPhone(data.phone);

    // Create Telegram message
    let message = `🎭 <b>Новая заявка NEXUS</b>\n\n`;
    message += `👤 <b>Имя:</b> ${data.name}\n`;
    message += `📱 <b>Телефон:</b> ${formattedPhone}\n`;
    if (data.email) message += `✉️ <b>Email:</b> ${data.email}\n`;
    if (data.eventDate) {
      const date = new Date(data.eventDate);
      const formattedDate = date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      message += `📅 <b>Дата мероприятия:</b> ${formattedDate}\n`;
    }
    if (data.eventType) {
      const eventTypes: { [key: string]: string } = {
        corporate: 'Корпоративное мероприятие',
        conference: 'Конференция',
        concert: 'Концерт',
        exhibition: 'Выставка',
        private: 'Частное мероприятие',
        other: 'Другое'
      };
      message += `🎪 <b>Тип мероприятия:</b> ${eventTypes[data.eventType] || data.eventType}\n`;
    }
    if (data.guests) message += `👥 <b>Количество гостей:</b> ${data.guests}\n`;
    if (data.message) message += `\n💬 <b>Сообщение:</b>\n${data.message}\n`;
    message += `\n#nexus #заявка`;

    // Send to Telegram - to multiple chat IDs
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    let allSuccess = true;

    // Send to each chat ID
    for (const chatId of CHAT_IDS) {
      try {
        const response = await fetch(telegramUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: chatId.trim(),
            text: message,
            parse_mode: 'HTML'
          })
        });

        const result = await response.json();

        if (!response.ok) {
          console.error(`Telegram API error for chat ${chatId}:`, result);
          allSuccess = false;
        } else {
          console.log(`Successfully sent to chat ${chatId}`);
        }
      } catch (telegramError) {
        console.error(`Telegram send error for chat ${chatId}:`, telegramError);
        allSuccess = false;
      }
    }

    if (!allSuccess) {
      // At least one send failed, but still return success to not lose the lead
      return NextResponse.json({
        success: true,
        message: 'Заявка принята. Если мы не свяжемся в течение часа, позвоните: +7 (921) 410-44-40'
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Спасибо! Мы получили вашу заявку и свяжемся с вами в ближайшее время.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({
      success: false,
      message: 'Произошла ошибка. Пожалуйста, позвоните нам: +7 (921) 410-44-40'
    }, { status: 500 });
  }
}