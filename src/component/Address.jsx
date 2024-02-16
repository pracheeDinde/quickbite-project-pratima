import React, { useState } from "react";
import "./Address.css";
import AddressBox from "./AddressBox";
import { useNavigate } from "react-router-dom";
const Address = () => {
  const navigate = useNavigate()
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div class="w-75 h-96 relative">
        <div className="address-box w-full h-full">
          <h2 className="text-3xl font-bold text-orange-400">Add a delivery address</h2>
          <div className="box">
            <h3 className="text-2xl font-semibold text-orange-400">Add New Address</h3>
            <button
              className="btn"
              onClick={() => {
                setIsClicked(!isClicked);
              }}
            >
              Add New
            </button>
          </div>
        </div>

        <AddressBox isClicked={isClicked} setIsClicked={setIsClicked} />

        <div onClick={()=>{
          navigate('/payment')
        }} className="payment">Payment</div>
      </div>
    </>
  );
};

export default Address;
