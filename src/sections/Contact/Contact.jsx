import { useState } from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import Button from '@/components/ui/Button/Button'
import Card from '@/components/ui/Card/Card'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal/Reveal'
import { useLanguage } from '@/i18n/useLanguage'
import { profile } from '@/data/profile'
import './Contact.scss'

const EMPTY_FORM = { name: '', email: '', subject: '', message: '' }
const FIELDS = [
  { name: 'name', type: 'text', autoComplete: 'name' },
  { name: 'email', type: 'email', autoComplete: 'email' },
  { name: 'subject', type: 'text' },
]

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY',
          ...formData,
          from_name: formData.name,
          from_email: formData.email,
        }),
      })
      const result = await response.json()
      if (!result.success) throw new Error(result.message || 'Form submission failed')

      setSubmitStatus('success')
      setFormData(EMPTY_FORM)
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const channels = [
    { icon: FaEnvelope, label: t('contact.labels.email'), value: profile.email, href: `mailto:${profile.email}` },
    { icon: FaPhoneAlt, label: t('contact.labels.mobile'), value: profile.phone.display, href: profile.phone.href },
    { icon: FaMapMarkerAlt, label: t('contact.labels.address'), value: profile.address },
    { icon: FaLinkedin, label: t('contact.labels.linkedin'), value: profile.links.linkedinHandle, href: profile.links.linkedin, external: true },
  ]

  return (
    <section id="contact" className="section section--alt contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionTitle id="contact-title" lead={t('contact.note')}>{t('contact.title')}</SectionTitle>
        <div className="contact__content">
          <RevealGroup as="ul" className="contact__channels">
            {channels.map(({ icon: Icon, label, value, href, external }) => {
              const body = (
                <>
                  <span className="contact__icon" aria-hidden="true"><Icon /></span>
                  <span className="contact__text">
                    <span className="contact__label">{label}</span>
                    <span className="contact__value">{value}</span>
                  </span>
                </>
              )
              return (
                <RevealItem key={label}>
                  {href ? (
                    <a
                      className="contact__channel contact__channel--link"
                      href={href}
                      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="contact__channel">{body}</div>
                  )}
                </RevealItem>
              )
            })}
          </RevealGroup>

          <Reveal delay={0.15}>
            <Card hover={false} className="contact__form">
              <form onSubmit={handleSubmit}>
                {FIELDS.map((field) => (
                  <label key={field.name} className="field">
                    <span className="visually-hidden">{t(`contact.form.${field.name}`)}</span>
                    <input
                      {...field}
                      placeholder={t(`contact.form.${field.name}`)}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    />
                  </label>
                ))}
                <label className="field">
                  <span className="visually-hidden">{t('contact.form.message')}</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>
                {submitStatus && (
                  <p className={`form-status form-status--${submitStatus}`} role="status">
                    {t(`contact.${submitStatus}`)}
                  </p>
                )}
                <Button type="submit" className="btn--block" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
