import React from 'react'
import { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import './product.scss'

export const Product = () => {


  const [selecteddImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
  ]
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={()=>setSelectedImage(0)}/>
          <img src={images[1]} alt="" onClick={()=>setSelectedImage(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selecteddImage]} alt="" />
        </div>
      </div>
      <div className="right">
          <h1>Title</h1>
          <span className='price'>122</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Architecto dolorem beatae eius molestias aperiam esse 
            accusantium in recusandae labore mollitia?
          </p>
          <div className="quantity">
            <button onClick={()=>setQuantity((prev)=>prev === 1 ? 1 : prev-1)}>-</button>
            {quantity}
            <button onClick={()=>setQuantity((prev)=>prev < 5 ? prev+1 : prev)}>+</button>
          </div>
          <button className="add">
            <AddShoppingCartIcon/> Add to Cart
          </button>
          <div className="link">
            <div className="item">
              <FavoriteBorderIcon/> Add to Wishlist
            </div>
          </div>
          <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
      </div>
    </div>
  )
}
