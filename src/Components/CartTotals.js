import React from 'react'
import '../ComponentCSS/Carts.css'
import {Link} from "react-router-dom"
function CartTotals({value}) {
    const {cartsubtotal,cartsubtax,carttotal,clearCart} = value;
  return (
    <div className='div-totals'>
        <div className='totals-work'>
            <Link to="/">
            <button className='clearCart-btn' onClick={() => clearCart()}>Clear Cart</button>
            </Link>
   
    <div className='sub-total'>
    <h3 className='font-style'>Sub Total:{cartsubtotal}</h3>
    <h3 className='font-style'>Tax:{cartsubtax}</h3>
    <h3 className='font-style'>Total:{carttotal}</h3>
    </div>
        </div>
    </div>
  )
}

export default CartTotals