import './Button.scss'

/** Renders an `<a>` when `href` is given, otherwise a `<button>`. Variants: primary, light, outline. */
const Button = ({ children, variant = 'primary', type = 'button', href, className = '', ...props }) => {
  const classes = `btn btn--${variant} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
