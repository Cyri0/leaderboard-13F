const App = () => {
  return (
    <>
      <header>
        <h1 className="glitch" data-text="HIGHSCORE">HIGHSCORE</h1>
        <p className="subtitle">Képzeletbeli Programozó Verseny · 2026</p>
        <div className="stamp">PROD-ON NEM FUT*</div>
      </header>

      <div id="board" className="board">
        <div className="board-head">
          <div className="cell">Helyezés</div>
          <div className="cell">Név</div>
          <div className="cell">Nyelv</div>
          <div className="cell">Pontszám</div>
          <div className="cell">Bugok</div>
        </div>
        <div className="board-body" id="board-body"></div>
      </div>
    </>
  )
}

export default App