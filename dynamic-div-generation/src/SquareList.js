import React from "react";
import Square from "./Square";

class SquareList extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      squareList: []
    };
  }*/

  render() {
    let squareList = [];
    const { count } = this.props;
    for (let i = 0; i < count; i++) {
      let singleSquare = (
        <li key={i}>
          <Square />
        </li>
      );
      //this.setState({ squareList: [singleSquare, ...this.state.squareList] });
      squareList.push(singleSquare);
    }

    return <ul className="list">{squareList}</ul>;
  }
}

export default SquareList;
