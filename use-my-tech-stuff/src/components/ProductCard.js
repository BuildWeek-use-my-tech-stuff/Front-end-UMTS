import React,{useState, useEffect} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import Header from './Header';
import Footer from './Footer';

const ProductCard = ({match}) => {

    const [item, setItem]= useState ({
        price: '',
        item_name: '',
        description: '',
    })

    useEffect(() => {

        axiosWithAuth().get(`/items/${match.params.id}`)
        .then( res => {
            setItem(res.data)
            console.log(res.data)
        })
        .catch( err=> console.log(err));

    }, [match.params.id])

    return (
    <div className='productContainer'>
        <Header />

        <div className='productCard'>
            <h1>{item.item_name}</h1>
            <img src=''></img>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>Delete</button>
        </div>
        
        <Footer />
    </div>
    )
}

export default ProductCard