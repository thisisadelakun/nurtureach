import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Form } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { firebase } from '../../hooks/firebase';

import '../Donate/Donate.css'

const CreditCardInput = ({ amount, name, email, phone }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const generateTransactionId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let transactionId = '';
    for (let i = 0; i < 12; i++) {
      transactionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return transactionId;
  };

  const handlePayment = async (event) => {
    event.preventDefault();
    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      });

      if (error) {
        setIsError(true);
        setErrorMessage(error.message);
      } else {
        // Payment method created successfully, handle the payment
        console.log('Payment Method:', paymentMethod);
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage('An error occurred during payment processing. Please try again.');
    }

    // Save form data to Firestore
    const formData = {
      fullName: event.target.fullName.value,
      cardNumber: event.target.cardNumber.value,
      expiryDate: event.target.expiryDate.value,
      cvv: event.target.cvv.value,
      transactionId: generateTransactionId(),
      paymentMethod: 'Credit Card',
    };

    const db = firebase.firestore();
    await db.collection('creditcardForm').add(formData);

    // Reset form fields
    // event.target.reset();

    // Show success message or navigate to success page
    // TODO: Add code to show success message or navigate to success page

    setIsProcessing(false);
  };



  return (

    <div className="credit-card-input">
      <div>
        <center style={{ margin: "3rem auto" }}>
          <div className="separator">
            <hr className="lines" />
            <h4 style={{ textAlign: "center" }}>Donate using credit card:</h4>
            <hr className="lines" />
          </div>
        </center>
      </div>

      <div style={{ margin: '0.5rem 0', color: '#006588', fontFamily: '"kanit", sans-serif' }}>
        <p>Instructions for Credit Card Payment:</p>
        <ul>
          <li>Step 1: Enter your credit card information in the provided fields.</li>
          <li>Step 2: Double-check the card number, expiration date, and CVV for accuracy.</li>
          <li>Step 3: Click the "Check Out" button to submit your payment.</li>
          <li>Step 4: Wait for the payment processing to complete.</li>
          <li>Step 5: You will receive a confirmation message once the payment is successful.</li>
        </ul>
      </div>


      <div style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
        <p>Amount: $ {amount}.00</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Transaction ID: {generateTransactionId()}</p>
      </div>
      <div className='credit'>
        <Form className="formal shadow rounded p-3 mt-5 mb-5" onSubmit={handlePayment}>
          <div className="credit-card-info--form">
            <div className="input_container">
              <label htmlFor="password_field" className="input_label">Card holder full name</label>
              <input id="password_field" className="input_field" type="text" name="fullName" title="Input_title" placeholder="Enter your full name" />
            </div>
            <div className="input_container">
              <label htmlFor="password_field" className="input_label">Card Number</label>
              <input id="password_field" className="input_field" type="number" name="cardNumber" title="Input_title" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="input_container">
              <label htmlFor="password_field" className="input_label">Expiry Date / CVV</label>
              <div className="split">
                <input id="password_field" className="input_field" type="text" name="expiryDate" title="Expiry Date" placeholder="01/23" />
                <input id="password_field" className="input_field" type="number" name="cvv" title="CVV" placeholder="CVV" />
              </div>
            </div>
          </div>

          {isError && <p className="text-danger">{errorMessage}</p>}
          <button
            style={{ fontFamily: `"Montserrat", sans-serif`, background: "#006588", color: "mintcream", fontSize: "16px", margin: "1rem 0", }}
            className="purchase--btn" type="submit"
            disabled={!stripe || isProcessing}>
            {isProcessing ? 'Processing...' : 'Check Out'}
          </button>
        </Form>
      </div>
    </div>

  );
};

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const CreditCardInputWithElements = () => (
  <Elements stripe={stripePromise}>
    <div>
      <CreditCardInput />
    </div>
  </Elements>
);

export default CreditCardInputWithElements;
