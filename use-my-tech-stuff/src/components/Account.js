// import React, { useState, useEffect, useContext } from 'react'
// import axiosWithAuth from '../utils/axiosWithAuth'
// import { MyRentalsContext } from '../contexts/MyRentalsContext'
// import RentersDisplay from '../components/RentersDisplay'
// import RentersForm from './RentersForm'
// import NewRentersForm from './NewRentersForm'
// import axios from 'axios'


// const Account = () => {
//     const {products, myRentals}=useContext(MyRentalsContext)


//     // const [rentersProducts,setRentersProducts]=useState([])

//     const [isEditing, setIsEditing]=useState(false)

//     const[editProduct, setEditProduct]=useState()
      
//     const editMe =(product) => {
       
//     }
    
//     return myRentals.length? ( 

//     const { products } = useContext(MyRentalsContext)
//     const [rentersProducts, setRentersProducts] = useState([])

//     // useEffect(() => {
//     //     axios
//     //     .get(`http://localhost:5000/api/movies/`)
//     //     .then(res => {
//     //       console.log("Products successfully fetched!\n", res.data);
//     //       setRentersProducts(res.data);
//     //     })
//     //     .catch(err => console.log("Error fetching products:\n", err));

//     //   },[])

//     // useEffect(() => {
//     //     setRentersProducts();
//     // }, [products])

//     useEffect(() => {
//         axiosWithAuth()
//             .get(`items/`)
//             .then(res => {
//                 console.log("Products successfully fetched!\n", res.data);
//                 setRentersProducts(res.data);
//             })
//             .catch(err => console.log("Error fetching products:\n", err));

//     }, [])


//     return (

//         <div >
//             <h1>Your Rentals</h1>
//             <div>
//             <div className="accountContainer">
//                 {myRentals.map(product => {
//                     return (
//                         <>
//                     <NewRentersForm isEditing={isEditing} setIsEditing={setIsEditing} price={product.price} name={product.item_name} editId={product.id} />
//                     <RentersDisplay key={product.id}  product={product}  setIsEditing={setIsEditing} isEditing={isEditing} />
//                     <button onClick={editMe(product)}>test</button>
//                     </>
                      

//                     )
//                 })}
//              </div>   
//             </div>
            
//         </div>

//     // ):(
//     //     <>
//     //     <h1>No items for rent</h1>
//     //     <NewRentersForm />
//     //     </>
       
//     )
// }


// export default Account;

import React, { useState, useEffect, useContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import { MyRentalsContext } from '../contexts/MyRentalsContext'
import RentersDisplay from '../components/RentersDisplay'
import RentersForm from './RentersForm'
import NewRentersForm from './NewRentersForm'
import axios from 'axios'
const Account = () => {
    const { products, myRentals } = useContext(MyRentalsContext)
    // const [rentersProducts,setRentersProducts]=useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editProduct, setEditProduct] = useState({});

    // const editMe =(product) => {

    // }


    return myRentals.length ? (
        <div >
            <h1>Your Rentals</h1>
            {<NewRentersForm
                product={editProduct}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                price={editProduct.price}
                name={editProduct.item_name}
                editId={editProduct.id}
            />}
            <div className="accountContainer">
                {myRentals.map(product => {
                    return (
                        <>
                            {/*<NewRentersForm

                                isEditing={isEditing}
                                setIsEditing={setIsEditing}
                                price={product.price}
                                name={product.item_name}
                                editId={product.id}
                            />*/}
                            <RentersDisplay
                                setEditProduct={setEditProduct}
                                key={product.id}
                                product={product}
                                setIsEditing={setIsEditing}
                                isEditing={isEditing} />
                            
                        </>
                    )
                })}
                {/* </div> */}
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