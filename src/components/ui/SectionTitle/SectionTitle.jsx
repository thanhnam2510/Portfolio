import Reveal from '@/components/ui/Reveal/Reveal'
import './SectionTitle.scss'

/** Centered section heading with an optional lead paragraph. */
const SectionTitle = ({ children, lead, id }) => (
  <Reveal as="header" className="section-heading">
    <h2 className="section-heading__title" id={id}>{children}</h2>
    {lead && <p className="section-heading__lead">{lead}</p>}
  </Reveal>
)

export default SectionTitle
