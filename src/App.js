import React, { createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      {/* <h3>email: {loggedInUser.email}</h3> */}
      
    
    <Router>
    <Header></Header>
    <Switch>
      <Route path="/shop">
      <Shop></Shop>
      </Route>
      <Route path="/review">
      <Review></Review>      
      </Route>
      <PrivateRoute path="/orders">
      <Inventory></Inventory>      
      </PrivateRoute>
      <Route path="/login">
      <Login></Login>    
      </Route>
      <PrivateRoute path="/shipment">
      <Shipment></Shipment>     
      </PrivateRoute>
      <Route path="/product/:productKey">
      <ProductDetail></ProductDetail>
      </Route>
      <Route exact path="/">
      <Shop></Shop> 
      </Route>
      <Route path="*">
      <Notfound></Notfound>      
      </Route>
      
      
    </Switch>



    </Router> 
    </UserContext.Provider> 
    
      
      
    
  );
}

export default App;
