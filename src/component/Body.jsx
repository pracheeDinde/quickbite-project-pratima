import React, { useState } from 'react'
import "../App.css";
import Address from "./Address";
import FoodCard from "./FoodCard";
import cartImg from "../asset/cart.jpg";
import { useNavigate } from 'react-router-dom';

const Body = () => {
    const [number, setNumber] = useState(1);
    const  navigate  = useNavigate()
  return (
    <div className="main-container">
    
        <Address />
        <FoodCard number={number} setNumber={setNumber} />
        
      
    )
  </div>
  )
}

export default Body