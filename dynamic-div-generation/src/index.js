import React from "react";
import ReactDOM from "react-dom";

import SquareList from "./SquareList";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      addMore: true
    };

    this.handleChangeSquares = this.handleChangeSquares.bind(this);
  }

  componentDidMount() {
    setInterval(this.handleChangeSquares, 100);
  }

  handleChangeSquares() {
    let { count, addMore } = this.state;
    if (addMore) {
      if (count < 50) {
        count++;
      } else {
        count--;
        addMore = false;
      }
    } else {
      if (count > 0) {
        count--;
      } else {
        count++;
        addMore = true;
      }
    }

    this.setState({
      count,
      addMore
    });
  }

  render() {
    return (
      <div>
        <SquareList count={this.state.count} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
