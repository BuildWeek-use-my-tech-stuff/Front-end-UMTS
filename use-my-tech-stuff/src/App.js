import React, { useState, useEffect } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { ProductsContext } from './contexts/ProductsContext';
import { MyRentalsContext } from './contexts/MyRentalsContext';
import { SavedContext } from './contexts/SavedContext';
import NewLogin from './components/NewLogin';
import NewSignUp from './components/NewSignUp';
import axiosWithAuth from './utils/axiosWithAuth';
import Header from './components/Header'
import PrivateRoute from "./components/PrivateRoute";
import { UserContext } from "./contexts/UserContext";
import Shop from './components/Shop'
import Account from './components/Account'
import DashItems from './components/DashItems';
import Loader from 'react-loader-spinner'



function App(props) {
  const [products, setProducts] = useState([]);
  const [saved, setSaved] = useState([]);
  const [myRentals, setMyRentals] = useState([]);
  const [user, setUser] = useState("");
  const [loading, setLoading] =useState(true)

  useEffect(() => {
    axiosWithAuth()
      .get('/items')
      .then(res => {
        console.log("Products successfully fetched!\n", res.data);
        setProducts(res.data);
        setLoading(false)
      })
      .catch(err => console.log("Error fetching products:\n", err));


  }, [products])


  useEffect(() => {
    axiosWithAuth()
      .get(`/items`)
      .then(res => {
        console.log("rentalsState", res.data)
        setMyRentals(res.data)
        setLoading(false)
      })
  }, [myRentals, products])

  if(loading === true){
    return(
    <div className="loading">
        <Loader 
        type="Circles"
        color="#40968e"
        height={200} width={150} />
    </div>
    )
} 



  return (
    <div className="App">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <MyRentalsContext.Provider value={{ products, setProducts, myRentals, setMyRentals, }}>
          <SavedContext.Provider value={{ saved, setSaved }}>
            <UserContext.Provider value={{ user, setUser }}>
              <Header />
              <Route exact path="/" component={NewLogin} />
              <Route path="/NewSignUp" component={NewSignUp} />
              <Route path="/shop/:id" component={Shop} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/account" component={Account} />
            </UserContext.Provider>
          </SavedContext.Provider>
        </MyRentalsContext.Provider>
      </ProductsContext.Provider>
    </div >
  );
};
export default App;