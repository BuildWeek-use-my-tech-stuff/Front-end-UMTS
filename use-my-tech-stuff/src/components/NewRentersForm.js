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
        <input className='renterItemName'
        type='text'
        name='item_name'
        placeholder='Name of your item'
        onChange={handleChange}
        value={newItem.item_name}
        />
        <input 
        type='number' className='renterItemPrice'
        name="price"
        placeholder='Price of your item'
        onChange={handleChange}
        value={newItem.price}
        />
        <input 
        type='text' className='renterItemDescription'
        name="description"
        placeholder='Describe your item'
        onChange={handleChange}
        value={newItem.description}
        />
       
        <button type='submit' className="rentalSubButton">Add Item</button>
    </form>
     );
}
 
export default NewRentersForm;