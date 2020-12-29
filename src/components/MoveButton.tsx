import { FC } from "react"

interface MoveProps {
  jumpTo: (move: number) => void
  move: number
  description: string
}

const MoveButton: FC<MoveProps> = ({ jumpTo, move, description }) => (
  <li>
    <button onClick={() => jumpTo(move)}>{ description }</button>
  </li>
)

export default MoveButton