import { FaGraduationCap } from 'react-icons/fa'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import Card from '@/components/ui/Card/Card'
import Tag from '@/components/ui/Tag/Tag'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal/Reveal'
import { useLanguage } from '@/i18n/useLanguage'
import { education, certifications } from '@/data/education'
import './Education.scss'

const Education = () => {
  const { t } = useLanguage()

  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionTitle id="education-title">{t('education.title')}</SectionTitle>

        <Reveal>
          <Card as="article" className="degree">
            <span className="degree__icon" aria-hidden="true"><FaGraduationCap /></span>
            <div>
              <h3 className="degree__title">{t('education.degree')}</h3>
              <p className="degree__school">{t('education.school')}</p>
              <Tag variant="brand">{education.period}</Tag>
              <p className="degree__description">{t('education.description')}</p>
            </div>
          </Card>
        </Reveal>

        <Reveal>
          <h3 className="certs__title">{t('education.certifications')}</h3>
        </Reveal>
        <RevealGroup as="ul" className="certs">
          {certifications.map(({ title, issuer, id, icon: Icon, color }) => (
            <RevealItem key={id}>
              <Card as="article" className="cert" style={{ '--cert-color': color }}>
                <span className="cert__icon" aria-hidden="true">
                  <Icon />
                </span>
                <div className="cert__body">
                  <h4 className="cert__name">{title}</h4>
                  <p className="cert__issuer">{issuer}</p>
                  <p className="cert__id" title={id}>
                    <span className="cert__id-label">{t('education.credentialId')}</span>
                    <code>{id}</code>
                  </p>
                </div>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}

export default Education
