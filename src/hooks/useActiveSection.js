import { useEffect, useState } from 'react'

/** Id of the section currently under the fixed navbar, for scroll-spy highlighting. */
export const useActiveSection = (ids, offset = 100) => {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const update = () => {
      const position = window.scrollY + offset
      const current = ids.find((id) => {
        const element = document.getElementById(id)
        return element && position >= element.offsetTop && position < element.offsetTop + element.offsetHeight
      })
      if (current) setActive(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [ids, offset])

  return active
}
