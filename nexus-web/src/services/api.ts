// API service for NEXUS contact form submission
// Uses Telegram bot for notifications

export interface ContactData {
  name: string;
  phone: string;
  email: string;
  message: string;
  eventDate?: string;
  eventType?: string;
  guests?: string;
}

// Helper function to create fetch with timeout
const fetchWithTimeout = async (url: string, options: RequestInit, timeout = 8000) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      throw new Error('Request timeout - please try again');
    }
    throw error;
  }
};

export const api = {
  async submitContact(data: ContactData): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetchWithTimeout(
        '/api/contact',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        },
        8000
      );

      const result = await response.json();
      return result;

    } catch (error: any) {
      console.error('Error submitting contact form:', error);

      // Fallback response
      return {
        success: false,
        message: 'Произошла ошибка. Пожалуйста, позвоните нам: +7 (921) 410-44-40'
      };
    }
  }
};