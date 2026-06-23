export const Winner = ({ winner, onReset }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>
          {winner == "Draw" ? "😐 Es un empate" : `🏆 El ganador es ${winner}`}
        </p>
      </div>
      <button className="ttt-reset" onClick={onReset}>
        Reiniciar juego
      </button>
    </div>
  );
};
