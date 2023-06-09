import React from 'react'
import { toast } from 'react-hot-toast'

import { useDispatch } from 'react-redux';
const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const HOme = () => {

    const productList=[
        {
            name:"MacBook Air ",
            price: 1200,
            imgSrc:img1,
            id:"qsc",
        },
        {
            name:"Black Shoes",
            price: 600,
            imgSrc:img2,
            id:"pcbS",
        },
    ]

    const dispatch=useDispatch()
const addtocardhandler=(options)=>{
    
    dispatch({type:"addToCart",payload:options })
    dispatch({type:"calculateprice"})
    toast.success("Added to Cart")
   


}
  return (
    <div className='home'>
        {
            productList.map((i)=>(
                <ProductCard 
                key={i.id}
                name={i.name}
                imgSrc={i.imgSrc}
                price={i.price}
                id={i.id}
                handler={addtocardhandler}
                />
            ))     
        }
    </div>
  )
}

const ProductCard=({name,id,price,handler,imgSrc})=>(
    <div className='productcard'>
        <img src={imgSrc} alt={name}/>
        <p>{name}</p>
        <h4>${price}</h4>
        <button onClick={()=> handler({name,price,id,quantity:1,imgSrc})} >Add to Cart</button>
    </div>
)


export default HOme