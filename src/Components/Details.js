import React, { Component } from 'react'
import {ProductConsumer} from "../Components/ContextApi"
import '../ComponentCSS/Details.css'
import {Link} from 'react-router-dom'
export default class Details extends Component {
  render() {
    return (
   <ProductConsumer>
    {value => {
     const {id,inCart,nameOfFood,picture,aboutFood} = value.productDetail;
    return(
      <div className='container'>
        <div className='detail-component'>
            <p className='name-of-food'>{nameOfFood}</p>
            <div className='image-about'>
            <img src={picture} style={{height:"10rem",width:"10rem",marginLeft:"2rem"}}/>
            <div className='about-abt'>
             <p className='aboutFood'>{aboutFood}</p>
             <div className='incart-shop'>
              <Link to='/'>
              <button className='backTostore'>Back To Store</button>
              </Link>
                <button className='buy'
               disabled = {inCart ? true:false}
                >
                  {inCart ? (
                    <p className='paragraph'>InCart</p>
                  ):(
                    <p className='paragraph' onClick={() => value.addToCart(id)}>Buy</p>
                  )}
                </button>
             </div>
            </div>
            </div>
        </div>
      </div>
    )
    }}
   </ProductConsumer>
    )
  }
}
