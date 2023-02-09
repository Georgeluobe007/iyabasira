import React from 'react'
import CartItem from './CartItem'
function CartImages({value}) {
    const {carts} = value
  return (
   <div>
    {carts.map(items => {
        return <CartItem key={items.id} items={items} value={value}/>
    })}
   </div>
  )
}

export default CartImages