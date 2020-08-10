import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar.js';
import Home from './components/Home';
import About from './components/About';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Details from './components/Details';
import Modal from './components/Modal'
import ThankYou from './components/ThankYou'

function App() {
  return (
  <React.Fragment>
     <div className="main">
     <Navbar />
  <Switch> 
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/cart" component={Cart} />
    <Route exact path="/default" component={Default} />
    <Route exact path="/productList" component={ProductList} />
    <Route exact path="/Details" component={Details} />
    <Route exact path="/ThankYou" component={ThankYou} />
  </Switch> 
    </div>
    <Modal />
    </React.Fragment>
  );
}

export default App;
