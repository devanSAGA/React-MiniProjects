import React from "react";

import Board from "./Board";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      isXNext: true,
      stepNumber: 0
    };

    //this.handleClick = this.handleClick.bind(this);
    //this.getStatus = this.getStatus.bind(this);
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.isXNext ? "X" : "O";
    this.setState(prevState => ({
      history: history.concat([{ squares }]),
      isXNext: !prevState.isXNext,
      stepNumber: history.length
    }));
  }

  jumpToMove(stepNumber) {
    this.setState({
      stepNumber,
      isXNext: stepNumber % 2 === true
    });
  }
  /*--------------------------------------------helper methods---------------------------------------------------*/
  getStatus(winner) {
    let status = "";
    if (winner) {
      status = "Winner is: " + winner;
    } else {
      status = "Next Turn: " + (this.state.isXNext ? "X" : "O");
    }
    return status;
  }

  checkWinner(values) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        values[a] === values[b] &&
        values[c] === values[b] &&
        values[c] === values[a]
      ) {
        return values[a];
      }
    }
    return null;
  }
  /*----------------------------------------------------------------------------------------------------------------*/

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.checkWinner(current.squares);
    const status = this.getStatus(winner);

    const moves = history.map((step, index) => {
      const buttonText = index ? "Go to move #" + index : "Go to game start";
      return (
        <li key={index}>
          <button onClick={() => this.jumpToMove(index)}>{buttonText}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
