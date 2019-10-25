import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import { UserContext } from "../contexts/UserContext";
import Toggle from 'react-toggle'

const Shop = ({ match, product}) => {

   const [toggle, setToggle]= useState(true)

  const [item, setItem] = useState({
    price: '',
    item_name: '',
    description: '',
    photo: '',
  });

  // To be used for getting a user's items
  const { user } = useContext(UserContext);


  useEffect(() => {

    axiosWithAuth()
      .get(`/items/${match.params.id}`)
      .then(res => {
        setItem(res.data)
        console.log(res.data)
      })
      .catch(err => console.log(err));
  }, [match.params.id])




  return (
    <div className="soloProductCard">
      

      <p className="itemNameSolo">{item.item_name}</p>
      <p className="itemPriceSolo">${item.price}</p>
      <img src={item.photo} alt="tech-gear"  className="imgStyleSolo" />
      <p className="itemDescSolo">{item.description}</p>
      <label >
       Availablility
       <Toggle className="toggleStyle"/>

      <img src={item.photo} alt="tech-gear"  className="imgStyle" />
      <h1>{item.item_name}</h1>
      <p>${item.price}</p>
      <p>{item.description}</p>
      <label >
      Availability
       <Toggle defaultChecked={toggle}
       />

           
     </label>
    </div>
  );
}

export default Shop;