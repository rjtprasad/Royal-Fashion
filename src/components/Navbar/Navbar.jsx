import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink } from 'react-router-dom';
import './navbar.scss'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
          <img src="/img/india.jpg" alt=""/>
          <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>INR</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className="link" to="/products/1">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Children</Link>
          </div>
        </div>

        <div className="center">
          <Link className="link" to="/">Royal Fashion</Link>
        </div>

        <div className="right">
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
