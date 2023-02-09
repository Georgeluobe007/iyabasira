import React, { Component } from 'react'
import {ProductConsumer} from "./ContextApi"
import '../ComponentCSS/Carts.css'
import CartLines from "./CartLines"
import CartImages from './CartImages'
import CartTotals from './CartTotals'
export default class Cart extends Component {
  render() {
    return (
     <ProductConsumer>
      {value => {
  const {carts} = value;
    if(carts.length > 0){
    return(
      <div>
        <CartLines/>
        <CartImages value={value}/>
        <CartTotals value={value}/>
      </div>
    )
    }else{
     return(
      <div className='cart-empty-statement'>
        <h1 className='statement'>Your cart is Currently empty</h1>
      </div>
     )
    }
      }}
     </ProductConsumer>
    )
  }
}
