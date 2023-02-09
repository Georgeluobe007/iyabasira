import React from 'react'
import "../ComponentCSS/Carts.css"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
export default function CartItem({items,value}) {
  const {picture,price,total,count,id} = items;
  const {decreament,increament,removeItem} = value;
  return (
   <div className='cart-line1'> 
 <div className='cart-image-div'>
    <img src={picture} className="cart-item-pics"/>
  </div>
  <div className='cart-price'>
    <h3 className='btn-price'>{price}</h3>
  </div>
  <div className='quantity'>
   <button onClick={() => decreament(id)} className='btn-negative'>-</button> 
   <button>{count}</button>
   <button onClick={() => increament(id)} className='btn-positive'>+</button> 
  </div>
  <div className='delete-btn'>
   < RemoveShoppingCartIcon onClick={() => removeItem(id)} style={{width:"3rem",height:"3rem",color:"yellow"}}/>
  </div>
  <div>
    <h3>{total}</h3>
  </div>
    </div>
  )
}
