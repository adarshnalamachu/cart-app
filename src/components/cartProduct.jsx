import React from 'react'
import './cartProduct.css'
import './product.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, incrementQuantity, removefromCart } from '../redux/slices/cartSlice';

function CartProduct({cartitem}) {
    const dispatch=useDispatch()
    console.log(cartitem,'item in cart product');
    const handleInc=()=>{
        console.log('remove item from cart',cartitem);
        dispatch(incrementQuantity(cartitem))
    }
    const handleDec=()=>{
        console.log('decrement item from cart',cartitem);
        dispatch(decrementQuantity(cartitem))
    }
    const handleRemove= ()=>{
        console.log('remove item from cart',cartitem);
        dispatch(removefromCart(cartitem))
    }
  return (
    <div>
        <h2>{cartitem?.title}</h2>
        <img className='proimg' src={Array.isArray(cartitem?.images) && cartitem.images.length > 0 ? cartitem.images[0] : ''} alt={`img of ${cartitem?.title || 'product'}`} />
        <p>{cartitem?.description}</p>
        <div className='pricerow'>
            <div className='quantity'>
                <button onClick={handleDec} className='but'>-</button>
                <h2>{cartitem?.quantity}</h2>
                <button onClick={handleInc} className='but'>+</button>
            </div>
            <h2>${cartitem?.price}</h2>  
            <button onClick={handleRemove} className='rembut'>Remove</button>
        </div>
        </div>
  )
}
export default CartProduct