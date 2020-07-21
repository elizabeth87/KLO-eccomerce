import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar.js';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';

function App() {
  return (
  <Router>
     <div className="main">
     <Navbar />
  <Switch> 
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/default" component={Default} />
    <Route exact path="/productList" component={ProductList} />
  </Switch> 
    </div>
    </Router>
  );
}

export default App;
