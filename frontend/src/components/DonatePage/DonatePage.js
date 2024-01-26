// components/DonatePage.js

import React from 'react';
import PaymentForm from './PaymentForm';

const DonatePage = () => {
  const handlePaymentSuccess = (token) => {
    // Handle the token (e.g., send it to your backend)
    console.log('Payment successful. Token:', token);
  };

  return (
    <div>
      <h2>Donate</h2>
      <PaymentForm onSuccess={handlePaymentSuccess} />
    </div>
  );
};

export default DonatePage;
