import React,{useContext, useEffect,} from 'react'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'



const RentersDisplay = ({product, match,setRentersProducts}) => {

    const {removeItem,} = useContext(MyRentalsContext)


    const [newProduct, setNewProduct]=('')

 
        const deleteItems = (id) => {
                axiosWithAuth()
                .delete(`/items/${id}`)
                 .then(res => {
                console.log(res)
                // setRentersProducts(res.data)
            })
                .catch(err => console.log(err))
        }


    

    return (  
    <div className="item-container"> 
        <li className="item-list">

            <div className="title">{product.item_name}</div>
            <h1>{product.price}</h1>
            <p className="productDescription">{product.description}</p>
            <button onClick={()=> deleteItems(product.id)} className="deleteProduct">Delete</button>
            {/* <div className="price">{item.price}</div>
            <button onClick={()=> removeTech(item.id)}>remove</button>
            <button onClick={()=>editTech(item)}>Edit</button> */}
        </li>
    </div>       
    )
}
 
export default RentersDisplay;