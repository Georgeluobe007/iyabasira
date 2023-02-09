import React, { Component } from 'react'
import '../ComponentCSS/NavBar.css'


import {Link} from "react-router-dom"
export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
 <div className='letf-side'>
    <div className='nav-image'>
      <Link to="/"><img src='picture/land-line3.png' style={{width:"3rem",height:"3rem",color:"blue"}}/></Link>
   </div>
    <div className='nav-link'>
        <Link className='product-link' to="/">
        Product
        </Link>
    </div>
 </div>
 <div className='right-side'>
 <div className='nav-image2'>
 <Link to="/cart"><img src='picture/basket3.jpg' style={{width:"3rem",height:"3rem",color:"blue"}}/></Link>
 </div>
 </div>
      </div>
    )
  }
}
