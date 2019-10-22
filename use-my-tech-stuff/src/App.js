import React, { useState } from 'react';
import './App.css';
import TechContextProvider from './contexts/MyRentalsContext'
import RentersList from './components/RentersList';
import RentersForm from './components/RentersForm';
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductsContext from './contexts/ProductsContext';
import MyRentalsContext from './contexts/MyRentalsContext';
import SavedContext from './contexts/SavedContext';
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  // const [products, setProducts] = useState();
  // const [saved, setSaved] = useState();
  // const [myRentals, setMyRentals] = useState();

  // useEffect(() => {
  //   axios
  //     .get()
  //     .then(res => {
  //       console.log("Products successfully fetched!\n", res);
  //       setProducts(res.data);
  //     })
  //     .catch(err => console.log("Error fetching products:\n", err));
  // }, []);

  return (
    <div className="App">

      <Route exact path="/" component={LoginForm} />
      <Route path="/CreateAccount" component={SignUpForm} />
      <PrivateRoute path="/products" component={Dashboard} />
      <TechContextProvider>
        <RentersList />
        <RentersForm />
      </TechContextProvider>
      {/* <ProductsContext.Provider value={{ products, setProducts }}>
        <MyRentalsContext.Provider value={{ myRentals, setMyRentals }}>
          <SavedContext.Provider value={{ saved, setSaved }}>
            <Dashboard />
          </SavedContext.Provider>
        </MyRentalsContext.Provider>
      </ProductsContext.Provider> */}

    </div>
  );
}

export default App;