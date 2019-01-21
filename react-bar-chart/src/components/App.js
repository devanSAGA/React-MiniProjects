import React from "react";
import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: undefined
    };
    this.displayBarChart = this.displayBarChart.bind(this);
  }

  displayBarChart() {
    let xAxisLabels = [];
    let { data } = this.state;
    let renderData = data.map((item, index) => {
      if (index % 25 === 0) {
        xAxisLabels[index] = item[0].substring(0, 4);
      }
      return (
        <div key={`outer-wrapper-div-${index}`}>
          <div
            className="bar"
            key={`bar${index}`}
            style={{
              height: Math.round(parseFloat(item[1])) / 40,
              width: 1000 / (data.length - 1)
            }}
          >
            <span className="bar-info">
              {`Date: ${item[0]}`}
              <br />
              {`GDP: $${item[1]} billions`}
            </span>
          </div>
          <div className="bar-label">{xAxisLabels[index]}</div>
        </div>
      );
    });
    return renderData;
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(
      "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
    )
      .then(response => response.json())
      .then(res => this.setState({ data: res.data, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    return (
      <div className="app">
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="container">
            <h1>Modeling Statistical data with React</h1>
            <div className="bar-chart-container">{this.displayBarChart()}</div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
