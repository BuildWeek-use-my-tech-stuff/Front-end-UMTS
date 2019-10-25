import React, { useState, useEffect, useContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { MyRentalsContext } from '../contexts/MyRentalsContext'
import RentersDisplay from '../components/RentersDisplay'
import RentersForm from './RentersForm'
import NewRentersForm from './NewRentersForm'
import axios from 'axios'
const Account = () => {
    const { products, myRentals } = useContext(MyRentalsContext)
    const [isEditing, setIsEditing] = useState(false)
    const [editProduct, setEditProduct] = useState({});


    return myRentals.length ? (
        <div >
            <h1>Your Rentals</h1>
            <NewRentersForm
                product={editProduct}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                price={editProduct.price}
                name={editProduct.item_name}
                editId={editProduct.id}
                description={editProduct.description}
                photo={editProduct.photo}
            />
            <div className="accountContainer">
                {myRentals.map(product => {
                    return (
                        <>
                            <RentersDisplay
                                setEditProduct={setEditProduct}
                                key={product.id}
                                product={product}
                                setIsEditing={setIsEditing}
                                isEditing={isEditing} />
                        </>
                    )
                })}
            </div>

        </div>
    ) : (
            <>
                <h1>No items for rent</h1>
                <NewRentersForm />
            </>

        )
}

export default Account;