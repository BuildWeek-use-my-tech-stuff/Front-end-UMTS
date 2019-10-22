import React,{useContext} from 'react'
import { TechContext, MyRentalsContext } from '../contexts/MyRentalsContext';
import RentersDisplay from './RentersDisplay'


const RentersList = () => {
    const {items}=useContext(MyRentalsContext)

    return items.length? ( 
        <div >
            <ul >
                {items.map(item => {
                    return (
                    <RentersDisplay item={item} key={item.id} />
                    )
                })}
            </ul>
        </div>
     ) : (
         <div>You have no items to Rent</div>
     )
}
 
export default RentersList;