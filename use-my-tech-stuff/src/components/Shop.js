import React,{useState,useEffect} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const Shop = ({match}) => {
    const [item, setItem]=useState({
        price: '',
        item_name: '',
        description: '',
    })


    useEffect(() => {
       
      axiosWithAuth().get(`/items/${match.params.id}`)
        .then( res =>{
           setItem(res.data)
        console.log(res.data)
        })
        .catch( err => console.log(err));
    }, [match.params.id])
  


  // const removeTech = (id) => {
  //   setItems(items.filter(tech => tech.id !== id));
  // }


    return ( 
        <div>
           <p>${item.price}</p>
           <p>{item.item_name}</p>
           <p>{item.description}</p>
            <button>Delete</button>
        </div>
     );
}
 
export default Shop;