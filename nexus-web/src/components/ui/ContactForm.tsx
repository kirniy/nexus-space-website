"use client";

import { useState, FormEvent } from "react";

// Yandex Cloud Function endpoint for form submission
// This will be set up in API Gateway
const FORM_ENDPOINT = "https://d5d621jmge79dusl8rkh.kf69zffa.apigw.yandexcloud.net/api/nexus-form";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    event_date: "",
    guests: "",
    event_type: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов."
        });
        // Reset form
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          event_date: "",
          guests: "",
          event_type: "",
          message: ""
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Произошла ошибка при отправке формы. Попробуйте еще раз."
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: "Произошла ошибка при отправке формы. Попробуйте еще раз."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-4 border-white bg-black p-12 text-xl text-white [&_label]:flex [&_label]:flex-col [&_label]:gap-4 [&_input]:border-2 [&_input]:border-white [&_input]:bg-black [&_input]:px-6 [&_input]:py-4 [&_input]:text-xl [&_textarea]:border-2 [&_textarea]:border-white [&_textarea]:bg-black [&_textarea]:px-6 [&_textarea]:py-4 [&_textarea]:text-xl [&_select]:border-2 [&_select]:border-white [&_select]:bg-black [&_select]:px-6 [&_select]:py-4 [&_select]:text-xl"
    >
      <div className="grid gap-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <label>
            <span className="font-mono uppercase tracking-wider">ИМЯ *</span>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full placeholder:text-white/40"
            />
          </label>
          <label>
            <span className="font-mono uppercase tracking-wider">КОМПАНИЯ</span>
            <input
              type="text"
              name="company"
              placeholder="Название компании"
              value={formData.company}
              onChange={handleChange}
              className="w-full placeholder:text-white/40"
            />
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <label>
            <span className="font-mono uppercase tracking-wider">EMAIL *</span>
            <input
              type="email"
              name="email"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full placeholder:text-white/40"
            />
          </label>
          <label>
            <span className="font-mono uppercase tracking-wider">ТЕЛЕФОН *</span>
            <input
              type="tel"
              name="phone"
              placeholder="+7 (999) 999-99-99"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full placeholder:text-white/40"
            />
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <label>
            <span className="font-mono uppercase tracking-wider">ДАТА МЕРОПРИЯТИЯ</span>
            <input
              type="date"
              name="event_date"
              value={formData.event_date}
              onChange={handleChange}
              className="w-full"
            />
          </label>
          <label>
            <span className="font-mono uppercase tracking-wider">КОЛИЧЕСТВО ГОСТЕЙ</span>
            <input
              type="number"
              name="guests"
              placeholder="Примерное количество"
              value={formData.guests}
              onChange={handleChange}
              className="w-full placeholder:text-white/40"
            />
          </label>
        </div>

        <label>
          <span className="font-mono uppercase tracking-wider">ФОРМАТ МЕРОПРИЯТИЯ</span>
          <select
            name="event_type"
            value={formData.event_type}
            onChange={handleChange}
            className="w-full"
          >
            <option value="">Выберите формат</option>
            <option value="corporate">Корпоративное мероприятие</option>
            <option value="conference">Конференция</option>
            <option value="concert">Концерт</option>
            <option value="exhibition">Выставка</option>
            <option value="private">Частное мероприятие</option>
            <option value="other">Другое</option>
          </select>
        </label>

        <label>
          <span className="font-mono uppercase tracking-wider">ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Расскажите подробнее о вашем мероприятии"
            value={formData.message}
            onChange={handleChange}
            className="w-full placeholder:text-white/40"
          />
        </label>

        {submitStatus.type && (
          <div className={`p-6 border-2 ${submitStatus.type === 'success' ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}>
            {submitStatus.message}
          </div>
        )}

        <button
          type="submit"
          className="button-primary disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? "ОТПРАВКА..." : "ОТПРАВИТЬ ЗАЯВКУ"}
        </button>
      </div>
    </form>
  );
};
