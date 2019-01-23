import React from "react";

import "../styles/MovementArea.css";

class MovementArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 2,
      top: 5,
      left: 5
    };

    this.keypress = this.keypress.bind(this);
    this.sliderDefault = this.sliderDefault.bind(this);
    this.getPositions = this.getPositions.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.keypress);
  }

  keypress(event) {
    let { speed, top: topPosition, left: leftPosition } = this.state;
    let key = event.keyCode;

    switch (key) {
      case 37:
        leftPosition -= speed;
        if (leftPosition > 5) {
          this.setState({ left: leftPosition });
        } else {
          this.setState({ left: 5 });
        }
        break;
      case 38:
        topPosition -= speed;
        if (topPosition > 5) {
          this.setState({ top: topPosition });
        } else {
          this.setState({ top: 5 });
        }
        break;
      case 39:
        leftPosition += speed;
        if (leftPosition < 450) {
          this.setState({ left: leftPosition });
        } else {
          this.setState({ left: 445 });
        }
        break;
      case 40:
        topPosition += speed;
        if (topPosition <= 450) {
          this.setState({ top: topPosition });
        } else {
          this.setState({ top: 445 });
        }
        break;
      default:
        break;
    }
  }

  sliderDefault(event) {
    event.preventDefault();
  }

  handleSpeedChange(event) {
    this.setState({ speed: parseInt(event.target.value) });
  }

  getPositions() {
    let positions = {
      top: this.state.top,
      left: this.state.left
    };

    return positions;
  }

  render() {
    return (
      <div>
        <div className="movement-area">
          <img
            src="https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png"
            alt="react-logo"
            style={this.getPositions()}
          />
        </div>
        <div className="control-area">
          <h2>Control the speed with slider</h2>
          <input
            type="range"
            value={this.state.speed}
            onChange={this.handleSpeedChange}
            onKeyDown={this.sliderDefault}
            min="1"
            max="20"
          />
        </div>
      </div>
    );
  }
}

export default MovementArea;
