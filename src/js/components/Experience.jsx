import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import Card from '../shared/Card'
import { formatDuration } from '../shared/formatDuration'
import '../../styles/components/Experience.scss'

const Experience = () => {
  const { t, language } = useLanguage()

  const experiences = [
    {
      position: t('experience.amaris.position'),
      company: t('experience.amaris.company'),
      location: t('experience.amaris.location'),
      period: t('experience.amaris.period'),
      startDate: '2026-05-01',
      endDate: null,
      type: t('experience.amaris.type'),
      employmentType: t('experience.amaris.employmentType'),
      description: [
        t('experience.amaris.descriptions.desc1'),
        t('experience.amaris.descriptions.desc2'),
        t('experience.amaris.descriptions.desc3')
      ]
    },
    {
      position: t('experience.sevago.position'),
      company: t('experience.sevago.company'),
      location: t('experience.sevago.location'),
      period: t('experience.sevago.period'),
      startDate: '2025-11-01',
      endDate: '2026-05-31',
      type: t('experience.sevago.type'),
      employmentType: t('experience.sevago.employmentType'),
      description: [
        t('experience.sevago.descriptions.desc1'),
        t('experience.sevago.descriptions.desc2'),
        t('experience.sevago.descriptions.desc3')
      ]
    },
    {
      position: t('experience.aegona.position'),
      company: t('experience.aegona.company'),
      location: t('experience.aegona.location'),
      period: t('experience.aegona.period'),
      startDate: '2023-03-01',
      endDate: '2025-11-30',
      type: t('experience.aegona.type'),
      description: [
        t('experience.aegona.descriptions.desc1'),
        t('experience.aegona.descriptions.desc2'),
        t('experience.aegona.descriptions.desc3'),
        t('experience.aegona.descriptions.desc4'),
        t('experience.aegona.descriptions.desc5')
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionTitle>{t('experience.title')}</SectionTitle>
        <div className="timeline">
          {experiences.map((exp, index) => {
            const duration = formatDuration(exp.startDate, exp.endDate, language)

            return (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <Card className="timeline-content">
                <h3 className="timeline-title">{exp.position}</h3>
                <h4 className="timeline-company">{exp.company}</h4>
                {exp.location && <p className="timeline-location">{exp.location}</p>}
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  {duration && <span className="timeline-duration">{duration}</span>}
                  {exp.type && <span className="timeline-type">{exp.type}</span>}
                  {exp.employmentType && <span className="timeline-employment-type">{exp.employmentType}</span>}
                </div>
                <ul className="timeline-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Card>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
