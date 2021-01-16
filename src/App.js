import './App.css';
import Navbar from "./components/navbar"
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <div>
        <header>
          <Navbar />
        </header>
      </div>
    );
  }

}
