import './style.css'
import { useEffect, useState } from 'react'
import Command from './Command'
import Board from './Board'

const Terminal = (props) => {
  const [lineList, setLineList] = useState([() => {}])
  const {
    onDidMount = () => {},
    onEnter = () => {},
    initialData = () => {},
    commands = [],
    className = ''
  } = props

  useEffect(() => {
    onDidMount()
    setLineList([initialData])
  }, [])

  return (
    <div id="terminal"
      className={className}>
      <Board lineList={lineList} />
      <Command
        lineList={lineList}
        setLineList={setLineList}
        onEnter={onEnter}
        commands={commands}
      />
    </div>
  )
}

export default Terminal
