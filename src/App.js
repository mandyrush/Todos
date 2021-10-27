import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      todos: [],
      text: ''
    }
  }

  componentDidUpdate() {
    // console.log('After Clicked', this.state.isClicked);
    console.log('Updated text', this.state.text);
  }

  handleClick = () => {
    console.log('Before Clicked', this.state.isClicked);
    this.setState({
      isClicked : !this.state.isClicked
    });
  }

  handleChange = (event) => {
    this.setState({
      text : event.target.value
    });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

export default App;
