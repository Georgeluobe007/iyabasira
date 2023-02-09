import React, { Component } from 'react'
import {contenentalFood, DetailFood} from './Pictures'

const ProductContext = React.createContext();

 class ContextApi extends Component {
   state = {
        product:[],
        productDetail: DetailFood,
        carts: [],
        modalDetail: DetailFood,
        modalopen: false,
      cartsubtotal: 0,
       cartsubtax: 0,
        carttotal: 0,
        }
        componentDidMount() {
          this.setProduct();
        }
        setProduct = () => {
          let temporaryProduct = [];
         contenentalFood.forEach(item => {
          const singleItem = {...item};
          temporaryProduct = [...temporaryProduct,singleItem];
         })
         this.setState(() => {
          return{product: temporaryProduct}
        }) 
        }
      itemId = id => {
        const itermId = this.state.product.find(item => item.id === id);
      return itermId;
    
      }
  handleDetail = id => {
 const handleDetail = this.itemId(id);
 this.setState(() => {
  return {productDetail:handleDetail}
 })
  };
  addToCart = (id) => {
    const addToCart = [...this.state.product];
    const index = addToCart.indexOf(this.itemId(id));
    const product = addToCart[index]
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
     return {product:addToCart,carts:[...this.state.carts,product]}
    },() => {
     this.addTotal();
    })
  }
  closeModal = () => {
  this.setState(() => {
    return {modalopen:false}
  })
  }
  openModal = (id) => {
 const openModal = this.itemId(id);
 this.setState(() => {
  return{modalDetail:openModal,modalopen:true}
 })
  }
  increament = (id) =>{
      const increament = [...this.state.carts];
      const findValues = increament.find(item => item.id === id);
      const index = increament.indexOf(findValues);
      const product = increament[index];

      product.count = product.count + 1;
      product.total = product.count*product.price;
      this.setState(() => {
        return{carts:[...increament]};
      },() => {
        this.addTotal()
      })
  }
  decreament = (id) =>{
    const increament = [...this.state.carts];
    const findValues = increament.find(item => item.id === id);
    const index = increament.indexOf(findValues);
    const product = increament[index];

    product.count = product.count -1;
    if(product.count === 0){
      this.removeItem(id);
    }else{
      product.total = product.count*product.price;
      this.setState(() => {
        return{carts:[...increament]};
      },() => {
        this.addTotal()
      })
    }
  }
  addTotal = () => {
  let subTotal = 0;
  this.state.carts.map(item => (subTotal += item.total));
  const subtax = subTotal * 0.1;
  const tax = parseFloat(subtax.toFixed(2));
  const total = subTotal + tax;
  this.setState(() => {
    return {
     cartsubtotal:subTotal,
     cartsubtax:tax,
     carttotal:total
    }
  })
  }
  clearCart = () => {
  this.setState(() => {
    return {carts:[]}
  }, ()=>{
   this.addTotal();
   this.setProduct();
  })
  }
  removeItem = id => {
const temProduct = [...this.state.product];
const tempCart = [...this.state.carts];

let tempCart2 = tempCart.filter(item => item.id !== id);
const index = temProduct.indexOf(this.itemId(id));
let removeproduct = temProduct[index];
removeproduct.inCart = false;
removeproduct.count = 0;
removeproduct.total = 0;
this.setState(() => {
  return {
    carts: [...tempCart2],
    product: [...temProduct]  
  }
},() => {
  this.addTotal();
})

  }
 render() {

    return (
      <ProductContext.Provider value = {{
            ...this.state,
              handleDetail: this.handleDetail,
              addToCart: this.addToCart,
             closeModal: this.closeModal,
             openModal: this.openModal,
             increament: this.increament,
             decreament: this.decreament,
             clearCart: this.clearCart,
             removeItem: this.removeItem,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}
const ProductConsumer = ProductContext.Consumer;
export { ContextApi, ProductConsumer}

