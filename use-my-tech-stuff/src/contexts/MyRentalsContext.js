import React,{createContext, useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

export const MyRentalsContext = createContext();

const TechContextProvider = (props) => {
  const [items, setItems] = useState('');

  const [editing, setEditing] = useState(false)


 
        // axiosWithAuth()
        //     .get('/id/user-items',items)
        //     .then(res =>{
        //       console.log(res)
        //       setItems(res.data)
        //     } )
            
        //     .catch(err => console.log(err.response))
   




  // const addTech = (title, price) => {
  //   setItems([...items, {title: title, price: price, id: Math.random()*100000}]);
  // };


  // const removeTech = (id) => {
  //   setItems(items.filter(tech => tech.id !== id));
  // }


  // const editTech =(id, updatedTech) => {
  //   setEditing(true)
  //   setItems(items.map(tech=> tech.id === id ?  updatedTech : tech ))
  // }

  // const editTech = (item) => {
  //   setEditing(true)
  // }


  return (
    <MyRentalsContext.Provider value={{ }}>
      {props.children}
    </MyRentalsContext.Provider>
  );
}
 
export default TechContextProvider;
