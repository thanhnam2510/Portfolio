import { useLanguage } from '../shared/useLanguage'
import Button from '../shared/Button'
import { motion } from 'framer-motion'
import cvFile from '../../../NguyenHuuThanhNam.pdf'
import '../../styles/components/Hero.scss'

const Hero = () => {
  const { t } = useLanguage()
  const cvUrl = cvFile
  const MotionDiv = motion.div
  const MotionH1 = motion.h1
  const MotionP = motion.p
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  }

  const handleDownloadCV = (e) => {
    e.preventDefault()
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'NguyenHuuThanhNam.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <MotionDiv className="hero-content" variants={containerVariants} initial="hidden" animate="visible">
          <MotionDiv className="hero-text" variants={itemVariants}>
            <MotionH1 className="hero-title" variants={itemVariants}>
              {t('hero.greeting')} <span className="highlight">{t('hero.name')}</span>
            </MotionH1>
            <MotionP className="hero-subtitle" variants={itemVariants}>{t('hero.title')}</MotionP>
            <MotionP className="hero-description" variants={itemVariants}>
              {t('hero.description')}
            </MotionP>
            <MotionDiv className="hero-buttons" variants={itemVariants}>
              <MotionDiv whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button href="#projects" variant="primary">
                  {t('hero.projectsBtn')}
                </Button>
              </MotionDiv>
              <MotionDiv whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button href={cvUrl} variant="secondary" onClick={handleDownloadCV} download="NguyenHuuThanhNam.pdf">
                  {t('hero.downloadCv')}
                </Button>
              </MotionDiv>
            </MotionDiv>
            <MotionDiv className="hero-social" variants={itemVariants}>
              <a 
                href="https://www.linkedin.com/in/nam-nguyen-051a17207/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:namnguyenhuuthanh@gmail.com"
                className="social-link"
                aria-label="Email"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </MotionDiv>
          </MotionDiv>
          <MotionDiv className="hero-image" variants={imageVariants}>
            <MotionDiv className="hero-avatar" whileHover={{ scale: 1.02 }}>
              <img 
                src={`${import.meta.env.BASE_URL}image/thanhnam.jpg`}
                alt="Nguyen Huu Thanh Nam" 
                className="avatar-image"
              />
            </MotionDiv>
          </MotionDiv>
        </MotionDiv>
      </div>
      <div className="scroll-indicator">
        <span></span>
      </div>
    </section>
  )
}

export default Hero

