import React, { useContext, useEffect, useState } from 'react'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import NewRentersForm from './NewRentersForm';
import Toggle from 'react-toggle'





const RentersDisplay = ({ setEditProduct, product, match, setMyRentals, products, setProduct, setIsEditing, isEditing }, props) => {

    const { removeItem, } = useContext(MyRentalsContext)

    const [toggle, setToggle] = useState(true)



    const [newProduct, setNewProduct] = ('')


    const deleteItems = (id) => {
        axiosWithAuth()
            .delete(`/items/${id}`)
            // .delete(`/users/user-items/${id}`)
            .then(res => {
                console.log(res)
                setMyRentals(res.data)
            })
            .catch(err => console.log(err))

            
    }

   


    return (

<>
            <div>
                <div className="item-container">
                    <div className="item-list">
                        <h1>{product.item_name}</h1>
                        <img src={product.photo} alt="tech-gear" className="imgStyle" />
                        <h3>{product.price}</h3>
                        <h3>{product.description}</h3>
                        <label >
                        Availability
                            <Toggle defaultChecked={toggle}
                            className="toggleStyle"
                            />
                        </label>

                        <button className="rentalEditButton" onClick={() => deleteItems(product.id)}>Delete</button>
                        <button className="rentalEditButton"onClick={() => {
                            setIsEditing(true);
                            setEditProduct(product);
                        }}>Edit</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RentersDisplay;