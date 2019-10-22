import React,{useContext} from 'react'
import { TechContext, MyRentalsContext } from '../contexts/MyRentalsContext';



const RentersDisplay = ({item,editing}) => {

    const {removeTech, editTech} = useContext(MyRentalsContext)

    return (  
        <li className="item-list">
            <div className="title">{item.title}</div>
            <div className="price">{item.price}</div>
            <button onClick={()=> removeTech(item.id)}>remove</button>
            <button onClick={()=>editTech(item)}>Edit</button>
        </li>
    )
}
 
export default RentersDisplay;