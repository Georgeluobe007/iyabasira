import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ProductConsumer} from './ContextApi'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default class ProductPage extends Component {
  render() {
    const {id,picture,inCart,nameOfFood,price} = this.props.products
    
    return (
      <div className='column'>
        <ProductConsumer>
          {value => (
         <div className="card" onClick={() => 
            value.handleDetail(id)
        }>
        <div className='picture-link'>
         <Link to='/details'>
          <img src={picture} className ="product-page"/>
          </Link>
      </div>
      <div className='btn-link'>
       <button className='incart-btn'
       disabled={inCart? true:false}
       onClick={() => {
        value.addToCart(id)
        value.openModal(id)
       }
     }
       >
     {inCart ? (<p className='incat-state' disabled>
     inCart
     </p>):(<ShoppingCartIcon style={{width:"1.5rem",height:"1.5rem",color:"blue"}}/>) }
       </button>
       </div>
      </div>

          )}
        </ProductConsumer>
     
<div className='footer'>
  <div className='food-name'><p>{nameOfFood}</p></div>
  <div className='price'>
    <p className='naira'>N</p>
    <p>{price}</p>
    </div>
</div>
</div>
  
     
    )
  }
}
