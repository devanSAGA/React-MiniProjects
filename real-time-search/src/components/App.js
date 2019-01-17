import React from "react";
import StarWarsCharacters from "../data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      characters: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ characters: StarWarsCharacters });
  }

  handleChange(event) {
    this.setState({ searchString: event.target.value }, () => {
      let searchString = this.state.searchString.trim().toLowerCase();
      let filteredCharacters = StarWarsCharacters.filter(character =>
        character.toLowerCase().match(searchString)
      );
      if (filteredCharacters.length === 0) {
        filteredCharacters.push("No character found!");
      }
      this.setState({ characters: filteredCharacters });
    });
  }

  render() {
    return (
      <div className="container">
        <span className="sub-heading"> Search Here </span>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}
          placeholder="Type here..."
        />
        <div className="content">
          <ul className="list">
            {this.state.characters.map((character, index) => {
              return <li key={index}>{character}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}
export default App;
