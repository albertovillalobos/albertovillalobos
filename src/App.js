import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import styles from './app.module.scss';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Portfolio from './components/portfolio';

const App = () => {

  return (
    <Router>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.app}>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
