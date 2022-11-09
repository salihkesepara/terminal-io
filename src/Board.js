import { useEffect } from 'react'

const Board = (props) => {
  const { lineList } = props

  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [lineList])

  return (
    <div id="board">
      {lineList.map((item, key) => item(key))}
    </div>
  )
}

export default Board
