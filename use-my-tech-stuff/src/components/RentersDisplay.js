import React,{useContext, useEffect,useState} from 'react'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import NewRentersForm from './NewRentersForm';




const RentersDisplay = ({product, match,setRentersProducts, products,setProduct, setIsEditing, isEditing},props) => {

    const {removeItem,} = useContext(MyRentalsContext)




    const [newProduct, setNewProduct]=('')

 
        const deleteItems = (id) => {
                axiosWithAuth()
                .delete(`/items/${id}`)
                 .then(res => {
                console.log(res)
                setProduct(res.data)
            })
                .catch(err => console.log(err))
        }

       
  

    return  ! isEditing ?  ( 
        <>
        <li className="item-list">
            <h1>{product.item_name}</h1>
            <h3>{product.price}</h3>
            <h3>{product.description}</h3>
            <button onClick={()=> deleteItems(product.id)}>Delete</button>
            <button onClick={()=> setIsEditing(true)}>Edit</button>
        </li>
        </>
    ):(
        <>
        <h1>now Editing</h1>
        </>
    )
}
 
export default RentersDisplay;