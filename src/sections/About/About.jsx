import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import CountUp from '@/components/ui/CountUp/CountUp'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal/Reveal'
import { useLanguage } from '@/i18n/useLanguage'
import { profile } from '@/data/profile'
import './About.scss'

const PARAGRAPHS = ['description1', 'description2', 'description3', 'description4', 'description5']

const About = () => {
  const { t } = useLanguage()
  const years = profile.yearsOfExperience

  const stats = [
    { value: 15, label: t('about.stats.clients') },
    { value: years, label: t('about.stats.experience') },
    { value: 20, label: t('about.stats.technologies') },
  ]

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionTitle id="about-title">{t('about.title')}</SectionTitle>
        <div className="about__content">
          <RevealGroup as="ul" className="about__stats">
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="about__stat">
                <CountUp value={stat.value} suffix="+" className="about__stat-value" />
                <span className="about__stat-label">{stat.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="about__text">
            {PARAGRAPHS.map((key) => (
              <p key={key}>{t(`about.${key}`, { years })}</p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
