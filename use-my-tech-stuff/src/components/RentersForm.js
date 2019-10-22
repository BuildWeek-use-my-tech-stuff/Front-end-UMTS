import React,{useState, useContext} from 'react';
import { TechContext, MyRentalsContext } from '../contexts/MyRentalsContext';
import RentersEditForm from './RentersEditForm';


const RentersForm = () => {
 const {setItems, addTech, items,editing} =useContext(MyRentalsContext)

 const [title, setTitle]=useState('')
 const [price, setPrice]=useState('')

 console.log(items)

const handleTitleChange = e => {
    setTitle(e.target.value)

}
const handlePriceChange = e => {
    setPrice(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();
    addTech(title, price);
    setTitle('')
    setPrice('')
}



    return !editing ? ( 
        <form  onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='title'
            onChange={e=> setTitle(e.target.value)}
            value={title}
            required
            />
            <input 
            type='number'
            placeholder='price'
            onChange={handlePriceChange }
            value={price}
            required
            />
            <button type='submit'>Add Item</button>
        </form>

    ):(
        <>
          {items.map(item => {
                    return (
                        <>
                    <RentersEditForm item={item} key={item.id} />
                    </>
                    )
                })}
        
        </>
     );
}
 
export default RentersForm;

