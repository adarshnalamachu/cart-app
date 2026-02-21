import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './home.css'
import axios from 'axios'
import Product from './product'

function Home() {
    const [products,setProducts]=useState([])
    const [count,setCount]=useState(10)
    const [minPrice,setMinPrice]=useState('')
    const [maxPrice,setMaxPrice]=useState('')
    const fetchData= async( params ={})=>{
        try{
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            const res= await axios.get(`${backendUrl}/api/products/?format=json`, {params})
            console.log(res,'adarsh')
            setProducts(res?.data || [])

        }catch(err){
            console.log(err)
            setProducts([])
        }
    }
    useEffect(()=>{
    fetchData()
    },[])
    const applyFilter = () => {
        const params = {}
        if (minPrice !== '') params.min_price = minPrice
        if (maxPrice !== '') params.max_price = maxPrice
        fetchData(params)
    }

  return (
    <div>
    <Navbar options={[{name:'Cart',link:'/cart'},{name:'Wishlist',link:'/'}]}/>
    <div className='filter-bar'>
          <input placeholder='Min price' value={minPrice} onChange={e=>setMinPrice(e.target.value)} />
          <input placeholder='Max price' value={maxPrice} onChange={e=>setMaxPrice(e.target.value)} />
          <button onClick={applyFilter}>Filter</button>
          <button onClick={()=>{ setMinPrice(''); setMaxPrice(''); fetchData() }}>Clear</button>
        </div>
    <div className='products'>
        {products.map((item)=>(
            <Product product={item} />
        ))}
    </div>
    </div>
  )
}

export default Home
