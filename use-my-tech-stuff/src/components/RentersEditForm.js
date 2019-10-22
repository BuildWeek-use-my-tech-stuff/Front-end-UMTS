import React,{useState, useEffect, useContext} from 'react';
import {  MyRentalsContext } from '../contexts/MyRentalsContext';


const RentersEditForm = () => {
    const {setItems, addTech, items, setEditing} =useContext(MyRentalsContext)

    const [title, setTitle]=useState('')
    const [price, setPrice]=useState('')
    console.log(items)

    const [user,setUser] =useState([
        {price: '', title: '', id: ''}
    ])

    const [editItems, setEditItems] = useState(items)


    const updateUser =(id, updatedUser) => {
        // setEditing(false)
        setUser(items.map(user=> user.id === id ?  updatedUser : user ))
      }


      const handleInputChange = event => {
        const {name, value} = event.target
        setUser({...user, [name]:value})
    }


    const handleSubmit = e => {
        e.preventDefault();
        // addTech(title, price);
        updateUser(user.id, user)
        // setEditing(false)

        setUser('')
    }



    return ( 
    <div>
        <form  onSubmit={handleSubmit}>
        <input 
        type='text'
        placeholder='Edit-title'
        onChange={e=> setTitle(e.target.value) }
        value={user.title}
        />
        <input 
        type='number'
        placeholder='Edit-price'
        onChange={handleInputChange  }
        value={user.price}
        />
        <button type='submit'>Edit Item</button>
    </form>
       
       <h1>Hekkil{user.name}</h1>
        </div>

     );
}
 
export default RentersEditForm;