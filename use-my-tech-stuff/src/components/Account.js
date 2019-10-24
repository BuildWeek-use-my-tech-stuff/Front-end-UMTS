import React, { useState, useEffect, useContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { MyRentalsContext } from '../contexts/MyRentalsContext'
import RentersDisplay from '../components/RentersDisplay'
import RentersForm from './RentersForm'
import NewRentersForm from './NewRentersForm'
import axios from 'axios'


const Account = () => {
    const {products, myRentals}=useContext(MyRentalsContext)

    // const [rentersProducts,setRentersProducts]=useState([])

    const [isEditing, setIsEditing]=useState(false)

    const[editProduct, setEditProduct]=useState()
      
    // const editMe =(product) => {
       
    // }
 
   

    return myRentals.length ?(
        <div >
            <h1>Your Rentals</h1>
            <div>
                {myRentals.map(product => {
                    return (
                        <>
                    <NewRentersForm isEditing={isEditing} setIsEditing={setIsEditing} price={product.price} name={product.item_name} editId={product.id} />
                    <RentersDisplay key={product.id}  product={product}  setIsEditing={setIsEditing} isEditing={isEditing} />
                    <button>test</button>
                    </>
                    )
                })}
            </div>
            
        </div>
    ):(
        <>
        <h1>No items for rent</h1>
        <NewRentersForm />
        </>
       
    )
}



 
export default Account;