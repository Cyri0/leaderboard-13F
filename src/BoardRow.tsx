import type { PlayerData } from "./players"

type BoardRowType = {
    data: PlayerData,
    idx: number
}

const BoardRow = ({data, idx}:BoardRowType) => {
    const {bugs,lang,name,score} = data
    return (
        <div className="board-row">
            <div className="rank">#{idx + 1}</div>
            <div>
                <span className="name rainbow">{name}</span>
            </div>
            <div>
                <span className="lang">{lang}</span>
            </div>
            <div className="score">{score}</div>
            <div className="bugs">{bugs}x 🐛</div>
        </div>
    )
}

export default BoardRow