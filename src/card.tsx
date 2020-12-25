import React, { ReactElement } from 'react'

import Project from './types/project.type'
import Chip from './chip'
import ButtonLink from './button-link'

interface Props {
  flipped: boolean
  project: Project
}

const Card = ({ project, flipped }: Props): ReactElement => {
  return (
    <div className="relative rounded-xl group hover:border-transparent hover:shadow-xl shadow transition-all text-left grid lg:grid-cols-2 mb-10 transform hover:scale-105">
      <div className={`${flipped ? 'order-first lg:order-1 rounded-t-xl lg:rounded-t-none lg:rounded-r-xl' : 'order-first rounded-t-xl lg:rounded-t-none lg:rounded-l-xl'} px-6 py-6 lg:px-8 lg:py-8 bg-white`}>
        <p className="text-sm font-semibold text-theme_pink">
          {project.year}
        </p>
        <div className="pb-3">
          <div className="float-right space-x-2">
            <ButtonLink url={project.repo}>Source</ButtonLink>
            <ButtonLink url={project.link}>Demo</ButtonLink>
          </div>
          <p className="text-2xl font-bold tracking-wide align-center">
            {project.name}
          </p>
        </div>
        <p className="lg:pb-10 text-sm">
          {project.description}
        </p>
        <div className="hidden lg:block">
          {project.tags.map((tag, idx) => {
            return (
              <div key={`${project.name}-div${idx}`} className="inline-block">
                <Chip key={`${project.name}-${idx}`}>{tag}</Chip>
              </div>
            )
          })}
        </div>

      </div>

      <div style={{ backgroundImage: project.bgImage }} className={`bg-cover ${project.bgPosition ? project.bgPosition : 'bg-left-top'} bg-no-repeat ${flipped ? 'lg:rounded-l-xl' : 'lg:rounded-r-xl'} flex justify-center border-l-4 border-r-4 lg:border-4 border-white h-40 lg:h-auto`}>
      </div>
      <div className="lg:hidden bg-white rounded-b-xl px-6 py-6">
        {project.tags.map((tag, idx) => {
          return (
            <div key={`${project.name}-div${idx}`} className="inline-block">
              <Chip key={`${project.name}-${idx}`}>{tag}</Chip>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Card
