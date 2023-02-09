import React, { Component } from 'react'
import '../ComponentCSS/NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import {Link} from "react-router-dom"
export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
 <div className='letf-side'>
    <div className='nav-image'>
      <Link to="/"><RestaurantMenuIcon style={{width:"3rem",height:"3rem",color:"white"}}/></Link>
   </div>
    <div className='nav-link'>
        <Link className='product-link' to="/">
        Delicious Menu
        </Link>
    </div>
 </div>
 <div className='right-side'>
 <div className='nav-image2'>
 <Link to="/cart">< ShoppingCartIcon  style={{width:"3rem",height:"3rem",color:"white"}}/></Link>
 </div>
 </div>
      </div>
    )
  }
}
