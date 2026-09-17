'use client';
import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { contactOptions } from '@/data/content';
import { Toast } from '@/components/ui/Toast';
export function ContactForm() {
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [toast, setToast] = useState('');
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors: typeof errors = {};
    if (!String(data.get('name') || '').trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get('email') || '').trim()))
      nextErrors.email = 'Please enter a valid email address.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      (form.elements.namedItem(nextErrors.name ? 'name' : 'email') as HTMLInputElement)?.focus();
      return;
    }
    setToast("Demo: Request received — we'd be in touch within a day. Nothing was sent.");
    form.reset();
  }
  return (
    <>
      <form className="contact-form panel" noValidate onSubmit={submit}>
        <div className="technical-label">LET’S START WITH YOUR RESEARCH</div>
        <div className="form-row">
          <div>
            <label htmlFor="name">
              Name <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              maxLength={120}
              required
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="form-error">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">
              Work email <span>*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              required
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="you@organisation.com"
            />
            {errors.email && (
              <p id="email-error" className="form-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>
        <label htmlFor="team">What are you working with?</label>
        <select id="team" name="team">
          {contactOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="message">Anything we should know?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={4000}
          placeholder="Roughly 60 papers and two repos from the last three years."
        />
        <button className="button primary" type="submit">
          Request a run
          <ArrowUpRight size={16} />
        </button>
        <p className="demo-note">This is a demo page — nothing is sent anywhere.</p>
      </form>
      <Toast message={toast} onClose={() => setToast('')} />
    </>
  );
}
