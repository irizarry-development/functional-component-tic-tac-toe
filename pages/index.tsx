import { FC, useState } from 'react'

import Board from 'components/Board'

import { calculateWinner } from 'helpers/calculateWinner'

interface Square {
  squares: any
}

const Home: FC = () => {

  const [history, setHistory] = useState<Square[]>([{squares: Array(9).fill(null)}])
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [xIsNext, setXisNext] = useState<boolean>(true)

  const _handleClick = (index: number) => {
    const _history = history.slice(0, stepNumber + 1)
    const _current = _history[_history.length - 1]
    const _squares = _current.squares.slice()

    if (calculateWinner(_squares) || _squares[index]) 
      return

    _squares[index] = xIsNext ? "X" : "O"
    
    setHistory(_history.concat([{squares: _squares}]))
    setStepNumber(_history.length)
    setXisNext(!xIsNext)
  }

  const _jumpTo = (step: number) => {
    if (step < 0 || step > history.length - 1)
      return

    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const _displayStatus = () =>
    calculateWinner(history[stepNumber].squares) ? `Winner` : `Next player: ${xIsNext ? "X" : "O"}`

  return (
    <section className="game-container">
      <section className="game">
        <section className="game-board">
          <Board 
            squares={history[stepNumber].squares}
            onClick={_handleClick}
          />
        </section>
        <section className="game-info">
          <section className="status">
            {_displayStatus()}
          </section>
          <section className="move-controls">
            <button className="caret left" onClick={() => _jumpTo(stepNumber - 1)}/>
            <button onClick={() => _jumpTo(0)}>Go to Beginning</button>
            <button className="caret right" onClick={() => _jumpTo(stepNumber + 1)}/>
          </section>
        </section>
      </section>
    </section>
  )
}

export default Home
