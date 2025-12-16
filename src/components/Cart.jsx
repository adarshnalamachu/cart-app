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
          {cartItems.length ? cartItems?.map((item)=>(
            <CartProduct cartitem={item}></CartProduct>
          )) : <h2>Your cart is empty</h2>}
        </div>
        <div className='bill'>
        </div>
        </div>
        
    </div>
  )
}

export default Cart