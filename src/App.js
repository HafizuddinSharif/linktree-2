import React, { Component } from 'react'
import './App.css';
import BigCard from './BigCard/BigCard'
import Logo from './Logo/Logo'

class App extends Component {

  state = {
      number: "Lol"
    }

  switchNameHandler = (yeah) => {
    // console.log('Clicked')

    this.setState( {
      number: yeah
    })

    
  }

  render() {
    return (
      <div className="App h-screen">
        <div className="">
          <Logo />
          <BigCard />
        </div>
      </div>
    );
  }
  
}

export default App;
