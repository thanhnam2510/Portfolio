import Card from '@/components/ui/Card/Card'
import Tag, { TagList } from '@/components/ui/Tag/Tag'
import { useLanguage } from '@/i18n/useLanguage'

const DETAIL_BLOCKS = ['problem', 'challenge', 'solution', 'outcome']

const ProjectCard = ({ project }) => {
  const { t } = useLanguage()
  const copy = t(`projects.${project.key}`)
  const details = DETAIL_BLOCKS.filter((block) => copy[block])

  return (
    <Card as="article" className="project-card">
      <h4 className="project-card__title">{copy.title}</h4>
      <ul className="project-card__meta">
        {copy.period && <li><Tag>{copy.period}</Tag></li>}
        <li><Tag>{t('projects.team')}: {project.teamSize}</Tag></li>
      </ul>
      {copy.role && (
        <p className="project-card__role">
          <strong>{t('projects.labels.role')}:</strong> {copy.role}
        </p>
      )}
      <p className="project-card__summary">{copy.summary}</p>

      {details.length > 0 && (
        <details className="project-card__details">
          <summary>
            <span className="when-closed">{t('projects.labels.details')}</span>
            <span className="when-open">{t('projects.labels.hide')}</span>
          </summary>
          <dl>
            {details.map((block) => (
              <div key={block} className={`project-card__block project-card__block--${block}`}>
                <dt>{t(`projects.labels.${block}`)}</dt>
                <dd>{copy[block]}</dd>
              </div>
            ))}
          </dl>
        </details>
      )}

      <div className="project-card__footer">
        <TagList items={project.technologies} />
        {copy.demoUrl ? (
          <p className="project-card__links">
            <a href={copy.demoUrl} target="_blank" rel="noopener noreferrer">{t('projects.labels.demo')}</a>
          </p>
        ) : (
          copy.linksNote && <p className="project-card__note">{copy.linksNote}</p>
        )}
      </div>
    </Card>
  )
}

export default ProjectCard
