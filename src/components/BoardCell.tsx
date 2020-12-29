import { FC } from "react"

interface BoardCellProps {
  value: number
  onClick: Function
}

const BoardCell: FC<BoardCellProps> = ({ value, onClick }) => (
  <button className="board-cell" onClick={() => onClick(value)}>
    {value}
  </button>
)

export default BoardCell