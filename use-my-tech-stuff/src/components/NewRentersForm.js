import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { MyRentalsContext } from '../contexts/MyRentalsContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import Product from './Product';
const NewRentersForm = ({ isEditing, setIsEditing, product, name, price, editId }, props) => {
    const { rentersProducts, products, setMyRentals, setProducts, isEdit, } = useContext(MyRentalsContext)
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
                description: 'those'
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
                //  .put(`/${2}/user_items`,newItem)
                .then(res => {
                    console.log(`hey I'm editing over here`)
                    setMyRentals(res.data)
                    setNewItem({
                        item_name: '',
                        price: '',
                        description: ''
                    })
                    setIsEditing(false)
                })
        } else {
            axiosWithAuth()
                .post('/items', newItem)
                // .post(`users/${1}/user-items`,newItem)
                .then(res => {
                    console.log("Products successfully fetched!\n", res.data);
                    setProducts(res.data);
                })
                .catch(err => console.log("Error fetching products:\n", err));
            setNewItem({
                item_name: '',
                price: '',
                description: ''
            })
        }

    };
    const handleChange = e => {
        setNewItem({
            ...newItem,
            [e.target.name]: e.target.value
        })
    }

    const handleFile = e => {
        console.log(e.target.file)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                name='item_name'
                placeholder='title'
                onChange={handleChange}
                value={newItem.item_name}
            />
            <input
                type='number'
                name="price"
                placeholder='price'
                onChange={handleChange}
                value={newItem.price}
            />
            <input
                type='text'
                name="description"
                placeholder='description'
                onChange={handleChange}
                value={newItem.description}
            />
            {/* <input
         type="file"
         name="file"
         onChange={handleFile}
        //  id="fileToUpload"
         />
          <input type="submit" value="Upload Image" name="submit"></input> */}
            <button type='submit'>{isEditing ? 'Submit Edit' : 'Add Item'}</button>
            <button onClink={() => setIsEditing(false)}>Cancel</button>
        </form>
    );
}
export default NewRentersForm;