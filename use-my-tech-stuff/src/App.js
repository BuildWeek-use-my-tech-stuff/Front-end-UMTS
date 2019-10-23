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
import { UserContext } from "./contexts/UserContext";
import Account from './components/Account'



function App(props) {
  const [products, setProducts] = useState([]);
  const [saved, setSaved] = useState([]);
  const [myRentals, setMyRentals] = useState([]);
  const [user, setUser] = useState("");
  const [deleteItem, SetDeleteItem]=useState('')
  const [isEditing, setIsEditing] = useState(false)


  useEffect(() => {
    axiosWithAuth()
    .get('/items')
    .then(res => {
      console.log("Products successfully fetched!\n", res.data);
      setProducts(res.data);
    })
    .catch(err => console.log("Error fetching products:\n", err));

  },[])
  
  useEffect(() => {
    axiosWithAuth()
    .get(`/items`)
    .then(res=> {
      console.log("rentalsState", res.data)
      setMyRentals(res.data)
    })
  }, [myRentals])



  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <MyRentalsContext.Provider value={{ products, setProducts,myRentals,setMyRentals, isEditing, setIsEditing}}>
          <SavedContext.Provider value={{ saved, setSaved }}>
            <UserContext.Provider value={{ user, setUser }}>

              <Footer />
              <Route exact path="/" component={NewLogin} />
              <Route path="/account" component={Account} />
              {/* <PrivateRoute path="/shop/:id" component={Shop} />
              <PrivateRoute path="/dashboard" component={Dashboard} /> */}

            </UserContext.Provider>
          </SavedContext.Provider>
        </MyRentalsContext.Provider>
      </ProductsContext.Provider>

    </div>
  );
};

export default App;