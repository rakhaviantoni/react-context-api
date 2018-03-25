import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// create context
const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: 'Rakha',
    age: 20,
    cool: true
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({
          age: this.state.age + 1
        }),
        decreaseAYearOlder: () => this.setState({
          age: this.state.age - 1
        })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const Family = (props) => (
  <div classname="family">
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div className="person">
        <MyContext.Consumer>
        {(context) => (
          <React.Fragment>
            <p>Name: {context.state.name}</p>
            <p>Age: {context.state.age}</p>
            <button onClick={context.growAYearOlder}>Naik</button>
            <button onClick={context.decreaseAYearOlder}>Turun</button>
          </React.Fragment>
        )}
        </MyContext.Consumer>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MyProvider>
          <Family />
        </MyProvider>
      </div>
    );
  }
}

export default App;
