import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import './App.css';
import Navbar from './component/layout/Navbar';
import Home from './component/Home';
import Restaurants from './component/restaurant/Restaurants';
import AddRestaurant from './component/restaurant/AddRestaurant';

function App() {
  return (
    <Router className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurant" component={Restaurants} />
      <Route exact path="/addrestaurant" component={AddRestaurant} />
    </Router>
  );
}

export default App;