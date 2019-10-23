import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth';


const NewRentersForm = () => {

    const {rentersProducts,products, setProducts} = useContext(MyRentalsContext)

    const [updateProducts, setUpdateProducts] =useState('')

      const[newItem,setNewItem] =useState({
		price: '',
        item_name: '',
        description: '',
        // id:Math.random()*100000,
    })
    

 const handleSubmit =e => {
     e.preventDefault();

        axiosWithAuth()
        .post('/items',newItem)
        .then(res => {
        console.log("Products successfully fetched!\n", res.data);
        setProducts(res.data);
        })
        .catch(err => console.log("Error fetching products:\n", err));
 
    // axiosWithAuth()
    //     .put(`/items/${id}`)
    //     .then(res => {
    //         console.log("Edit", res)
    //         updateProducts(rentersProducts.map(newEdit => res.data.id === newEdit.id ? res.data : newEdit))
    //         // setEditing(false)
    //       })
    //       .catch(err => console.log(err.response))
      };

            
    const handleChange = e => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
	}
	


    return ( 
        <form onSubmit={handleSubmit}>
        <input 
        type='text'
        name='item_name'
        placeholder='title'
        onChange={handleChange}
        value={newItem.item_name}
        />
        <input 
        type='number'
        name="price"
        placeholder='price'
        onChange={handleChange}
        value={newItem.price}
        />
        <input 
        type='text'
        name="description"
        placeholder='title'
        onChange={handleChange}
        value={newItem.description}
        />
       
        <button type='submit'>Add Item</button>
    </form>
     );
}
 
export default NewRentersForm;