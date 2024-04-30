import React from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import Download from './views/download'

function App() {
  return (
    <div className="App">
      <Download name="zhangjingyi" age={25} height={165}>
        <div>李峋</div>
        <span>朱韵</span>
      </Download>
      <div className="main">{useRoutes(routes)}</div>
    </div>
  )
}

export default App
