import React,{useState, useEffect} from 'react';
import './App.css';
import TechContextProvider from './contexts/MyRentalsContext'
import RentersList from './components/RentersList';
import RentersForm from './components/RentersForm';
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProductsContext from './contexts/ProductsContext';
import MyRentalsContext from './contexts/MyRentalsContext';
import SavedContext from './contexts/SavedContext';
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



function App(props) {
  // const [products, setProducts] = useState();
  // const [saved, setSaved] = useState();
  // const [myRentals, setMyRentals] = useState();


    // axiosWithAuth()
    //   .get('/id/user-items', products)
    //   .then(res => {
    //     console.log("Products successfully fetched!\n", res.data);
    //     setProducts(res.data);
    //   })
    //   .catch(err => console.log("Error fetching products:\n", err));



  return (
    <div className="App">
       <Footer />
        <Route exact path ="/" component={NewLogin} />
        <PrivateRoute path="/DashItems" component={DashItems}/>
        <Route path="/shop/:id" component={Shop} />




      {/* <Route
        path="/movies/:id" render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      /> */}
      {/* <Route path ="/CreateAccount" component={Forms} /> */}
      {/* <TechContextProvider>
        <RentersList />
        <RentersForm />
      </TechContextProvider> */}
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