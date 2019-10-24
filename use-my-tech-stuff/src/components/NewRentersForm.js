import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import Product from './Product';


const NewRentersForm = ({isEditing,setIsEditing, name, price,editId},props) => {

    const {rentersProducts,products, setProducts,isEdit, } = useContext(MyRentalsContext)

    const[newItem,setNewItem] =useState({
        price: '',
        item_name: '',
        description: '',
    })



    useEffect(()=> {
        if(isEditing) {
            setNewItem({
                item_name: name,
                price: price,
                description: 'those'
            })
        }else{
            setNewItem( {price:'', item_name: '',description: ''})  
        }  
    },[isEditing])

       
     

 const handleSubmit =e => {
     e.preventDefault();
     if(isEditing){
         axiosWithAuth()
         .put(`/items/${editId}`,newItem)
         .then(res => {
             console.log(`hey I'm editing over here`)

             setNewItem({
                item_name: '',
                price: '',
                description: ''
            })
            setIsEditing(false)
         })
     }else{

        axiosWithAuth()
        .post('/items',newItem)
        .then(res => {
        console.log("Products successfully fetched!\n", res.data);
        setProducts(res.data);
        })
        .catch(err => console.log("Error fetching products:\n", err));

        setNewItem({
            item_name: '',
            price: '',
            description: ''
        })
    }
 
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
        <button type='submit'>{isEditing ? 'submit edit': 'Add Item'}</button>
        <button>Cancel</button>
    </form>
     );
}
 
export default NewRentersForm;