import React from 'react'
import { Card } from '../Card/Card'
import './featuredProducts.scss'

export const FeaturedProducts = ({type}) => {
    const data = [
    {   
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12
    },
]

  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, officia porro, 
                esse sint quo error facilis possimus culpa eius quisquam, aliquam rerum obcaecati! 
                Nulla similique fugit, alias dolorem quas eius.
            </p>
        </div>
        <div className="bottom">
            {data.map((item)=>(<Card item={item} key={item.id}/>))}
        </div>
    </div>
  )
}
