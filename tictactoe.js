document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");
  let currentPlayer = "X";
  let winner = false;

  squares.forEach((square) => {
    square.addEventListener("click", handleSquareClick);
  });

  const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function checkForWin() {
    let winner = false;
    winCondition.forEach((condition) => {
      const [a, b, c] = condition;
      if (
        squares[a].textContent &&
        squares[a].textContent === squares[b].textContent &&
        squares[b].textContent === squares[c].textContent
      ) {
        winner = currentPlayer;
      }
    });
    return winner;
  }

  function handleGameOver() {
    const winnerMsg = document.querySelector("#winner");
    winnerMsg.textContent = `${winner} is the winner!`;
    squares.forEach((square) => (square.style.pointerEvents = "none"));
  }

  function handleSquareClick(event) {
    const square = event.target;
    if (square.textContent !== "" || winner) return;
    square.textContent = currentPlayer;
    winner = checkForWin();
    if (winner) return handleGameOver();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  function resetGame() {
    squares.forEach((square) => {
      square.textContent = "";
      square.style.pointerEvents = "auto";
    });
    const winnerMsg = document.querySelector("#winner");
    winnerMsg.textContent = "";
    currentPlayer = "X";
    winner = false;
  }

  const resetButton = document.querySelector(".resetButton");
  resetButton.addEventListener("click", resetGame);
});
