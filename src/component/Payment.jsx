import React from "react";
import { useNavigate } from "react-router-dom";
import goggle_pay from "../asset/goggle_pay.jpg";
import phone_pay from "../asset/phone_pay.jpg";
import Paytm_logo from "../asset/Paytm_Logo.jpg";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <>
      <i
        class="bx bx-arrow-back px-3 py-1 border-2 border-black rounded-full text-3xl m-3  bg-yellow-300"
        onClick={() => navigate(-1)}
      ></i>
      <div className="main-div">
        <div className=" py-2 border-[1px] my-2 border-orange-400 pl-3 rounded">
          <form action=""></form>
          <input
            
            className="w-full outline-none"
            type="text"
            placeholder="Select Payment Method"
          />
        </div>
        <div className="img">
          <img src={goggle_pay}  alt="" />
          <img src={phone_pay} alt="" />
          <img src={Paytm_logo} alt="" />
        </div>
        <div className="w-full py-2 border-[1px] my-2 border-orange-400 rounded">
          <select className="wallet-combo" name="" id="">
            <option value="Wallets">Add A New UPI</option>
            <option value="Goggle Pay Pay">Goggle Pay</option>
            <option value="phone pay">Phone Pay</option>
            <option value="paytm UPI">Paytm UPI</option>
            <option value="BHIM">BHIM</option>
            <option value="WhatsApp Pay">WhatsApp Pay</option>
          </select>
        </div>
        <div className="w-full py-2 border-[1px] my-2 border-orange-400 pl-3 rounded">
          <input
           
            className="w-full outline-none"
            type="text"
            placeholder="More Payment Options dilivery"
          />
        </div>
        <div className="w-full py-2 border-[1px] my-2 border-orange-400 rounded">
          <select className="wallet-combo" name="" id="">
            <option value="Wallets">wallets</option>
            <option value="Amazon Pay">Amazon Pay</option>
            <option value="phone pay">Phone Pay</option>
            <option value="paytm UPI">Paytm UPI</option>
          </select>
        </div>
        <div className="w-full py-2 border-[1px] my-2 border-orange-400 rounded">
          <select className="wallet-combo" name="" id="">
            <option value="netbanking">Netbanking</option>
            <option value="boi">BOI</option>
            <option value="sbi">SBI</option>
            <option value="hdfc">HDFC</option>
            <option value="icici">ICICI</option>
            <option value="kotak">Kotak</option>
          </select>
        </div>

        <div className="w-full py-2 border-[1px] my-2 border-orange-400 pl-3 rounded ">
          <input
            
            className="w-full outline-none"
            type="text"
            placeholder="Pay on Delivery (Cash/UPI)"
          />
        </div>
        <div>
          <button
            className="btn1"
            type="submit"
            onClick={() => alert("Your Payment was Successfull")}
          >
            Pay
          </button>
        </div>
      </div>

      <div>
        <button
          
          onClick={() => navigate(-1)}
        ></button>
      </div>
    </>
  );
};

export default Payment;
