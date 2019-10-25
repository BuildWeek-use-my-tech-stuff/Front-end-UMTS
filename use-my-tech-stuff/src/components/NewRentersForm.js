import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import Product from './Product';
import Toggle from 'react-toggle'

const NewRentersForm = ({ isEditing, setIsEditing, product, name, price, description, photo, editId }, props) => {
    const { setMyRentals, setProducts, } = useContext(MyRentalsContext)
    const [newItem, setNewItem] = useState(
        isEditing
            ? product
            : {
                price: '',
                item_name: '',
                description: '',
                photo: '',
                available: true,
                user_id: '',
            });


    useEffect(() => {
        if (isEditing) {
            setNewItem({
                item_name: name,
                price: price,
                description: description,
                photo: photo

            })
        } else {
            setNewItem({ price: '', item_name: '', description: '' })
        }
    }, [isEditing])


    const handleSubmit = e => {
        e.preventDefault();
        if (isEditing) {
            axiosWithAuth()
                .put(`/items/${editId}`, newItem)
                .then(res => {
                    console.log(`hey I'm editing over here`)
                    setMyRentals(res.data)
                    setProducts(res.data)
                    setNewItem({
                        item_name: '',
                        price: '',
                        description: '',
                        photo: ''
                    })
                    setIsEditing(false)
                })
        } else {
            axiosWithAuth()
                .post('/items', newItem)
                .then(res => {
                    console.log("Products successfully fetched!\n", res.data);
                    setMyRentals(res.data);
                    setProducts(res.data)
                })
                .catch(err => console.log("Error fetching products:\n", err));
            setNewItem({
                item_name: '',
                price: '',
                description: '',
                photo: '',
            })
        }
    };

    const handleChange = e => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input className="renterItemName"
                type='text'
                name='item_name'
                placeholder='title'
                onChange={handleChange}
                value={newItem.item_name}
            />
            <input className="renterItemPrice"
                type='number'
                name="price"
                placeholder='price'
                onChange={handleChange}
                value={newItem.price}
            />
            <input className="renterItemDescription"
                type='text'
                name="description"
                placeholder='description'
                onChange={handleChange}
                value={newItem.description}
            />
            <input className="imgFormStyle"
                type="text"
                placeholder='Upload Image URL'
                name="photo"
                onChange={handleChange}
                value={newItem.photo}
            />



            <button type='submit' className="formButtonAdd">{isEditing ? 'Submit Edit' : 'Add Item'}</button>
            <button className="formButton"onClick={() => setIsEditing(false)}>Cancel</button>


        </form>
    );
}
export default NewRentersForm;