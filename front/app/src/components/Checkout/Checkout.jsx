import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { sendPayment } from "../../redux/actions";

export default function Checkout() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const cartTotal = useSelector((state) => state.getTotal);
  //RECIBE LO QUE EL POST DEL BACK RETORNA
  const dataPayment = useSelector((state) => state.dataPayment);
  const navigate = useNavigate();

  const handlePay = () => {
    dispatch(sendPayment({ totalPriceProducts: cartTotal, products: cart }));
  };

  if (cart.length < 1) {
    toast.error("Shopping cart is empty");
    setTimeout(() => {
      navigate("/");
    }, 1500);

    return (
      <div>
        Shopping cart is empty <Toaster />
      </div>
    );
  }

  return (
    <div>
      <button onCick={() => handlePay()}>PAY</button>
      <Toaster />
    </div>
  );
}
