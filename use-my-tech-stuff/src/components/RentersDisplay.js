import React, { useContext, useEffect, useState } from 'react'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import NewRentersForm from './NewRentersForm';
import RentersEditForm from './RentersEditForm';




const RentersDisplay = ({ setEditProduct, product, match, setMyRentals, products, setProduct, setIsEditing, isEditing }, props) => {

    const { removeItem, } = useContext(MyRentalsContext)




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

            <div className="item-list">
                <h1>{product.item_name}</h1>
                <img src={product.photo} alt="" />
                <h3>{product.price}</h3>
                <h3>{product.description}</h3>

                <button onClick={() => deleteItems(product.id)}>Delete</button>
                <button onClick={() => {
                    setIsEditing(true);
                    setEditProduct(product);
                }}>Edit</button>
            </div>

        </>

    )
}

export default RentersDisplay;