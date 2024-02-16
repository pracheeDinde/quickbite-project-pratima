

import { useNavigate } from "react-router-dom";
import cartImg from "../asset/cart.jpg";
import React from 'react'

const EmptyCart = () => {

    const navigate = useNavigate()

  return (
    <div className="cart-page mt-5">
    <div className="cart-empty">
      <img className="w-96 h-52" src={cartImg} alt="" />
      <h3 className="text-xl font-bold">Your Cart is Empty</h3>
      <p>You can go to home page to view more restaurants</p>
      <button
        className="btn"
        onClick={() => {
          navigate(-1)
        }}
      >
        Back
      </button>
    </div>
  </div>
  )
}

export default EmptyCart