import { motion } from 'framer-motion'

const TAGS = { div: motion.div, ul: motion.ul, ol: motion.ol, li: motion.li, header: motion.header }
const VIEWPORT = { once: true, amount: 0.15 }
const EASE = [0.22, 1, 0.36, 1]

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

/** Fades and lifts its content in the first time it scrolls into view. */
const Reveal = ({ as = 'div', delay = 0, children, ...props }) => {
  const Element = TAGS[as]
  return (
    <Element
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay } } }}
      {...props}
    >
      {children}
    </Element>
  )
}

/** Container whose `RevealItem` children animate in one after another. */
export const RevealGroup = ({ as = 'div', stagger = 0.08, children, ...props }) => {
  const Element = TAGS[as]
  return (
    <Element
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      {...props}
    >
      {children}
    </Element>
  )
}

export const RevealItem = ({ as = 'li', children, ...props }) => {
  const Element = TAGS[as]
  return (
    <Element variants={itemVariants} {...props}>
      {children}
    </Element>
  )
}

export default Reveal
