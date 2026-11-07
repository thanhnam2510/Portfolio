import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useLanguage } from '@/i18n/useLanguage'
import { clientProjects } from '@/data/projects'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal/Reveal'
import FeaturedProject from './FeaturedProject'
import ProjectCard from './ProjectCard'
import './Projects.scss'

const Projects = () => {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section section--alt projects" aria-labelledby="projects-title">
      <div className="container">
        <SectionTitle id="projects-title" lead={t('projects.subtitle')}>{t('projects.title')}</SectionTitle>
        <FeaturedProject />
        <Reveal>
          <h3 className="projects__subheading">{t('projects.others')}</h3>
        </Reveal>
        <RevealGroup as="ul" className="projects__grid">
          {clientProjects.map((project) => (
            <RevealItem key={project.key}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default Projects
