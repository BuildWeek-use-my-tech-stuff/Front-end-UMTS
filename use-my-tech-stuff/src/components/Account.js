import React,{useState, useEffect, useContext} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {MyRentalsContext} from '../contexts/MyRentalsContext'
import RentersDisplay from '../components/RentersDisplay'
import RentersForm from './RentersForm'
import NewRentersForm from './NewRentersForm'
import axios from 'axios'


const Account = () => {

    const {products}=useContext(MyRentalsContext)
    const [rentersProducts,setRentersProducts]=useState([])

    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:5000/api/movies/`)
    //     .then(res => {
    //       console.log("Products successfully fetched!\n", res.data);
    //       setRentersProducts(res.data);
    //     })
    //     .catch(err => console.log("Error fetching products:\n", err));
    
    //   },[])
      
    useEffect(() => {
        axiosWithAuth()
        .get(`items/`)
        .then(res => {
          console.log("Products successfully fetched!\n", res.data);
          setRentersProducts(res.data);
        })
        .catch(err => console.log("Error fetching products:\n", err));
    
      },[])
      

    return  ( 
        <div >
            <h1>Hello</h1>
            <div>
                <NewRentersForm />
                {rentersProducts.map(product => {
                    return (
                        <>
                    <RentersDisplay key={products.id}  product={product}/>
                    </>
                    )
                })}
            </div>
        </div>
    //  ) : (
    //      <div>You have no items to Rent</div>
     )
}
 
export default Account;