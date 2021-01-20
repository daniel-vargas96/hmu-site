import Navbar from "./components/navbar";
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Sales from './pages/sales';
import Courses from './pages/courses';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/sales' component={Sales} />
            <Route path='/courses' component={Courses} />
          </Switch>
        </Router>

      </>
    );
  }

}
