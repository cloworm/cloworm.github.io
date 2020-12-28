import React, { FunctionComponent, useCallback } from 'react'

import ButtonLink from './button-link'

interface Props {
  year: number
  name: string
  description: string
  repo: string
  link: string
  bgImage: string
  bgPosition?: string
  flipped: boolean
  tags: string[],
}

const Tags = ({ tags }: { tags: string[] }) => {
  return <>
    {
      tags.map((tag, idx) => {
        return (
          <div key={idx} className="inline-block text-sm text-gray-400">
            {tag}&nbsp;{idx < tags.length - 1 ? <span>&middot;&nbsp;</span> : ''}
          </div>
        )
      })
    }
  </>
}

const Card: FunctionComponent<Props> = ({
  year,
  name,
  description,
  repo,
  link,
  bgImage,
  bgPosition,
  flipped,
  tags,
}) => {
  const handleCardClick = useCallback(() => {
    window.open(link, '_blank', 'noopener noreferrer')
  }, [link])

  const handleRepoClick = useCallback((event) => {
    event.stopPropagation()
  }, [])

  return (
    <div
      onClick={handleCardClick}
      role="button"
      aria-label="Live Demo"
      className={`
        grid
        relative
        transition-all
        rounded-3xl
        group
        transition-all
        text-left
        lg:grid-cols-2
        mb-20
        transform
        neumorphic
        hover:neumorphic-hover
        bg-white
        cursor-pointer
      `}
    >
      <div className={`${flipped ? 'order-first lg:order-1 rounded-t-3xl lg:rounded-t-none lg:rounded-r-3xl' : 'order-first rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl'} px-6 py-6 lg:px-8 lg:py-8 bg-white`}>
        <p className="text-sm font-semibold text-theme_carnationPink">
          {year}
        </p>
        <div className="pb-3">
          <p className="text-2xl font-bold tracking-wide align-center">
            {name}
            <a className="relative -top-1 pl-2.5 hover:text-theme_frenchPink" href={repo} target="_blank" rel="noopener noreferrer" onClick={handleRepoClick}>
              <svg className="inline" width="28px" height="28px" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub icon</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
          </p>
        </div>

        <p className="lg:pb-4">
          {description}
        </p>
        <div className="hidden lg:block">
          <div className="pb-6">
            <Tags tags={tags} />
          </div>
          <div>
            <ButtonLink url={link}>Launch Demo</ButtonLink>
          </div>
        </div>

      </div>

      <div
        style={{ backgroundImage: bgImage }}
        className={`
          bg-cover
          ${bgPosition ? bgPosition : 'bg-left-top'}
          bg-no-repeat
          ${flipped ? 'lg:rounded-3xl' : 'lg:rounded-3xl'}
          flex justify-center
          h-40 lg:h-auto
          border-l-8 border-r-8 lg:border-8 border-white
        `}
      />
      <div className="lg:hidden bg-white rounded-b-xl px-6 py-6">
        <div className="pb-4">
          <Tags tags={tags} />
        </div>
        <div>
          <ButtonLink url={link}>Launch Demo</ButtonLink>
        </div>
      </div>
    </div>
  )
}

export default Card
