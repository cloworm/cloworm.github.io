import React, { ReactElement } from 'react'

interface Props {
  children: string
}

const Chip = ({ children }: Props): ReactElement => {
  return (
    <div
      className="rounded-full bg-theme_periwinkle text-sm inline-block px-5 py-1 mr-1 mb-1"
    >
      {children}
    </div>
  )
}

export default Chip
