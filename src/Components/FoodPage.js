import React, { Component } from 'react'
import ProductPage from './ProductPage'
import {ProductConsumer} from "./ContextApi"
import '../ComponentCSS/NavBar.css'
export default class FoodPage extends Component {

  render() {
    return (
     <div className='data-fetch'>
    <ProductConsumer>
      {(value) => {
    return value.product.map(products => {
      return <ProductPage key={products.id} products={products}/>
    })
      }}
    </ProductConsumer>
     </div>
    )
    
  }
  
}
