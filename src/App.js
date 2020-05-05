import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';
import HelloWorld from './Components/HelloWorld';

class App extends Component {
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  state = {
    persons: [
      { name: 'kiran', age: 28 },
      { name: 'Leela', age: 24 },
      { name: 'Raju', age: 29 }
    ]
  }
  switchNameHandler = (newName) => {
    // console.log('switchNameHandler');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Leela1', age: 24 },
        { name: 'Raju1', age: 29 }
      ]
    })
  }
  nameUpdatedHandler = (event) => {
    console.log(event);
    this.setState({
      persons: [
        { name: event.target.name, age: 28 },
        { name: 'asdfdf', age: 24 },
        { name: 'Raju1', age: 29 }
      ]
    })
  }
  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   font: 'inherit',
    //   border: '1px solid #ccc',
    //   padding: '8px',
    //   cursor: 'pointer'
    // };
    return (
      <div className='App'>
        {/* <h1>I'm in React JSX</h1>
        <p>This is another tag</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Raju Kiran')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          changed={this.nameUpdatedHandler}>Testing children</Person>
        <Person 
          name={this.state.persons[1].name} 
          changed={this.nameUpdatedHandler}/>
        <Person 
          name={this.state.persons[2].name} 
          changed={this.nameUpdatedHandler}/> */}
        <HelloWorld name={this.state.techName}></HelloWorld>
      </div>
    );
  }
}

export default App;
