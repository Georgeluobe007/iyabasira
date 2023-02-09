import React from 'react'
import "../ComponentCSS/Carts.css"
export default function CartItem({items,value}) {
  const {picture,price,total,count,id} = items;
  const {decreament,increament,removeItem} = value;
  return (
   <div className='cart-line'> 
 <div className='cart-image-div'>
    <img src={picture} className="cart-item-pics"/>
  </div>
  <div className='cart-price'>
    <h3>{price}</h3>
  </div>
  <div className='quantity'>
   <button onClick={() => decreament(id)} className='btn-negative'>-</button> 
   <button>{count}</button>
   <button onClick={() => increament(id)} className='btn-positive'>+</button> 
  </div>
  <div className='delete-btn'>
    <img src='picture/delete.png' onClick={() => removeItem(id)} style={{width:"2rem",height:"2rem"}}/>
  </div>
  <div>
    <h3>{total}</h3>
  </div>
    </div>
  )
}
