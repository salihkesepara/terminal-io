import { useEffect, useState } from 'react'
import { addListeners, prefix } from './utils'

const Command = (props) => {
  const {
    lineList = () => {},
    setLineList = () => {},
    onEnter = () => {},
    commands = []
  } = props
  const [inputValue, setInputValue] = useState('')

  const addLine = (line) => {
    setLineList([...lineList, line])
  }

  useEffect(() => {
    addListeners()
  }, [])

  const handleOnkeydown = (event) => {
    if (event.key === 'Enter') {
      handleEnter(event.target.value)
    }
  }

  const handleCommandUndefined = (command) => {
    const commandNotFound = (key) => {
      return (
        <p key={key}
          className="error">-bash: {command}: not found
        </p>
      )
    }
    addLine(commandNotFound)
  }

  function handleCommand (inputCommand) {
    onEnter(inputCommand)
    const selectedCommand = commands?.find((command) => command.name === inputCommand)

    if (typeof selectedCommand === 'undefined') {
      handleCommandUndefined(inputCommand)
    } else if (selectedCommand.name === 'clear') {
      setLineList([])
    } else {
      const styledInputCommand = (key) => {
        return (
          <div key={key}>
            <span className="code-color">
              {prefix}
            </span>
            <span className="typer">
              {inputCommand}
            </span>
          </div>
        )
      }

      setLineList([...lineList, styledInputCommand, selectedCommand.value])
    }
  }

  const handleEnter = (inputCommand) => {
    handleCommand(inputCommand.toLowerCase())
    setInputValue('')
  }

  return (
    <div id="command">
      <input id="input-command"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleOnkeydown}></input>
      <div id="liner">
        <span id="typer">{inputValue}</span>
        <b id="cursor" />
      </div>
    </div>
  )
}

export default Command
