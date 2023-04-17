import React from 'react'
import {AiFillDelete} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

const CArt = () => {

  const{cartItems,subTotal,shipping,tax,total}=useSelector(state=>state.cart)
  const dispatch=useDispatch();

  
  const increament=(id)=>{
    dispatch({
      type:"addToCart",
      payload:{id},
    })
    dispatch({type:"calculateprice"})
  }
  
  const decreament=(id)=>{
    dispatch({
      type:"decreament",
      payload:id,
    })

    dispatch({type:"calculateprice"})
  }
  
  const deletehandler=(id)=>{
    dispatch({
      type:"deletefromcart",
      payload:id,
    })
    dispatch({type:"calculateprice"})
  }
  return (
    <div className='cart'>
        <main>
           {
              cartItems.length > 0 ? (
                cartItems.map((i)=>(
                  <CartItem
                    imgSrc={i.imgSrc}
                    name={i.name}
                    price={i.price}
                    qty={i.quantity}
                    id={i.id}
                    key={i.id}
                    increament={increament}
                    decreament={decreament}
                    deletehandler={deletehandler}
                  />
                ))
              ):(
                <h1>No Items Yet</h1>
              )
           }
        </main>
        <aside> 
                <h2>Subtotal :${subTotal}</h2>
                <h2>Shipping :${shipping}</h2>
                <h2>Tax :${tax}</h2>
                <h2>Total :${total}</h2>
            </aside>
    </div>
  )
}
const CartItem=({imgSrc,name,price,qty,decreament,increament,deletehandler,id})=>(
   <div className='cartItem'>
        <img src={imgSrc} alt={name}/>
        <article>
            <h3>{name}</h3>
            <p>${price}</p> 
        </article>
        <div>
            <button onClick={()=>decreament(id)}>-</button>
            <p>{qty}</p>
            <button onClick={()=>increament(id)}>+</button>
        </div>

        <AiFillDelete  onClick={()=>deletehandler(id)}/>
   </div>
)
export default CArt