import './Tag.scss'

/** Small pill label. Variants: neutral (default), brand, solid. */
const Tag = ({ children, variant = 'neutral', className = '' }) => (
  <span className={`tag tag--${variant} ${className}`.trim()}>{children}</span>
)

export const TagList = ({ items, variant }) => (
  <ul className="tag-list">
    {items.map((item) => (
      <li key={item}>
        <Tag variant={variant}>{item}</Tag>
      </li>
    ))}
  </ul>
)

export default Tag
