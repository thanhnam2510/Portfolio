import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from '@/i18n/LanguageProvider'

const AppProviders = ({ children }) => (
  <MotionConfig reducedMotion="user">
    <LanguageProvider>{children}</LanguageProvider>
  </MotionConfig>
)

export default AppProviders
