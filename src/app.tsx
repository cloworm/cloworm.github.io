import React, { FunctionComponent } from 'react'
import Footer from './footer'
import Header from './header'

import Projects from './projects'

const App: FunctionComponent = () => {
  return (
    <div className="bg-theme_ghostWhite">
      <Header />

      <Projects />

      <Footer />
    </div>
  )
}

export default App
