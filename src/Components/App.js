import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from '../Components/Login/Login'
import Home from './Home/Home'
import Products from './Product/Products';
import Cart from './Cart'
import Checkout from './Checkout'



function App() {
  

  return (
    <Router>
     
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home}/>
        <Route path="/products" exact component={Products} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/checkout" exact component={Checkout} />
      </Switch>
    
    </Router>
  );
}

export default App;
