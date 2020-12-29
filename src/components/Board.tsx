import { FC } from "react"
import BoardCell from 'components/BoardCell'

interface BoardProps {
  squares: any
  onClick: (index: number) => void
}

const Board: FC<BoardProps> = ({ squares, onClick }) => {
  return (
  <section className="board">
    <section className="board-row">
      <BoardCell value={squares[0]} onClick={() => onClick(0)} />
      <BoardCell value={squares[1]} onClick={() => onClick(1)} />
      <BoardCell value={squares[2]} onClick={() => onClick(2)} />
    </section>
    <section className="board-row">
      <BoardCell value={squares[3]} onClick={() => onClick(3)} />
      <BoardCell value={squares[4]} onClick={() => onClick(4)} />
      <BoardCell value={squares[5]} onClick={() => onClick(5)} />
    </section>
    <section className="board-row">
      <BoardCell value={squares[6]} onClick={() => onClick(6)} />
      <BoardCell value={squares[7]} onClick={() => onClick(7)} />
      <BoardCell value={squares[8]} onClick={() => onClick(8)} />
    </section>
  </section>
)}

export default Board