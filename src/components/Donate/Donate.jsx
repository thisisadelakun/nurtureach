import React, { useState } from 'react';
import '../../hooks/Form.css'
import './Donate.css'
import { paymentMethodIcon } from '../../db/db2';
import { Form, Button } from 'react-bootstrap';
import CreditCardInput from './CreditCardInput';
import BankDeposit from './BankDeposit';
import PaypalPayment from './PaypalPayment';

import InputGroup from 'react-bootstrap/InputGroup';
import Bitcoin from './Bitcoin';
import GiftCard from './GiftCard';
import ApplePay from './ApplePay';
import GooglePay from './GooglePay';

import { saveDonation } from '../../hooks/firebase';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formCompleted, setFormCompleted] = useState(false);
  const [donationStep, setDonationStep] = useState(1);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'amount') {
      setAmount(value);
    } else if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'address') {
      setAddress(value);
    } else if (name === 'city') {
      setCity(value);
    } else if (name === 'state') {
      setState(value);
    } else if (name === 'postalCode') {
      setPostalCode(value);
    } else if (name === 'paymentMethod') {
      setPaymentMethod(value);
    }

    const isFormCompleted =
      amount !== '' &&
      name !== '' &&
      email !== '' &&
      phone !== '' &&
      address !== '' &&
      city !== '' &&
      state !== '' &&
      postalCode !== '' &&
      paymentMethod !== '';

    setFormCompleted(isFormCompleted);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity()) {
      // Valid form submission
      setValidated(true);
    } else {
      // Invalid form submission, trigger validation
      event.stopPropagation();
      setValidated(true);
    }

    setValidated(true);

    const donationData = {
      amount,
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode,
      paymentMethod
    };

    try {
      await saveDonation(donationData);
      console.log('Donation form submitted successfully.');
      // Reset form or show success message
    } catch (error) {
      console.error('Error submitting donation form:', error);
      // Show error message
    }

    if (donationStep === 1) {
      setDonationStep(2);
    } else if (donationStep === 2) {
      if (paymentMethod === 'creditCard') {
        handleCreditCardPayment(); // Call credit card payment function
      } else if (paymentMethod === 'bankTransfer') {
        handleBankTransferPayment(); // Call bank transfer payment function
      } else if (paymentMethod === 'applePay') {
        handleApplePayPayment(); // Call Apple Pay payment function
      } else if (paymentMethod === 'paypal') {
        handlePayPalPayment(); // Call PayPal payment function
      }
    }
  };

  const handleGoBack = () => {
    if (donationStep === 2) {
      setDonationStep(1);
    } else if (donationStep === 3) {
      setDonationStep(2);
    }
  };

  const handlePaymentMethodChange = (event) => {
    const value = event.target.value;
    setPaymentMethod(value);

    const isFormCompleted =
      amount !== '' &&
      name !== '' &&
      email !== '' &&
      phone !== '' &&
      address !== '' &&
      city !== '' &&
      state !== '' &&
      postalCode !== '' &&
      value !== ''; // Check if payment method is selected

    setFormCompleted(isFormCompleted);
  };

  // const handleCreditCardPayment = () => {
  //   // Handle credit card payment logic
  // };

  // const handleBankTransferPayment = () => {
  //   // Handle bank transfer payment logic
  // };

  const handleApplePayPayment = () => {
    // Handle Apple Pay payment logic
  };

  const handlePayPalPayment = () => {
    // Handle PayPal payment logic
  };

  return (
    <div className="donate" style={{ backgroundColor: "mintcream" }}>
      <div className="impact-header">
        <div>
          <div className="donate-header-img"></div>
          <div className="donate-header-txt container shadow" >
            <h1>Donate to Our Cause</h1>
          </div>
        </div>
      </div>

      <div className="container mt-3 ">

        {donationStep === 1 ? (
          <Form
            className=''
            style={{
              fontFamily: `'Kanit', sans-serif`,
              color: "#006588", marginBottom: "4rem"
            }}
            noValidate validated={validated} onSubmit={handleSubmit}
          >

            <div className="donate-main-title text-center mb-4" style={{ color: "mintcream" }}>
              <h3>Your generous contribution will make a difference in the lives of those in need.</h3>
            </div>

            <div
              className=''
              style={{
                fontFamily: `'Kanit', sans-serif`,
                padding: "10px 0"
              }}
            >
              <h4>PLEASE NOTE:</h4>
              <ol>
                <li>Amount set to USD</li>
                <li>Some payment option are currently not available</li>
                <li>You can choose recommended payment option</li>
              </ol>
            </div>

            <div className="shadow steps-form-col">

              <div className="steps-form-row2">

                <Form.Group style={{ width: "100%", marginBottom: "1.5rem" }} controlId="validationCustomAmount">
                  <Form.Label style={{ fontFamily: `'Kanit', sans-serif`, color: "#006588", }}>
                    Donation Amount
                  </Form.Label>
                  <InputGroup hasValidation className="mb-3">
                    <InputGroup.Text style={{ backgroundColor: "#006588", color: "mintcream", }} id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control style={{ backgroundColor: "mintcream", color: "#006588", }}
                      type="number"
                      aria-describedby="inputGroupPrepend"
                      placeholder="Enter the donation amount"
                      name="amount"
                      value={amount}
                      onChange={handleInputChange}
                      required
                    />
                    <InputGroup.Text style={{ backgroundColor: "#006588", color: "mintcream", }}>.00</InputGroup.Text>
                    <Form.Control.Feedback type="invalid">Please enter a donation amount.</Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group style={{ width: "100%", marginBottom: "1.5rem" }} controlId="validationCustom01">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "mintcream",
                      color: "#006588",
                    }}
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

              </div>

              <div className="steps-form-row2" >
                <Form.Group style={{ marginBottom: "1.5rem" }} controlId="validationCustom02">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "mintcream",
                      color: "#006588",
                    }}
                    type="email"
                    placeholder="E.g., example@example.com"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Email.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginBottom: "1.5rem" }} controlId="validationCustom03">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "mintcream",
                      color: "#006588",
                    }}
                    type="tel"
                    placeholder="E.g., XXX-XXX-XXXX"
                    name="phone"
                    value={phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Phone number.
                  </Form.Control.Feedback>
                </Form.Group>

              </div>


              <Form.Group style={{ marginBottom: "1.5rem" }} controlId="validationCustom04">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "mintcream",
                    color: "#006588",
                  }}
                  type="text"
                  placeholder="Enter your address"
                  name="address"
                  value={address}
                  onChange={handleInputChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Address.
                </Form.Control.Feedback>
              </Form.Group>


              <div className="steps-form-row">
                <Form.Group style={{ marginBottom: "1.5rem" }} controlId="validationCustom05" >
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "mintcream",
                      color: "#006588",
                    }}
                    type="text"
                    placeholder="Enter your city"
                    name="city"
                    value={city}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid City.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  style={{ marginBottom: "1.5rem" }} controlId="validationCustom06">
                  <Form.Label>State / Province</Form.Label>
                  <Form.Control
                    style={{
                      backgroundColor: "mintcream",
                      color: "#006588",
                    }}
                    type="text"
                    placeholder="Enter your state"
                    name="state"
                    value={state}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid State or Province.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group style={{ marginTop: "-0.27rem" }} controlId="validationCustom07">
                  <Form.Label>Postal / Zip Code</Form.Label>
                  <Form.Control
                    style={{
                      background: "transparent",
                      color: "#006588",
                    }}
                    type="text"
                    placeholder="Enter your postal code"
                    name="postalCode"
                    value={postalCode}
                    onChange={handleInputChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid Postal or Zip Code.
                  </Form.Control.Feedback>
                </Form.Group>
              </div>

              <Form.Group style={{ marginTop: "1.5rem" }} controlId="validationCustom08">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select style={{ backgroundColor: "mintcream", color: "#006588", }}
                  aria-label="Default select example"
                  as="select"
                  name="paymentMethod"
                  onChange={handlePaymentMethodChange} required >

                  <option value="" >Select payment method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="bankTransfer">Bank Deposit or Transfer</option>
                  <option value="bitcoin">Bitcoin or Ethereum</option>
                  <option value="giftCards">Gift Cards</option>
                  <option value="paypal">PayPal</option>
                  <option value="applePay">Apple Pay</option>
                  <option value="applePay">Google Pay</option>

                </Form.Select >
                <Form.Control.Feedback type="invalid">
                  Please choose a Payment Method.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="paymentmode">
                <img src={paymentMethodIcon.icon1} alt={paymentMethodIcon.title} width={50} />
                <img src={paymentMethodIcon.icon2} alt={paymentMethodIcon.title} width={50} />
                <img src={paymentMethodIcon.icon3} alt={paymentMethodIcon.title} width={50} />
                <img src={paymentMethodIcon.icon4} alt={paymentMethodIcon.title} width={50} />
              </Form.Group>

              <Form.Group
                style={{
                  margin: "0.5rem 0"
                }}
                controlId="termsAccepted">
                <Form.Check
                  type="checkbox"
                  label="I accept the terms and conditions"
                  name="termsAccepted"
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  required
                  feedbackType="invalid"
                />
              </Form.Group>

              <Button
                style={{
                  margin: "0.5rem 0",
                  background: "#006588"
                }}
                type="submit"
                disabled={!formCompleted || !termsAccepted}
                onClick={handleSubmit}
              >
                Continue
              </Button>

            </div>
          </Form>
        ) : donationStep === 2 ? (
          <div>
            <Button variant="secondary" onClick={handleGoBack}>
              Go Back
            </Button>
            {paymentMethod === 'creditCard' &&
              <CreditCardInput
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}
            {paymentMethod === 'bankTransfer' &&
              <BankDeposit
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}
            {paymentMethod === 'paypal' &&
              <PaypalPayment
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}

            {paymentMethod === 'bitcoin' &&
              <Bitcoin
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}

            {paymentMethod === 'giftCards' &&
              <GiftCard
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}
            {paymentMethod === 'applePay' &&
              <ApplePay
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}
            {paymentMethod === 'googlePay' &&
              <GooglePay
                amount={amount}
                name={name}
                email={email}
                phone={phone}
              />}
          </div>
        ) : (
          <div>
            <Button variant="secondary" onClick={handleGoBack}>
              Go Back
            </Button>
            <h3>Thank you for your donation!</h3>
            {/* Display donation confirmation details */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
