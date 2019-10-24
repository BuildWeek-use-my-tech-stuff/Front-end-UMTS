import React, { useState, useEffect } from 'react';
import './App.css';

import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ProductsContext } from './contexts/ProductsContext';
import { MyRentalsContext } from './contexts/MyRentalsContext';
import { SavedContext } from './contexts/SavedContext';
import NewLogin from './components/NewLogin';
import axiosWithAuth from './utils/axiosWithAuth';
import Footer from './components/Footer'
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/UserContext";

import Shop from './components/Shop'
// import PrivateRoute from './components/PrivateRoute'
// import MyRentalsContext from './contexts/MyRentalsContext'

import Signup from './components/Signup';
import Account from './components/Account'
import Product from './components/Product';
import DashItems from './components/DashItems';
// import { UserContext } from './contexts/UserContext';



function App(props) {
  const [products, setProducts] = useState([]);
  const [saved, setSaved] = useState([]);
  const [myRentals, setMyRentals] = useState([]);
  const [user, setUser] = useState("");




  // useEffect(() => {
  //   console.log("User:\n", user);
  // }, [user]);

  useEffect(() => {
    axiosWithAuth()

      .get('/items')
      .then(res => {
        console.log("Products successfully fetched!\n", res.data);
        setProducts(res.data);
      })
      .catch(err => console.log("Error fetching products:\n", err));


  }, [])


  useEffect(() => {
    axiosWithAuth()
      .get(`/items`)
      .then(res => {
        console.log("rentalsState", res.data)
        setMyRentals(res.data)
      })
  }, [ ])







  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <MyRentalsContext.Provider value={{ products, setProducts, myRentals, setMyRentals, }}>
          <SavedContext.Provider value={{ saved, setSaved }}>
            <UserContext.Provider value={{ user, setUser }}>

              <Footer />
              <Route exact path="/" component={NewLogin} />
              <Route path="/test" component={DashItems} />
              <Route path="/create-account" component={Signup} />
              <Route path="/shop/:id" component={Shop} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <Route path="/account" component={Account} />
              {/* <PrivateRoute path="/shop/:id" component={Shop} />
              <PrivateRoute path="/dashboard" component={Dashboard} /> */}

            </UserContext.Provider>
          </SavedContext.Provider>
        </MyRentalsContext.Provider>
      </ProductsContext.Provider>

    </div >
  );
};

export default App;