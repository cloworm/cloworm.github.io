import { FunctionComponent, useCallback } from 'react'

interface Props {
  children: string
  url: string
}

const ButtonLink: FunctionComponent<Props> = ({ children, url }) => {
  const handleClick = useCallback((event) => {
    event.stopPropagation()
  }, [])

  return (
    <div>
      <a
        onClick={handleClick}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:bg-theme_frenchPink bg-gradient-to-tr from-theme_frenchPink to-theme_carnationPink rounded-full font-semiBold text-white px-6 py-2"
      >
        {children}
      </a>
    </div>
  )
}

export default ButtonLink
