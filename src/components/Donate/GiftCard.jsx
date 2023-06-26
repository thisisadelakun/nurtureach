import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import { paymentMethodIcon } from '../../db/db2';

import { saveGiftCardSubmission } from '../../hooks/firebase';

import '../../hooks/Form.css'

const GiftCard = ({ amount, name, email, phone }) => {
  const [showForm, setShowForm] = useState(true);
  const [giftCard, setGiftCard] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [receipt, setReceipt] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);


  const generateTransactionId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let transactionId = '';
    for (let i = 0; i < 12; i++) {
      transactionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return transactionId;
  };

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the gift card data
      const giftCardData = {
        amount,
        name,
        email,
        phone,
        cardNumber,
        frontImage,
        backImage,
        receipt
      };

      // Save the gift card submission
      const submissionId = await saveGiftCardSubmission(giftCardData);

    } catch (error) {
      setError('Error saving gift card submission.');
      // Handle error case
    }
    setShowModal(true);
  };

  const handleSubmit = () => {
    setShowForm(false);
  };

  const handleFrontImageUpload = (event) => {
    const file = event.target.files[0];
    setFrontImage(file);
  };

  const handleBackImageUpload = (event) => {
    const file = event.target.files[0];
    setBackImage(file);
  };

  const handleReceiptUpload = (event) => {
    const file = event.target.files[0];
    setReceipt(file);
  };

  const handleModalClose = () => {
    setShowModal(false);

    setGiftCard('');
    setNewAmount('');
    setCardNumber('');
    setFrontImage(null);
    setBackImage(null);
    setReceipt(null);
    setShowModal(false);

    const fileInput1 = document.getElementById('frontImage');
    if (fileInput1) {
      fileInput1.value = null;
    }
    const fileInput2 = document.getElementById('backImage');
    if (fileInput2) {
      fileInput2.value = null;
    }
    const fileInput3 = document.getElementById('receipt');
    if (fileInput3) {
      23
      fileInput3.value = null;
    }
  };

  return (
    <div className="gift-card-form mt-5 mb-5 p-5">
      <div>
        <h2 style={{ textAlign: "center", width: "100%", margin: "2rem 0", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
          Gift Card Donation Payment:
        </h2>
      </div>

      <div style={{ margin: "0.5rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
        <p>Amount: ${amount}</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Transaction ID: {generateTransactionId()}</p>
      </div>

      <div style={{ margin: "1rem 0", color: "#006588", fontFamily: `"kanit", sans-serif` }}>
        <p>Instructions for Gift Card:</p>
        <ul>
          <li>Step 1: Select the type of gift card from the options below.</li>
          <li>Step 2: Enter the amount of the gift card.</li>
          <li>Step 3: Enter the card number of the gift card.</li>
          <li>Step 4: Upload a clear picture of the front and back of the gift card.</li>
          <li>Step 5: If available, upload the purchase receipt for the gift card.</li>
          <li>Step 6: Click on the "Send Gift Card" to complete the donation</li>
        </ul>
      </div>

      {showForm && (
        <div className="gift-card-details">
          <h3 style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>Enter Gift card details:</h3>

          <Form className='steps-form-col shadow'
            style={{
              fontFamily: `'Kanit', sans-serif`,
              color: "#006588", marginBottom: "4rem"
            }} onSubmit={handleFormSubmit}>


            <Form.Group controlId="giftCard">
              <Form.Label>Gift Card</Form.Label>
              <Form.Select
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "0.1rem"
                }}
                aria-label="Default select example"
                as="select"
                value={giftCard}
                onChange={(e) => setGiftCard(e.target.value)}
                required
              >
                <option value="">Select a gift card</option>
                <option value="Amazon">Amazon</option>
                <option value="iTunes">iTunes</option>
                <option value="Google Play">Steam Wallet</option>
                <option value="Google Play">America Express</option>
                <option value="Google Play">Ebay</option>
                <option value="Google Play">Visa Prepaid</option>
                <option value="Google Play">Others</option>
              </Form.Select >
            </Form.Group>
            <Form.Group style={{
              backgroundColor: "mintcream",
              color: "#006588",
              marginBottom: "0.1rem"
            }} controlId="paymentmode">
              <img src={paymentMethodIcon.icon5} alt={paymentMethodIcon.title} width={50} />
              <img src={paymentMethodIcon.icon6} alt={paymentMethodIcon.title} width={50} />
              <img src={paymentMethodIcon.icon7} alt={paymentMethodIcon.title} width={30} />
              <img src={paymentMethodIcon.icon8} alt={paymentMethodIcon.title} width={30} />
            </Form.Group>

            <Form.Group controlId="newAmount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "1rem"
                }}
                type="number"
                placeholder="Enter amount"
                value={newAmount}
                onChange={(e) => setNewAmount(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="cardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "1rem"
                }}
                type="text"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="frontImage">
              <Form.Label>Front Image</Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "1rem"
                }}
                type="file"
                accept="image/*"
                onChange={handleFrontImageUpload}
                required
              />
              {frontImage && (
                <div style={{ maxWidth: "200px", margin: "1rem auto" }} >
                  <img
                    src={URL.createObjectURL(frontImage)}
                    alt="Front Image Preview"
                    className="image-preview"
                    width={200}
                  />
                </div>
              )}
            </Form.Group>
            <Form.Group controlId="backImage">
              <Form.Label>Back Image</Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "1rem"
                }}
                type="file"
                accept="image/*"
                onChange={handleBackImageUpload}
                required
              />
              {backImage && (
                <div style={{ maxWidth: "200px", margin: "1rem auto" }} >
                  <img
                    src={URL.createObjectURL(backImage)}
                    alt="Back Image Preview"
                    className="image-preview"
                    width={200}
                  />
                </div>
              )}
            </Form.Group>
            <Form.Group controlId="receipt">
              <Form.Label>Card Purchase Receipt (optional)</Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "1rem"
                }}
                type="file"
                accept="image/*"
                onChange={handleReceiptUpload}
              />
              {receipt && (
                <div style={{ maxWidth: "200px", margin: "1rem auto" }} >
                  <img
                    src={URL.createObjectURL(receipt)}
                    alt="Receipt Image Preview"
                    className="image-preview"
                    width={200}

                  />
                </div>
              )}
            </Form.Group>
            <Button className='shadow'
              style={{ fontFamily: `"Montserrat", sans-serif`, background: "#006588", margin: "2rem 0", color: "mintcream" }}
              type="submit">
              Send Gift Card
            </Button>
          </Form>

          {error && ( // Render error message if error exists
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
        </div>
      )}

      {!error && showModal && (
        <Modal
          className="shadow"
          style={{ backdropFilter: "blur(5px)" }}
          show={showModal}
          onHide={handleModalClose}
          variant="success"
        >
          <div className="shadow" style={{ color: "mintcream", fontFamily: `"Montserrat", sans-serif`, backgroundColor: "#006588" }}>
            <Modal.Header closeButton closeVariant="white">
              <Modal.Title style={{ textAlign: "center", width: "100%" }}>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Thank you for your donation, {name}!</p>
              <p>We have received your Gift card.</p>
              <small style={{ textAlign: "center", width: "60%", margin: "auto" }}>
                You will receive a corresponding email shortly after we comfirm the payment, Thanks once again
              </small>
            </Modal.Body>
            <Modal.Footer>
              <a className='shadow' href="/">
                <Button style={{ fontFamily: `"Montserrat", sans-serif`, background: "#006588", color: "mintcream" }}
                  onClick={handleModalClose}>
                  Return to Home
                </Button>
              </a>
            </Modal.Footer>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default GiftCard;
