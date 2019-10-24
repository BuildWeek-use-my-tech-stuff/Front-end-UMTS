import React, { useState, useEffect } from 'react';
import './App.css';
import TechContextProvider from './contexts/MyRentalsContext'
import RentersList from './components/RentersList';
import RentersForm from './components/RentersForm';
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ProductsContext } from './contexts/ProductsContext';
import { MyRentalsContext } from './contexts/MyRentalsContext';
import { SavedContext } from './contexts/SavedContext';
import Forms from './components/SignUpForm'
import NewLogin from './components/NewLogin';
import axiosWithAuth from './utils/axiosWithAuth';
import axios from 'axios'
import PrivateRoute from './components/PrivateRoute'
import DashItems from './components/DashItems'
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import Footer from './components/Footer'
import Shop from './components/Shop'
// import MyRentalsContext from './contexts/MyRentalsContext'

import Signup from './components/Signup';
import Account from './components/Account'
import Header from './components/Header';
import NewSignUp from './components/NewSignUp';



function App(props) {
  const [products, setProducts] = useState([]);
  const [saved, setSaved] = useState([]);
  const [myRentals, setMyRentals] = useState([]);
  const [user, setUser] = useState("");
  const [deleteItem, SetDeleteItem] = useState('');


  useEffect(() => {
    axiosWithAuth()
      .get('/items')
      .then(res => {
        console.log("Products successfully fetched!\n", res.data);
        setProducts(res.data);
      })
      .catch(err => console.log("Error fetching products:\n", err));

  }, [])


  const removeItem = (id) => {
    setProducts(products.filter(tech => tech.id !== id));
  }


  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <MyRentalsContext.Provider value={{ products, setProducts, removeItem }}>
          <SavedContext.Provider value={{ saved, setSaved }}>


            <Header />
            <Route exact path="/" component={NewLogin} />
            <Route path="/NewSignUp" component={NewSignUp} />
            <PrivateRoute path="/shop/:id" component={Shop} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <Route path="/account" component={Account} />
            {/* <PrivateRoute path="/shop/:id" component={Shop} />
              <PrivateRoute path="/dashboard" component={Dashboard} /> */}


          </SavedContext.Provider>
        </MyRentalsContext.Provider>
      </ProductsContext.Provider>

    </div>
  );
};

export default App;