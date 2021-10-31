import React from 'react';
import Todo from './components/Todo';

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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Before Clicked', this.state.isClicked);
    this.setState({
      todos : [...this.state.todos, this.state.text],
      text: ''
    })
  }

  deleteTodo = (index) => {
    let copyOfTodos = this.state.todos;
    copyOfTodos.splice(index, 1);
    this.setState({
      todos: [...copyOfTodos]
    })
  }

  handleChange = (event) => {
    this.setState({
      text : event.target.value
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
            <Todo 
              key={index} 
              index={index} 
              todo={todo} 
              deleteTodo={this.deleteTodo} />
          ))}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text} />
          <button type="submit">Click Me</button>
        </form>
      </div>
    );
  }
}

export default App;
