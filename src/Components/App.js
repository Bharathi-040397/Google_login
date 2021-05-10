import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch,useHistory,withRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'

import Login from '../Components/Login/Login'
import Home from './Home/Home'
import Products from './Product/Products';
import Cart from './Cart'
import Checkout from './Checkout'

function App() {
  const { user } = useSelector(state => state.user);
  const history = useHistory();

 useEffect(() => {
  if (!user) {
    window.location.pathnae="/"
  }
 }, [user])
  
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
