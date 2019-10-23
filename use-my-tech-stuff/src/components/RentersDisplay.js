import React,{useContext, useEffect,} from 'react'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'



const RentersDisplay = ({product, match,setRentersProducts, products,setProduct, isEditing, setIsEditing}) => {

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

        
    

    return (  
        <li className="item-list">

            <div className="title">{product.item_name}</div>
            <h1>{product.price}</h1>
            <h1>{product.description}</h1>
            <button onClick={()=> deleteItems(product.id)}>Delete</button>
            <button>Edit</button>
        </li>
    )
}
 
export default RentersDisplay;