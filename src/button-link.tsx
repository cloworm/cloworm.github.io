import React, { ReactElement, useCallback } from 'react'

interface Props {
  children: string
  url: string
}

const ButtonLink = ({ children, url }: Props): ReactElement => {
  const handleClick = useCallback((event) => {
    event.stopPropagation()
  }, [])

  return (
    <a
      onClick={handleClick}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-500 hover:bg-theme_pink rounded font-medium text-sm italic text-gray-900 align-bottom px-2 py-0.5"
    >
      {children}
    </a>
  )
}

export default ButtonLink
