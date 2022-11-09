import './index.css'
import Terminal from '../index'
import template from './template'
import React from 'react'

const App = () => {
  const commands = [
    { name: 'banner', value: template.banner }
  ]
  return (
    <Terminal commands={commands} />
  )
}

export default App
