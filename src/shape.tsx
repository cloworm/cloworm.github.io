import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

interface Props {
  color?: string
}

const Shape: FunctionComponent<Props> = ({ color }) => {
  return (
    <motion.div className="relative inline-block z-auto"
      whileHover={{
        scale: 1.3,
        opacity: 0,
        transition: { ease: 'easeOut', duration: 0.15,
        },
        transitionEnd: {
          scale: 1
        }
      }}
      whileTap={{
        scale: 1.3,
        opacity: 0,
        transition: { ease: 'easeOut', duration: 0.15,
        },
        transitionEnd: {
          scale: 1
        }
      }}
    >
      <motion.div
        className={`h-24 w-24 rounded-full bg-theme_oceanBlue ${color === 'green' ? 'radial-gradient-green' : (color === 'pink' ? 'radial-gradient-pink' : 'radial-gradient-purple')}`}
        animate={{
          translateY: -15,
        }}
        transition={{ ease: [0.445, 0.05, 0.55, 0.95], repeat: Infinity, repeatType: 'reverse', duration: 1 }}
      />
    </motion.div>
  )
}

export default Shape
