'use client';
import React from 'react'
import './product.css'
import { useDispatch , useSelector} from 'react-redux';
import { addtoCart } from '../redux/slices/cartSlice';

function Product(item) {
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state.cart);
    const {product}=item
    const handleAdd=()=>{
        console.log('add to cart',product);
        dispatch(addtoCart(product));

    }
  return (
    <div className='product'>
        <img className='proimg' src={Array.isArray(product?.images) && product.images.length > 0 ? product.images[0] : ''} alt={`img of ${product?.title || 'product'}`} />
        <h2>{product?.title}</h2>
        <p>{product?.description}</p>
        <div className='pricebtn'>
          <h3>$ {product?.price}</h3>
          <h2 onClick={handleAdd} className='addbtn'>Add to Cart</h2>
        </div>
    </div>
  )
}

export default Product