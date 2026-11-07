import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import Button from '@/components/ui/Button/Button'
import { useLanguage } from '@/i18n/useLanguage'
import { profile } from '@/data/profile'
import './Hero.scss'

const MotionDiv = motion.div
const MotionSpan = motion.span

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}
const nameWords = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const word = {
  hidden: { opacity: 0, y: '0.4em' },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const SOCIALS = [
  { label: 'LinkedIn', href: profile.links.linkedin, icon: FaLinkedin, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

const Hero = () => {
  const { t } = useLanguage()
  const years = profile.yearsOfExperience

  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__blob hero__blob--one"></span>
        <span className="hero__blob hero__blob--two"></span>
        <span className="hero__blob hero__blob--three"></span>
      </div>
      <div className="hero__inner">
        <MotionDiv className="hero__text" variants={container} initial="hidden" animate="visible">
          <MotionDiv variants={item} className="hero__status">
            <span className="hero__status-dot" aria-hidden="true"></span>
            {t('hero.current')}
          </MotionDiv>
          <MotionDiv variants={item}>
            <h1 id="hero-title" className="hero__title">
              <span className="hero__greeting">{t('hero.greeting')}</span>
              <MotionSpan className="hero__name" variants={nameWords} aria-label={t('hero.name')}>
                {t('hero.name').split(' ').map((part, index) => (
                  <MotionSpan key={`${part}-${index}`} className="hero__name-word" variants={word} aria-hidden="true">
                    {part}
                  </MotionSpan>
                ))}
              </MotionSpan>
            </h1>
          </MotionDiv>
          <MotionDiv variants={item}>
            <p className="hero__role">{t('hero.title')}</p>
            <p className="hero__years">{t('hero.years', { years })}</p>
            <p className="hero__description">{t('hero.description')}</p>
          </MotionDiv>
          <MotionDiv variants={item} className="hero__actions">
            <Button href="#projects">{t('hero.projectsBtn')}</Button>
            <Button href="#teamflow" variant="outline">{t('hero.featured')}</Button>
            <Button href={profile.cv.url} variant="light" download={profile.cv.fileName}>
              <FaDownload aria-hidden="true" /> {t('hero.downloadCv')}
            </Button>
          </MotionDiv>
          <MotionDiv variants={item}>
            <ul className="hero__socials">
              {SOCIALS.map(({ label, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    className="hero__social"
                    href={href}
                    aria-label={label}
                    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </MotionDiv>
        </MotionDiv>

        <MotionDiv
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="hero__ring" aria-hidden="true"></span>
          <img src={profile.avatar} alt={profile.name} width="320" height="320" className="hero__avatar" />
        </MotionDiv>
      </div>
    </section>
  )
}

export default Hero
