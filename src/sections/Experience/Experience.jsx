import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import Tag from '@/components/ui/Tag/Tag'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal/Reveal'
import { useLanguage } from '@/i18n/useLanguage'
import { experience } from '@/data/experience'
import { formatDuration } from '@/utils/formatDuration'
import './Experience.scss'

const Experience = () => {
  const { t, language } = useLanguage()

  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionTitle id="experience-title">{t('experience.title')}</SectionTitle>
        <RevealGroup as="ol" className="timeline" stagger={0.12}>
          {experience.map(({ key, startDate, endDate, hasEmploymentType }) => {
            const job = t(`experience.${key}`)
            return (
              <RevealItem key={key} className={`timeline__item ${endDate ? '' : 'is-current'}`}>
                <span className="timeline__marker" aria-hidden="true"></span>
                <article className="timeline__card">
                  <header className="timeline__header">
                    <div>
                      <h3 className="timeline__role">{job.position}</h3>
                      <p className="timeline__company">{job.company}</p>
                      {job.location && <p className="timeline__location">{job.location}</p>}
                    </div>
                    <p className="timeline__period">{job.period}</p>
                  </header>
                  <ul className="timeline__tags">
                    <li><Tag variant="brand">{formatDuration(startDate, endDate, language)}</Tag></li>
                    {job.type && <li><Tag>{job.type}</Tag></li>}
                    {hasEmploymentType && <li><Tag>{job.employmentType}</Tag></li>}
                  </ul>
                  <ul className="timeline__points">
                    {Object.values(job.descriptions).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}

export default Experience
