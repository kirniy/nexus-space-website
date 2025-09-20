"use client";

import { useState, FormEvent } from "react";
import { api } from "~/services/api";
import {
  IconUser,
  IconMail,
  IconPhone,
  IconCalendar,
  IconUsers,
  IconBuilding,
  IconMessage,
  IconSend,
  IconCheck,
  IconX
} from '@tabler/icons-react';

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

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = "Имя обязательно для заполнения";
    }

    if (!formData.email.trim()) {
      errors.email = "Email обязателен для заполнения";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Введите корректный email";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Телефон обязателен для заполнения";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus({ type: null, message: "" });

    if (!validateForm()) {
      setSubmitStatus({
        type: "error",
        message: "Пожалуйста, исправьте ошибки в форме"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await api.submitContact({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        eventDate: formData.event_date,
        eventType: formData.event_type,
        guests: formData.guests
      });

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Заявка успешно отправлена! Мы свяжемся с вами в течение 24 часов."
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
          message: result.message || "Произошла ошибка при отправке формы. Попробуйте еще раз."
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
      className="border-4 border-white bg-black p-4 sm:p-6 lg:p-8 xl:p-12 text-base sm:text-lg lg:text-xl text-white [&_label]:flex [&_label]:flex-col [&_label]:gap-3 sm:[&_label]:gap-4 [&_input]:border-2 [&_input]:border-white [&_input]:bg-black [&_input]:px-3 sm:[&_input]:px-4 lg:[&_input]:px-6 [&_input]:py-2 sm:[&_input]:py-3 lg:[&_input]:py-4 [&_input]:text-sm sm:[&_input]:text-base lg:[&_input]:text-lg xl:[&_input]:text-xl [&_textarea]:border-2 [&_textarea]:border-white [&_textarea]:bg-black [&_textarea]:px-3 sm:[&_textarea]:px-4 lg:[&_textarea]:px-6 [&_textarea]:py-2 sm:[&_textarea]:py-3 lg:[&_textarea]:py-4 [&_textarea]:text-sm sm:[&_textarea]:text-base lg:[&_textarea]:text-lg xl:[&_textarea]:text-xl [&_select]:border-2 [&_select]:border-white [&_select]:bg-black [&_select]:px-3 sm:[&_select]:px-4 lg:[&_select]:px-6 [&_select]:py-2 sm:[&_select]:py-3 lg:[&_select]:py-4 [&_select]:text-sm sm:[&_select]:text-base lg:[&_select]:text-lg xl:[&_select]:text-xl"
      aria-label="Форма заявки на аренду пространства"
      noValidate
    >
      <div className="grid gap-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <label>
            <span className="font-mono uppercase tracking-wider flex items-center gap-2" id="name-label">
              <IconUser size={20} className="text-white/60" aria-hidden="true" />
              ИМЯ *
            </span>
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full placeholder:text-white/40"
              aria-label="Имя"
              aria-describedby="name-label"
              aria-required="true"
              autoComplete="name"
            />
          </label>
          <label>
            <span className="font-mono uppercase tracking-wider flex items-center gap-2" id="company-label">
              <IconBuilding size={20} className="text-white/60" aria-hidden="true" />
              КОМПАНИЯ
            </span>
            <input
              type="text"
              name="company"
              placeholder="Название компании"
              value={formData.company}
              onChange={handleChange}
              className="w-full placeholder:text-white/40"
              aria-label="Название компании"
              aria-describedby="company-label"
              autoComplete="organization"
            />
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <label>
            <span className="font-mono uppercase tracking-wider flex items-center gap-2">
              <IconMail size={20} className="text-white/60" />
              EMAIL *
            </span>
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
            <span className="font-mono uppercase tracking-wider flex items-center gap-2">
              <IconPhone size={20} className="text-white/60" />
              ТЕЛЕФОН *
            </span>
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
            <span className="font-mono uppercase tracking-wider flex items-center gap-2">
              <IconCalendar size={20} className="text-white/60" />
              ДАТА МЕРОПРИЯТИЯ
            </span>
            <input
              type="date"
              name="event_date"
              value={formData.event_date}
              onChange={handleChange}
              className="w-full"
            />
          </label>
          <label>
            <span className="font-mono uppercase tracking-wider flex items-center gap-2">
              <IconUsers size={20} className="text-white/60" />
              КОЛИЧЕСТВО ГОСТЕЙ
            </span>
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
          <span className="font-mono uppercase tracking-wider flex items-center gap-2">
            <IconMessage size={20} className="text-white/60" />
            ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ
          </span>
          <textarea
            name="message"
            rows={4}
            placeholder="Расскажите подробнее о вашем мероприятии"
            value={formData.message}
            onChange={handleChange}
            className="w-full placeholder:text-white/40"
          />
        </label>


        <button
          type="submit"
          className="button-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] focus:ring-4 focus:ring-white/20 focus:outline-none w-full sm:w-auto"
          disabled={isSubmitting}
          aria-describedby={submitStatus.type ? "submit-status" : undefined}
        >
          {isSubmitting ? (
            <>
              <IconSend size={24} className="animate-spin" />
              <span className="animate-pulse">ОТПРАВКА...</span>
            </>
          ) : (
            <>
              <IconSend size={24} />
              <span>ОТПРАВИТЬ ЗАЯВКУ</span>
            </>
          )}
        </button>

        {/* Status message with better styling */}
        {submitStatus.type && (
          <div
            id="submit-status"
            className={`p-6 border-2 flex items-center gap-4 transition-all duration-300 ${
              submitStatus.type === 'success'
                ? 'border-green-500 text-green-500 bg-green-500/10 animate-pulse'
                : 'border-red-500 text-red-500 bg-red-500/10'
            }`}
            role="status"
            aria-live="polite"
          >
            {submitStatus.type === 'success' ? (
              <IconCheck size={32} className="animate-bounce" />
            ) : (
              <IconX size={32} />
            )}
            <span>{submitStatus.message}</span>
          </div>
        )}
      </div>
    </form>
  );
};
