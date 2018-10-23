import React, { Component } from 'react';
import './App.css';
import { subscribeToTimer, subscribeToTodos, emitTodo} from './api';

class App extends Component {

  constructor(props) {
    super(props);
    subscribeToTimer((err, timestamp) => this.setState({ 
      timestamp 
    }));
    subscribeToTodos((err, todo) => {
      let newTodos = this.state.list;
      newTodos.push(todo);
      this.setState({ 
      list: newTodos 
    })
  }
    );

    this.state = {
      timestamp: 'no timestamp yet',
      inTodo: '',
      list: []
    };

    this.change = this.change.bind(this);
  }

  change(e){
    const target = e.target;
    const value = target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  onSubmit(e){
    e.preventDefault();
    emitTodo(this.state.inTodo);
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
        This is the timer value: {this.state.timestamp}
        </p>
        <h1>TODO</h1>
        <form> 
          <input name='inTodo' type='text' value={this.state.inTodo} onChange={this.change}></input>
          <button onClick={e=>this.onSubmit(e)}>Enviar</button>
        </form>
        <ul>
          {this.state.list.map(t => <li>{t}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
