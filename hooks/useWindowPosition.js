import { useEffect, useState } from 'react'

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    function updatePosition() {
      const offsetSetHeight = window.document.getElementById(id).offsetHeight
      if (window.scrollY > offsetSetHeight * 0.7) {
        setAnimation(true)
      }
    }
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [id, setAnimation])

  return animation
}
