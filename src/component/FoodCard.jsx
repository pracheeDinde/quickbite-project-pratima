import React, { useState } from "react";
import "./FoodCard.css";
import burger from "../asset/burger2.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FoodCard = () => {
  const [number, setNumber] = useState(1);
  const navigate = useNavigate();
  let [price, setPrice] = useState(300);
  let [totalPrice, setTotalPrice] = useState(price);
  let delivery_fee = 35;
  let platform_fee = 5;
  let gst = 31;

  let [totalAmt, setTotalAmt] = useState(
    price + delivery_fee + platform_fee + gst
  );

  return (
    <div className="food-card right">
      <div className="resto-card-info">
        <img src={burger} alt="" />
        <div className="rest-info">
          <h3>KFC Restaurant - MG-Road</h3>
          <h4>
            Shivaji Nagar
            <div></div>
          </h4>
        </div>
      </div>

      <div className="food-item-card">
        <div className="food-name">
          <i class="bx bx-checkbox-square"></i>
          <h3>burger king</h3>
        </div>

        <div className="add-item-box">
          <i
            class="bx bx-minus"
            onClick={() => {
              setNumber((n) => n - 1);

              if (number > 1) {
                setTotalPrice((totalPrice = totalPrice - price));
                setTotalAmt((totalAmt = totalAmt - price));
              } else {
               
                navigate("/empty");
              }
            }}
          ></i>
          {number}
          <i
            class="bx bx-plus"
            onClick={() => {
              setNumber(number + 1);
              setTotalPrice((totalPrice = totalPrice + price));
              setTotalAmt((totalAmt = totalAmt + price));
            }}
          ></i>
        </div>
        <div className="price">&#8377; {totalPrice}</div>
      </div>

      <div className="bill-detail">
        <div>
          <h3>Bill Details</h3>
        </div>
        <div className="bill-info">
          <div>
            <h4>Item Total</h4>
            <h4>&#8377;{totalPrice}</h4>
          </div>
          <div>
            <h4>
              Delivery Fee | 1.7 kms <i class="bx bx-error-circle"></i>
            </h4>
            <h4>&#8377;{35}</h4>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <div className="bill-detail">
        <div></div>
        <div className="bill-info">
          <div>
            <h4>
              Platform fee <i class="bx bx-error-circle"></i>
            </h4>
            <h4>&#8377;{5}</h4>
          </div>
          <div>
            <h4>
              GST and Restaurant Charges <i class="bx bx-error-circle"></i>
            </h4>
            <h4>&#8377;{31}</h4>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <div className="pay">
        <h3>To Pay</h3>
        <h3>&#8377;{totalAmt}</h3>
      </div>
    </div>
  );
};

export default FoodCard;
