import React,{useState, useEffect, useContext} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {MyRentalsContext} from '../contexts/MyRentalsContext'
import RentersDisplay from '../components/RentersDisplay'
import RentersForm from './RentersForm'
import NewRentersForm from './NewRentersForm'
import axios from 'axios'


const Account = () => {
    const {products, myRentals}=useContext(MyRentalsContext)
    console.log('state of products', products)


    const [rentersProducts,setRentersProducts]=useState([])


      
    // useEffect(() => {
    //     axiosWithAuth()
    //     .get(`items/`)
    //     .then(res => {
    //       console.log("Products successfully fetched!\n", res.data);
    //       setRentersProducts(res.data);
    //     })
    //     .catch(err => console.log("Error fetching products:\n", err));
    
    //   },[])
      

    return  ( 
        <div >
            <h1>Hello</h1>
            <div>
                <NewRentersForm />
                {myRentals.map(product => {
                    return (
                        <>
                    <RentersDisplay key={product.id}  product={product}/>
                    </>
                    )
                })}
            </div>
        </div>
    //  ) : (
    //       <div>You have no items to Rent</div>
     )
}
 
export default Account;