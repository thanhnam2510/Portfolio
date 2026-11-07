import './Card.scss'

const Card = ({ children, as: Element = 'div', className = '', hover = true, ...props }) => (
  <Element className={`card ${hover ? 'card--hover' : ''} ${className}`.trim()} {...props}>
    {children}
  </Element>
)

export default Card
