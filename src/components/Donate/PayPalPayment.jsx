import React from 'react';
import { paymentMethodIcon } from '../../db/db2';
// import React, { useState } from 'react';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalPayment = ({ amount, name, email, phone }) => {

  const generateTransactionId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let transactionId = '';
    for (let i = 0; i < 12; i++) {
      transactionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return transactionId;
  };
  // const [isProcessing, setIsProcessing] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  // const handlePaymentSuccess = (details, data) => {
  //   // Payment succeeded, handle the success
  //   console.log('Payment Details:', details);
  //   console.log('Payment Data:', data);
  //   // Call the backend API to complete the payment process
  // };

  // const handlePaymentError = (error) => {
  //   // Payment error occurred, handle the error
  //   console.error('PayPal Error:', error);
  //   setIsError(true);
  //   setErrorMessage('An error occurred during payment processing. Please try again.');
  //   setIsProcessing(false);
  // };

  // const handlePaymentCancel = () => {
  //   // Payment was canceled by the user
  //   console.log('Payment Cancelled');
  // };

  return (
    <div className="paypal-payment">

      <div>
        <center style={{ margin: "3rem auto" }}>
          <div className="separator">
            <hr className="lines" />
            <h4 style={{ textAlign: "center", width: "100%", color: "#006588", fontFamily: `"Kanit", sans-serif`, marginTop: "-0.7rem", }}>
              <img src={paymentMethodIcon.icon4} alt={paymentMethodIcon.title} width={60}
              />Donation:
            </h4>
            <hr className="lines" />
          </div>
        </center>
      </div>
      <div style={{ margin: "0.5rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
        <p>Amount: ${amount}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Transaction ID: {generateTransactionId()}</p>
      </div>
      <div style={{ margin: "5rem auto", width: "95%", textAlign: "center" }}>
        <p style={{ color: "crimson" }}>
          Donation option currently not available, please go back to choose another payment option, thanks.
        </p>
      </div>
      {/* {isError && <p className="text-danger">{errorMessage}</p>} */}
      {/* <PayPalButtons
        amount="10.00" // Set the amount for the payment
        currency="USD" // Set the currency
        // onSuccess={handlePaymentSuccess} // Callback function when payment succeeds
        // onError={handlePaymentError} // Callback function when payment encounters an error
        // onCancel={handlePaymentCancel} // Callback function when payment is canceled
        // options={{
        //   clientId: 'YOUR_PAYPAL_CLIENT_ID', // Replace with your PayPal Client ID
        // }}
        // disabled={isProcessing}
        style={{
          layout: 'horizontal',
          color: 'gold',
          shape: 'rect',
          label: 'checkout',
          tagline: false,
        }}
      /> */}
    </div>
  );
};

export default PaypalPayment;
