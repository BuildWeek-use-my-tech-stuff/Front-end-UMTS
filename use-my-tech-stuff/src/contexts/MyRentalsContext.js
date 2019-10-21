import React,{createContext, useState} from 'react'
import axios from 'axios'

export const MyRentalsContext = createContext();

const TechContextProvider = (props) => {
  const [items, setItems] = useState([
    {title: 'Some tech item',  price: '$30',  id:1},
    {title: 'More tech stuff', price: '$100', id:2},
    {title: 'More tech stuff', price: '$100', id:3},
    {title: 'More tech stuff', price: '$100', id:4},
  ]);

  const [editing, setEditing] = useState(false)


//     axios
//     .get(`url`)
//     .then(res => {
//         console.log(res.data)
//         setItems(res.data)
//     .catch(err => console.log('error from get',err.response))
// })



  const addTech = (title, price) => {
    setItems([...items, {title: title, price: price, id: Math.random()*100000}]);
  };


  const removeTech = (id) => {
    setItems(items.filter(tech => tech.id !== id));
  }


  const editTech =(id, updatedTech) => {
    setEditing(true)
    setItems(items.map(tech=> tech.id === id ?  updatedTech : tech ))
  }


  return (
    <MyRentalsContext.Provider value={{items, addTech, removeTech, editTech, setItems, editing, setEditing }}>
      {props.children}
    </MyRentalsContext.Provider>
  );
}
 
export default TechContextProvider;
