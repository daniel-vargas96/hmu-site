import Navbar from "./components/navbar";
import Footer from './components/footer';
import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Sales from './pages/sales';
import Courses from './pages/courses';
import Services from './pages/services';
import About from './pages/about-us';


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
            <Route path='/services' component={Services} />
            <Route path='/about-us' component={About}/>
          </Switch>
          <Footer />
        </Router>


      </>
    );
  }

}
