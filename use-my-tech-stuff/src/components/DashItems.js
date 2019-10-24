import React,{useState, useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import { Link } from 'react-router-dom';
import Shop from './Shop'


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
                <h1 key={item.id}>
                <Link to={`/shop/${item.id}`}>{item.item_name}</Link>
                </h1>
                <img src={item.photo} alt="tech-gear" />
                <p>{item.description}</p>
                <p>${item.price}</p>
                </>
            ))}
        </div>
     );
}
 
export default DashItems;



