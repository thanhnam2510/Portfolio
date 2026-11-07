import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { RevealGroup, RevealItem } from '@/components/ui/Reveal/Reveal'
import { useLanguage } from '@/i18n/useLanguage'
import { skillCategories } from '@/data/skills'
import './Skills.scss'

const Skills = () => {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section section--alt skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionTitle id="skills-title">{t('skills.title')}</SectionTitle>
        <RevealGroup as="ul" className="skills__groups">
          {skillCategories.map(({ key, icon: GroupIcon, skills }) => (
            <RevealItem key={key} className="skills__group">
              <h3 className="skills__group-title">
                <span className="skills__group-icon" aria-hidden="true"><GroupIcon /></span>
                {t(`skills.categories.${key}`)}
              </h3>
              <ul className="skills__list">
                {skills.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="skill">
                    <Icon className="skill__icon" style={{ color }} aria-hidden="true" />
                    <span className="skill__name">{name}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default Skills
