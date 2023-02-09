import React, { Component } from 'react'
import '../ComponentCSS/Modal.css'
import {ProductConsumer} from './ContextApi'
import {Link} from 'react-router-dom'
export default class extends Component {
  render() {
    return ( 
        <ProductConsumer>
            {value => {

   const {closeModal,modalopen} = value;
   const {picture} = value.modalDetail;
  if(!modalopen){
    return null
  }else{
    return(
        <div className='container'>
        <div className='detail-component1'>
       <img src={picture} className="image-modal" />
       <div className='modal-button'>
        <Link to='/'>
        <button className='back-shop' onClick={() => closeModal()}>Back To Store</button>
        </Link>
        <Link to='/cart'>
        <button className='gotocart' onClick={() => closeModal()}>My Cart</button>
        </Link>
        
       </div>
        </div>
    </div>
    )
  }


            }}
        </ProductConsumer>
    
    )
  }
}
