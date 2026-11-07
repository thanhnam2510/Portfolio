import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'

/** Counts from 0 to `value` once visible; screen readers get the final value only. */
const CountUp = ({ value, suffix = '', duration = 1.4, className }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || reduceMotion) return undefined
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    })
    return () => controls.stop()
  }, [inView, reduceMotion, value, duration])

  const shown = reduceMotion ? value : display

  return (
    <span ref={ref} className={className}>
      <span aria-hidden="true">{shown}{suffix}</span>
      <span className="visually-hidden">{value}{suffix}</span>
    </span>
  )
}

export default CountUp
