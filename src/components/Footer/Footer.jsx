import React from 'react'
import "./footer.scss"

export const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae totam mollitia dolorum inventore vitae? Dolor perferendis quis nostrum reiciendis est.</span>
        </div>
        <div className="item">
          <h1>Contact Us</h1>
          <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat perspiciatis magni omnis! Dignissimos nesciunt ex esse eaque maiores nisi mollitia.</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Royal Fashion</span>
          <span className="copyright">Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
        
      </div>
    </div>

  )
}
