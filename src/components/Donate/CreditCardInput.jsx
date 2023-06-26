import React, { useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { Form, Button } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';

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
        setIsProcessing(false);
      } else {
        // Payment method created successfully, handle the payment
        console.log('Payment Method:', paymentMethod);
        // Call the backend API to complete the payment process
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage('An error occurred during payment processing. Please try again.');
      setIsProcessing(false);
    }
  };

  return (
    <div className="credit-card-input">
      <div>
        <h2 style={{ textAlign: "center", width: "100%", margin: "2rem 0", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
          Cedit Card Payment:
        </h2>
      </div>
      <div style={{ margin: "0.5rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
        <p>Amount: {amount}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Transaction ID: {generateTransactionId()}</p>
      </div>
      <center>
        <h4>Enter Credit Card Details:</h4>
        <p style={{ color: "crimson" }}>Donation payment option currently not available, please check others, thanks.</p>
      </center>
      <Form onSubmit={handlePayment}>
        <Form.Group controlId="cardDetails">
          <Form.Label>Card Details</Form.Label>
          <div className='shadow' style={{ background: "mintcream", padding: "4rem", margin: "3rem 0" }}>
            <CardElement options={{
              style: {
                base: {
                  fontSize: '16px', fontFamily: 'Arial, sans-serif', color: '#333', '::placeholder': {
                    color: '#ccc',
                  },
                }
              },
              invalid: {
                color: '#e5424d',
                borderColor: '#e5424d',
              },
              complete: {
                color: '#20a86b',
              },
              hidePostalCode: true,
            }} />
          </div>
        </Form.Group>
        {isError && <p className="text-danger">{errorMessage}</p>}
        <Button style={{ fontFamily: `"Montserrat", sans-serif`, margin: "1rem 0", background: "#006588", color: "mintcream" }}
          type="submit" disabled={!stripe || isProcessing}>
          {isProcessing ? 'Processing...' : 'Pay with Credit Card'}
        </Button>
      </Form>
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
