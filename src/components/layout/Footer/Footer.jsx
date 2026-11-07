import { useLanguage } from '@/i18n/useLanguage'
import { profile } from '@/data/profile'
import './Footer.scss'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}. {t('footer.rights')}</p>
        <ul className="footer__links">
          <li><a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={`mailto:${profile.email}`}>Email</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
