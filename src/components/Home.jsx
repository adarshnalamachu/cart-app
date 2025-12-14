import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './home.css'
import axios from 'axios'
import Product from './product'

function Home() {
    const [products,setProducts]=useState([])
    const [count,setCount]=useState(10)
    useEffect(()=>{
        const fetchData= async()=>{
        try{
            const res= await axios.get('https://dummyjson.com/products')
            setProducts(res?.data?.products)

        }catch(err){
            console.log(err)
            setProducts(null)
        } }
    fetchData()
    },[])
  return (
    <div>
    <Navbar options={[{name:'Cart',link:'/cart'},{name:'Wishlist',link:'/'}]}/>
    <div className='products'>
        {products.map((item)=>(
            <Product product={item} />
        ))}
    </div>
    </div>
  )
}

export default Home