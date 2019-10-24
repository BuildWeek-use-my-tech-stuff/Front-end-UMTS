import React,{useState, useEffect, useContext} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import {MyRentalsContext} from '../contexts/MyRentalsContext'
import RentersDisplay from '../components/RentersDisplay'
import RentersForm from './RentersForm'
import NewRentersForm from './NewRentersForm'
import axios from 'axios'


const Account = () => {
    const {products, myRentals}=useContext(MyRentalsContext)
    // console.log('state of products', products)


    const [rentersProducts,setRentersProducts]=useState([])

    // const [editingFriend, setEditingFriend]=useState()

    const [isEditing, setIsEditing]=useState(false)
      
    // useEffect(() => {
    //     axiosWithAuth()
    //     .get(`items/`)
    //     .then(res => {
    //       console.log("Products successfully fetched!\n", res.data);
    //       setRentersProducts(res.data);
    //     })
    //     .catch(err => console.log("Error fetching products:\n", err));
    
    //   },[])


    //   const editFriend = newItem => {
    //       setEditingFriend(newItem)
    //   }

    return myRentals.length? ( 
        <div >
            <h1>Hello</h1>
            <div>
                {myRentals.map(product => {
                    return (
                        <>
                     <NewRentersForm isEditing={isEditing} setIsEditing={setIsEditing} price={product.price} name={product.item_name} editId={product.id} />
                    <RentersDisplay key={product.id}  product={product}  setIsEditing={setIsEditing} isEditing={isEditing} />
                    </>
                    )
                })}
            </div>
        </div>
    ):(
        <h1>No items for rent</h1>
       
    )
}
 
export default Account;