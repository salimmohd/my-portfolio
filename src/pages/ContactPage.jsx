import { useState } from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import ScrollReveal from '../components/ScrollReveal'
import { contactDetails, socialLinks } from '../content/contact'
import { contactPageContent } from '../content/contactPage'

const initialFormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateForm(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.subject.trim()) {
    errors.subject = 'Please enter a subject.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please enter your message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please enter at least 10 characters.'
  }

  return errors
}

async function sendContactMessage(values) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: values.name.trim(),
      email: values.email.trim(),
      subject: values.subject.trim(),
      message: values.message.trim(),
    }),
  })

  const result = await response.json()

  if (!response.ok || result.error) {
    throw new Error(result.error || 'Message could not be sent.')
  }

  return result
}

function FieldError({ id, message }) {
  if (!message) {
    return null
  }

  return (
    <p id={id} className="mt-2 text-xs font-medium text-red-600">
      {message}
    </p>
  )
}

export default function ContactPage() {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [submitMessage, setSubmitMessage] = useState('')

  const isSubmitting = submitStatus === 'loading'
  const { cards, form, hero } = contactPageContent

  function handleChange(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = validateForm(formValues)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus('error')
      setSubmitMessage(form.messages.invalid)
      return
    }

    setSubmitStatus('loading')
    setSubmitMessage(form.messages.loading)

    try {
      await sendContactMessage(formValues)
      setFormValues(initialFormValues)
      setErrors({})
      setSubmitStatus('success')
      setSubmitMessage(form.messages.success)
      window.setTimeout(() => {
        setSubmitStatus('idle')
        setSubmitMessage('')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : form.messages.fallbackError,
      )
    }
  }

  function getFieldClass(fieldName) {
    const errorClass = errors[fieldName]
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-slate-300 focus:border-sky-600 focus:ring-sky-600'

    return `mt-2 w-full rounded-sm border px-4 py-3 text-sm outline-none transition focus:ring-1 ${errorClass}`
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <ScrollReveal as="section" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {hero.titlePrefix}{' '}
            <span className="text-sky-600">{hero.highlightedTitle}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-700">
            {hero.description}
          </p>
        </div>
      </ScrollReveal>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <ScrollReveal direction="left" className="space-y-6">
          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {cards.emailLabel}
            </p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="mt-3 block text-lg font-bold text-slate-950 hover:text-sky-600"
            >
              {contactDetails.email}
            </a>
          </div>

          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {cards.mobileLabel}
            </p>
            <a
              href={contactDetails.phoneHref}
              className="mt-3 block text-lg font-bold text-slate-950 hover:text-sky-600"
            >
              {contactDetails.phone}
            </a>
          </div>

          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {cards.locationLabel}
            </p>
            <p className="mt-3 text-lg font-bold text-slate-950">
              {contactDetails.location}
            </p>
          </div>

          <div className="rounded-sm border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {cards.socialLabel}
            </p>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => {
                const className =
                  link.label === 'GitHub'
                    ? 'bg-slate-950 text-white hover:bg-slate-800'
                    : 'border border-sky-600 text-sky-700 hover:bg-sky-50'

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`rounded-sm px-4 py-2 text-xs font-semibold ${className}`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          as="form"
          direction="right"
          noValidate
          onSubmit={handleSubmit}
          className="rounded-sm border border-slate-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-slate-800"
              >
                {form.fields.name.label}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formValues.name}
                onChange={handleChange}
                placeholder={form.fields.name.placeholder}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className={getFieldClass('name')}
              />
              <FieldError id="name-error" message={errors.name} />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-slate-800"
              >
                {form.fields.email.label}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder={form.fields.email.placeholder}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className={getFieldClass('email')}
              />
              <FieldError id="email-error" message={errors.email} />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="subject"
              className="text-sm font-semibold text-slate-800"
            >
              {form.fields.subject.label}
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formValues.subject}
              onChange={handleChange}
              placeholder={form.fields.subject.placeholder}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              className={getFieldClass('subject')}
            />
            <FieldError id="subject-error" message={errors.subject} />
          </div>

          <div className="mt-6">
            <label
              htmlFor="message"
              className="text-sm font-semibold text-slate-800"
            >
              {form.fields.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={formValues.message}
              onChange={handleChange}
              placeholder={form.fields.message.placeholder}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={`${getFieldClass('message')} resize-none`}
            />
            <FieldError id="message-error" message={errors.message} />
          </div>

          {submitMessage && (
            <p
              className={`mt-6 text-sm font-medium ${
                submitStatus === 'success'
                  ? 'text-emerald-600'
                  : submitStatus === 'loading'
                    ? 'text-slate-600'
                    : 'text-red-600'
              }`}
            >
              {submitStatus === 'success'
                ? 'Sent: '
                : submitStatus === 'error'
                  ? 'Error: '
                  : ''}
              {submitMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-sm bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            <PaperAirplaneIcon className="h-4 w-4" aria-hidden="true" />
            {isSubmitting ? form.submittingLabel : form.submitLabel}
          </button>
        </ScrollReveal>
      </section>
    </main>
  )
}
