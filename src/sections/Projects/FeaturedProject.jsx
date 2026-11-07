import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Button from '@/components/ui/Button/Button'
import Tag, { TagList } from '@/components/ui/Tag/Tag'
import { useLanguage } from '@/i18n/useLanguage'
import { teamflow } from '@/data/projects'
import './FeaturedProject.scss'

const MotionArticle = motion.article
const MotionImg = motion.img
const MotionSpan = motion.span

/** TeamFlow, shown above the client projects with screenshots, features and stack. */
const FeaturedProject = () => {
  const { t } = useLanguage()
  const [activeKey, setActiveKey] = useState(teamflow.shots[0].key)
  const active = teamflow.shots.find((shot) => shot.key === activeKey)
  const caption = (key) => t(`projects.teamflow.shots.${key}`)

  return (
    <MotionArticle
      className="featured"
      id="teamflow"
      aria-labelledby="teamflow-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <header className="featured__header">
        <img className="featured__logo" src={teamflow.logo} alt="" width="56" height="56" />
        <div>
          <div className="featured__badges">
            <Tag variant="solid">{t('projects.labels.featured')}</Tag>
            <Tag variant="brand">{t('projects.labels.personal')}</Tag>
          </div>
          <h3 id="teamflow-title" className="featured__title">{t('projects.teamflow.title')}</h3>
          <p className="featured__tagline">{t('projects.teamflow.tagline')}</p>
        </div>
      </header>

      <div className="featured__body">
        <figure className="featured__gallery">
          <div className="featured__screen">
            <AnimatePresence initial={false}>
              <MotionImg
                key={active.key}
                src={active.src}
                alt={`TeamFlow — ${caption(active.key)}`}
                width="1200"
                height="766"
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
          <figcaption className="featured__caption" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <MotionSpan
                key={active.key}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {caption(active.key)}
              </MotionSpan>
            </AnimatePresence>
          </figcaption>
          <div className="featured__thumbs" role="group" aria-label={t('projects.labels.gallery')}>
            {teamflow.shots.map((shot) => (
              <button
                key={shot.key}
                type="button"
                className={`featured__thumb ${shot.key === activeKey ? 'is-active' : ''}`}
                onClick={() => setActiveKey(shot.key)}
                aria-pressed={shot.key === activeKey}
                aria-label={caption(shot.key)}
              >
                <img src={shot.src} alt="" loading="lazy" width="120" height="77" />
              </button>
            ))}
          </div>
        </figure>

        <div className="featured__info">
          <p className="featured__summary">{t('projects.teamflow.summary')}</p>
          <p className="featured__role">
            <strong>{t('projects.labels.role')}:</strong> {t('projects.teamflow.role')}
          </p>
          <div className="featured__groups">
            {teamflow.featureGroups.map((group) => (
              <div key={group} className="featured__group">
                <h4>{t(`projects.teamflow.groups.${group}.title`)}</h4>
                <ul>
                  {t(`projects.teamflow.groups.${group}.items`).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="featured__footer">
        <div>
          <h4>{t('projects.labels.engineering')}</h4>
          <ul className="featured__engineering">
            {t('projects.teamflow.engineering').map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{t('projects.labels.stack')}</h4>
          <TagList items={teamflow.stack} />
          <Button className="featured__cta" href={teamflow.liveUrl} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt aria-hidden="true" /> {t('projects.labels.live')}
          </Button>
          <p className="featured__note">{t('projects.teamflow.linksNote')}</p>
        </div>
      </footer>
    </MotionArticle>
  )
}

export default FeaturedProject
