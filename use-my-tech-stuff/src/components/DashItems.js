import React,{useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Shop from './Shop'
import keyboard from '../Images/keyboard.jpg'
import Toggle from 'react-toggle'

const DashItems = () => {

    const [items, setItems]=useState([])


    useEffect(() => {
       
      axiosWithAuth().get(`/items`)
        .then( res =>{
           setItems(res.data)
        console.log(res.data)
        })
        .catch( err => console.log(err));
    }, [])
  

    return ( 
        <div>
            {items.map(item=> (
                <>
                <h1>
                <Link to={`/shop/${item.id}`}>{item.item_name}</Link>
                </h1>
                
                <img src={item.photo} alt="tech-gear"  className="imgStyle" />
                <p>{item.description}</p>
                <p>${item.price}</p>
                <label >
                Availablility
            <Toggle />
            </label>
                </>
            ))}
        </div>
     );
}
 
export default DashItems;



