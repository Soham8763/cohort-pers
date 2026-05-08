import React from 'react'
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();
    const {match,selectedSeats,paymentMethod} = location.state;
    console.log(match,selectedSeats,paymentMethod);
  return (
    <div>SuccessPage</div>
  )
}

export default SuccessPage