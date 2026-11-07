import { FaArrowUp } from 'react-icons/fa'
import { useLanguage } from '@/i18n/useLanguage'
import { useScrolledPast } from '@/hooks/useScrolledPast'
import './BackToTop.scss'

const BackToTop = () => {
  const { t } = useLanguage()
  const visible = useScrolledPast(300)

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t('nav.backToTop')}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  )
}

export default BackToTop
