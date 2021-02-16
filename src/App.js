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
import Overhaul from './pages/overhaul';
import Fumigation from './pages/fumigation';
import Inspection from './pages/pre-purchase-inspection';


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
            <Route path='/overhaul' component={Overhaul} />
            <Route path='/fumigation' component={Fumigation} />
            <Route path='/inspection' component={Inspection} />
          </Switch>
          <Footer />
        </Router>


      </>
    );
  }

}
