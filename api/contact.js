import nodemailer from 'nodemailer'
import { contactDetails } from '../src/content/portfolio.js'

const DEFAULT_TO_EMAIL = contactDetails.email

async function readRequestBody(request) {
  if (request.body) {
    return typeof request.body === 'string'
      ? JSON.parse(request.body)
      : request.body
  }

  return new Promise((resolve, reject) => {
    let body = ''

    request.on('data', (chunk) => {
      body += chunk
    })

    request.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch (error) {
        reject(error)
      }
    })

    request.on('error', reject)
  })
}

function validatePayload(payload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    return 'Please complete all required fields.'
  }

  return ''
}

function createTransporter() {
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS

  if (!smtpUser || !smtpPass) {
    throw new Error(
      'Email service is not configured. Add SMTP_USER and SMTP_PASS in .env, then restart the dev server.',
    )
  }

  if (smtpPass === 'REPLACE_WITH_GMAIL_APP_PASSWORD') {
    throw new Error(
      'Replace SMTP_PASS in .env with your Gmail App Password, then restart the dev server.',
    )
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  })
}

function buildTextMessage(payload) {
  return [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Subject: ${payload.subject}`,
    '',
    'Message:',
    payload.message,
  ].join('\n')
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function buildHtmlMessage(payload) {
  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Portfolio Contact Message</h2>
      <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(payload.subject)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${escapeHtml(payload.message)}</p>
    </div>
  `
}

export default async function handler(request, response) {
  if (request.method === 'OPTIONS') {
    response.status(200).end()
    return
  }

  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed.' })
    return
  }

  try {
    const payload = await readRequestBody(request)
    const validationError = validatePayload(payload)

    if (validationError) {
      response.status(400).json({ error: validationError })
      return
    }

    const transporter = createTransporter()
    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL
    const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      from: `"Portfolio Contact" <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `Portfolio contact: ${payload.subject}`,
      text: buildTextMessage(payload),
      html: buildHtmlMessage(payload),
    })

    response.status(200).json({ success: true })
  } catch (error) {
    response.status(500).json({
      error:
        error instanceof Error
          ? error.message
          : 'Message could not be sent.',
    })
  }
}
