import React,{useState, useEffect, useContext} from 'react';
import {  MyRentalsContext } from '../contexts/MyRentalsContext';


const RentersEditForm = (props) => {
    const {setItems, addTech, items, setEditing, editTech} =useContext(MyRentalsContext)

    // const [title, setTitle]=useState('')
    // const [price, setPrice]=useState('')
    // console.log(props.item.price)

    const [user,setUser] =useState(props.item)

    // const [editItems, setEditItems] = useState(items)

  

    // console.log(users.title)

    const updateUser =(id, updatedUser) => {
        setEditing(false)
        setUser(props.item.map(user=> user.id === id ?  updatedUser : user ))
      }


      const handleInputChange = e=> {
        // const {name, value} = e.target

        setUser({...user, [e.target.name]:e.target.value})
    }


    const handleSubmit = e => {
        e.preventDefault();
        // addTech(user.title, user.price); 
        // editTech(items.id, items)
        updateUser(user.id, user)
        setEditing(false)

        setUser('')
    }



    return ( 
        <form  onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Edit-title'
        onChange={handleInputChange}
        value={user.title}
        />
        <input 
        type='number'
        placeholder='Edit-price'
        onChange={handleInputChange }
        value={user.price}
        />
        <button type='submit'>Edit Item</button>
    </form>

     );
}
 
export default RentersEditForm;