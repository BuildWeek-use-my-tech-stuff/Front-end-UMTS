import React,{useState, useEffect, useContext} from 'react';
import {  MyRentalsContext } from '../contexts/MyRentalsContext';


const RentersEditForm = () => {
    const {setItems, addTech,editTech, items, setEditing} =useContext(MyRentalsContext)

    const [title, setTitle]=useState('')
    const [price, setPrice]=useState('')
    console.log(items)

    const [editItems, setEditItems] = useState(items)


    const handleSubmit = e => {
        e.preventDefault();
        addTech(title, price);
        setEditing(false)
        
        setTitle('')
        setPrice('')
    }



    return ( 
        <form  onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Edit-title'
        onChange={(e)=> setTitle(e.target.value) }
        value={title}
        required
        />
        <input 
        type='number'
        placeholder='Edit-price'
        onChange={(e)=> setPrice(e.target.value) }
        value={price}
        required
        />
        <button type='submit'>Edit Item</button>
    </form>

     );
}
 
export default RentersEditForm;