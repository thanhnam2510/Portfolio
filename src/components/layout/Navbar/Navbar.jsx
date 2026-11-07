import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/i18n/useLanguage'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import { SECTION_IDS } from '@/data/navigation'
import { profile } from '@/data/profile'
import { scrollToSection } from '@/utils/scrollToSection'
import './Navbar.scss'

const LANGUAGES = ['vi', 'en']
const MotionSpan = motion.span

const Navbar = ({ activeSection }) => {
  const { t, language, changeLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const scrolled = useScrolledPast(8)

  const goTo = (id) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <button type="button" className="navbar__brand" onClick={() => goTo('home')} aria-label={t('nav.home')}>
          <img src={profile.avatar} alt="" width="40" height="40" className="navbar__avatar" />
          <span className="navbar__name">{profile.shortName}</span>
        </button>

        <ul id="nav-menu" className={`navbar__menu ${isMenuOpen ? 'is-open' : ''}`}>
          {SECTION_IDS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`navbar__link ${activeSection === id ? 'is-active' : ''}`}
                aria-current={activeSection === id ? 'true' : undefined}
                onClick={(event) => {
                  event.preventDefault()
                  goTo(id)
                }}
              >
                {t(`nav.${id}`)}
                {activeSection === id && (
                  <MotionSpan
                    layoutId="navbar-indicator"
                    className="navbar__indicator"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <div className="lang-switch" role="group" aria-label={t('nav.language')}>
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                lang={code}
                className={`lang-switch__btn ${language === code ? 'is-active' : ''}`}
                onClick={() => changeLanguage(code)}
                aria-pressed={language === code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={t('nav.menu')}
            aria-expanded={isMenuOpen}
            aria-controls="nav-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
