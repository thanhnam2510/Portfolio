import { useLanguage } from '../shared/useLanguage'
import SectionTitle from '../shared/SectionTitle'
import { motion } from 'framer-motion'
import { 
  SiJavascript, 
  SiNodedotjs, 
  SiReact, 
  SiAngular, 
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiGraphql,
  SiTailwindcss,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiGit,
  SiTypescript,
  SiNextdotjs,
  SiGooglecloud,
  SiRabbitmq
} from 'react-icons/si'
import { 
  FaServer,
  FaCloud,
  FaBrain
} from 'react-icons/fa'
import '../../styles/components/Skills.scss'

const Skills = () => {
  const { t } = useLanguage()
  const MotionDiv = motion.div

  const skillCategories = [
    {
      title: t('skills.categories.main'),
      icon: '⭐',
      skills: [
        { name: 'C#/.NET Core', icon: SiDotnet, color: '#512BD4' },
        { name: 'ReactJS', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#111111' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'RESTful API', icon: SiPostman, color: '#FF6C37' },
      ]
    },
    {
      title: t('skills.categories.familiar'),
      icon: '🧩',
      skills: [
        { name: 'Angular', icon: SiAngular, color: '#DD0031' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'SQL Server', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      ]
    },
    {
      title: t('skills.categories.devops'),
      icon: '🚀',
      skills: [
        { name: 'Azure', icon: FaCloud, color: '#0078D4' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'RabbitMQ', icon: SiRabbitmq, color: '#FF6600' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'VPS', icon: FaServer, color: '#2496ED' },
        { name: 'Server Management', icon: FaServer, color: '#CC2927' },
        { name: 'Hosting', icon: FaCloud, color: '#0066CC' },
      ]
    },
    {
      title: t('skills.categories.learning'),
      icon: '📘',
      skills: [
        { name: 'AI', icon: FaBrain, color: '#FF6B6B' },
        { name: 'Cloud', icon: SiGooglecloud, color: '#4285F4' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const skillCardVariants = {
    rest: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.05, 
      rotateY: 5,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <MotionDiv 
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <MotionDiv
              key={index}
              variants={itemVariants}
              className="skill-category-wrapper"
            >
              <div className="skill-category">
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon
                    return (
                      <MotionDiv
                        key={skillIndex}
                        variants={skillCardVariants}
                        initial="rest"
                        whileHover="hover"
                        className="skill-card"
                      >
                        <div className="skill-icon-wrapper">
                          <IconComponent className="skill-icon" style={{ color: skill.color }} />
                        </div>
                        <span className="skill-name">{skill.name}</span>
                        <div className="skill-glow" style={{ '--skill-color': skill.color }}></div>
                      </MotionDiv>
                    )
                  })}
                </div>
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  )
}

export default Skills
