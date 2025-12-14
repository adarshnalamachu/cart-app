import React from 'react'
import Navbar from './Navbar'
import './cart.css'
import { useSelector ,useDispatch} from "react-redux";
import CartProduct from './cartProduct';


function Cart() {
  const cartItems= useSelector((state)=>state.cart);
  console.log(cartItems,'cart items');
  return (
    <div>
        <Navbar options={[{name:'Home',link:'/'},{name:'Wishlist',link:'/'}]}/>
        <div className='cart'> 
        <div className='items'>
          {cartItems?.map((item)=>(
            <CartProduct cartitem={item}></CartProduct>
          ))}
        </div>
        <div className='bill'>
        </div>
        </div>
        
    </div>
  )
}

export default Cart