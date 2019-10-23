import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth';


const NewRentersForm = () => {

    const {removeItem,rentersProducts, setRentersProducts} = useContext(MyRentalsContext)

      const[newItem,setNewItem] =useState({
		price: '',
        item_name: '',
        description: '',
	})

 const handleSubmit =e => {
     e.preventDefault();

        axiosWithAuth()
        .post('/items',newItem)
        .then(res => {
        console.log("Products successfully fetched!\n", res.data);
        setRentersProducts(res.data);
        })
        .catch(err => console.log("Error fetching products:\n", err));


 }


            
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