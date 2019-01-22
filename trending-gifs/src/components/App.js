import React from "react";

import Header from "./Header";
import Controller from "./Controller";
import DisplayGIFs from "./DisplayGIFs";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: undefined
    };

    this.fetchGIFs = this.fetchGIFs.bind(this);
    this.reverseOrder = this.reverseOrder.bind(this);
    this.randomizeOrder = this.randomizeOrder.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  fetchGIFs() {
    this.setState({ isLoading: true });

    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=qoAXODxk4dI1QziXiywBRLWmSzXHUiNr"
    )
      .then(response => response.json())
      .then(res => {
        let fetchedGIFS = res.data.map(item => item.images.fixed_height.url);
        this.setState({ data: fetchedGIFS, isLoading: false });
      })
      .catch(error => this.setState({ isLoading: false, error }));
  }

  reverseOrder() {
    let reversedArray = this.state.data;
    this.setState({ data: reversedArray.reverse() });
  }

  randomizeOrder() {
    let randomizedArray = this.state.data;
    for (let i = randomizedArray.length - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i + 1));
      [randomizedArray[i], randomizedArray[randIndex]] = [
        randomizedArray[randIndex],
        randomizedArray[i]
      ];
    }
    this.setState({ data: randomizedArray });
  }

  clearAll() {
    this.setState({ data: [] });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Controller
          fetchGIFs={this.fetchGIFs}
          reverseOrder={this.reverseOrder}
          randomizeOrder={this.randomizeOrder}
          clearAll={this.clearAll}
        />
        <DisplayGIFs data={this.state.data} />
      </div>
    );
  }
}

export default App;
