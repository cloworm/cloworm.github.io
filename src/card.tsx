import React, { ReactElement, useCallback, useMemo } from 'react'

import Chip from './chip'
import ButtonLink from './button-link'
import useExpandedCard from './hooks/useExpandedCard'

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

const Tags = ({ tags }: { tags: string[] }): ReactElement => {
  return <>
    {
      tags.map((tag, idx) => {
        return (
          <div key={idx} className="inline-block">
            <Chip>{tag}</Chip>
          </div>
        )
      })
    }
  </>
}

const Card = ({
  year,
  name,
  description,
  repo,
  link,
  bgImage,
  bgPosition,
  flipped,
  tags,
}: Props): ReactElement => {
  const [expandedCard, setExpandedCard] = useExpandedCard()
  const uriFriendlyName = useMemo<string>(() => encodeURIComponent(name), [name])
  const isExpanded = useMemo<boolean>(() => expandedCard === uriFriendlyName, [expandedCard, uriFriendlyName])
  const handleClick = useCallback(() => {
    setExpandedCard((prevExpandedCard) => {
      const nextExpandedCard = prevExpandedCard === uriFriendlyName ? null : uriFriendlyName
      if (nextExpandedCard) {
        // TODO: Smooth scroll
        window.location.hash = uriFriendlyName
      }
      return nextExpandedCard
    })
  }, [uriFriendlyName, setExpandedCard])

  return (
    <div
      id={uriFriendlyName}
      className={`
        grid
        relative
        rounded-xl
        group
        shadow
        transition-all
        text-left
        lg:grid-cols-2
        mb-10
        transform
        cursor-pointer
        ${isExpanded ? '' : 'hover:scale-105 hover:border-transparent hover:shadow-xl' }
        ${isExpanded ? 'scale-110 shadow-xl' : '' }
      `}
      onClick={handleClick}
    >
      <div className={`${flipped ? 'order-first lg:order-1 rounded-t-xl lg:rounded-t-none lg:rounded-r-xl' : 'order-first rounded-t-xl lg:rounded-t-none lg:rounded-l-xl'} px-6 py-6 lg:px-8 lg:py-8 bg-white`}>
        <p className="text-sm font-semibold text-theme_pink">
          {year}
        </p>
        <div className="pb-3">
          <div className="float-right space-x-2">
            <ButtonLink url={repo}>Source</ButtonLink>
            <ButtonLink url={link}>Demo</ButtonLink>
          </div>
          <p className="text-2xl font-bold tracking-wide align-center">
            {name}
          </p>
        </div>

        <p className="lg:pb-10 text-sm">
          {description}
        </p>
        <div className="hidden lg:block">
          <Tags tags={tags} />
        </div>

      </div>

      <div
        style={{ backgroundImage: bgImage }}
        className={`
          bg-cover
          ${bgPosition ? bgPosition : 'bg-left-top'}
          bg-no-repeat
          ${flipped ? 'lg:rounded-l-xl' : 'lg:rounded-r-xl'}
          flex justify-center
          border-l-4 border-r-4 lg:border-4 border-white
          h-40 lg:h-auto
        `}
      />
      <div className="lg:hidden bg-white rounded-b-xl px-6 py-6">
        <Tags tags={tags} />
      </div>
    </div>
  )
}

export default Card
