import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { RiFileCopyFill } from 'react-icons/ri';
import Barcode from '../../assets/barcode.svg';

import { paymentMethodIcon } from '../../db/db2';
import { saveBitcoinSubmission } from "../../hooks/firebase";

const Bitcoin = ({ amount, name, email, phone }) => {
  const [showForm, setShowForm] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [bitcoinAddress, setBitcoinAddress] = useState('');
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

  const handleUploadReceipt = (event) => {
    const file = event.target.files[0];
    setReceipt(file);
    setReceiptPreview(URL.createObjectURL(file));
  };

  const handleRecipientFormSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setRecipientName('');
    setBitcoinAddress('');
    setRecipientName('');
    setReceipt(null);
    setReceiptPreview(null);
    setShowModal(false);

    const fileInput = document.getElementById('receipt');
    if (fileInput) {
      fileInput.value = null;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const submissionData = {
        recipientName,
        bitcoinAddress,
        receipt,
        amount,
        name,
        email,
        phone,
      };

      const submissionId = await saveBitcoinSubmission(submissionData);

    } catch (error) {
      setError('Error saving gift card submission.');
      // Handle error case
    }

    setShowModal(true);
  };

  const handleSubmit = () => {
    setShowForm(true);
  };

  const handlePayment = () => {
    setShowModal(true);
  };

  return (
    <div className="bitcoin-payment-input shadow mt-5 mb-5 p-5">
      <div>
        <h2 style={{ textAlign: "center", width: "100%", margin: "2rem 0", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
          Bitcoin or Ethereum Donation Payment Details:
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
        <p>Instructions for Bitcoin Donation Payment:</p>
        <ul>
          <li>Step 1: Copy the wallet address provided below.</li> to us
          <li>Step 2: Or scan the QR Code.</li>
          <li>Step 3: Initiate a payment using the provided address.</li>
          <li>Step 4: Confirm the payment by submitting the payment receipt.</li>
        </ul>
      </div>

      <div className="bitcoin-details">
        <h3 style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
          <img src={paymentMethodIcon.icon11} alt={paymentMethodIcon.title} width={50} />Deposit Btc:
        </h3>
        <div className="bitcoin-info">
          <div className="bitcoin-info-item" style={{ margin: "1rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
            <h5 style={{
              width: "fit-content", margin: "2rem auto", textAlign: "center",
              borderBottom: "1px solid #006588", fontFamily: `"Kanit", sans-serif`,
            }}>
              Bitcoin Wallet
            </h5>

            <center>
              <div style={{}}>
                <div style={{ display: "flex", flexDirection: "row !important", alignItems: "center", width: "100%", margin: "2rem auto" }}>
                  <img src={Barcode} alt="barcode" width={250} fluid="true" style={{ margin: "1rem auto" }} />
                </div>

                <div>
                  <center>
                    <span style={{ fontSize: "12px" }}>Send only Bitcoin(BTC) to this address.</span>
                  </center>
                </div>
              </div>
            </center>

            <div style={{ textAlign: "left", margin: "2rem 0" }}>
              <p>Bitcoin Deposit Address:</p>

              <div className='btc-col'>
                <p>1AbCDeFgHiJkLmNoPqRsTuVwXyZ3eQrT1uX3myceds87Ty6aajx</p>
                <Button
                  style={{
                    border: "none", fontSize: "13px", color: "#006588", background: "none",
                    marginTop: "-30px", marginLeft: "5px"
                  }}
                  size="sm" onClick={() => handleCopy('1AbCDeFgHiJkLmNoPqRsTuVwXyZ3eQrT1uX3myceds87Ty6aajx')}
                >
                  <RiFileCopyFill />
                </Button>{' '}
              </div>
            </div>

          </div>
        </div>


        <h3 style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
          <img src={paymentMethodIcon.icon12} alt={paymentMethodIcon.title} width={70} />Deposit ETH:
        </h3>
        <div className="bitcoin-info-item" style={{ margin: "1rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
          <h5 style={{
            width: "fit-content", margin: "2rem auto", textAlign: "center",
            borderBottom: "1px solid #006588", fontFamily: `"Kanit", sans-serif`,
          }}>
            Ethereum Wallet
          </h5>

          <center>
            <div style={{}}>
              <div style={{ display: "flex", flexDirection: "row !important", alignItems: "center", width: "100%", margin: "2rem auto" }}>
                <img src={Barcode} alt="barcode" width={250} fluid="true" style={{ margin: "1rem auto" }} />
              </div>

              <div>
                <center>
                  <span style={{ fontSize: "12px" }}>Send only Ethereum(ETHH) to this address.</span>
                </center>
              </div>
            </div>
          </center>

          <div style={{ textAlign: "left", margin: "2rem 0" }}>
            <p>Ethereum Deposit Address:</p>

            <div className='btc-col'>
              <p>1AbCDeFgHiJkLmNoPqRsTuVwXyZ3eQrT1uX3myceds87Ty6aajx</p>
              <Button
                style={{
                  border: "none", fontSize: "13px", color: "#006588", background: "none",
                  marginTop: "-30px", marginLeft: "5px"
                }}
                size="sm" onClick={() => handleCopy('1AbCDeFgHiJkLmNoPqRsTuVwXyZ3eQrT1uX3myceds87Ty6aajx')}
              >
                <RiFileCopyFill />
              </Button>{' '}
            </div>
          </div>
        </div>
      </div>

      {error && ( // Render error message if error exists
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}

      {!showForm && (
        <Button
          style={{ fontFamily: `"Montserrat", sans-serif`, background: "#006588", color: "mintcream" }}
          onClick={handleSubmit}
        >
          I have donated
        </Button>
      )}

      {showForm && (
        <div className="recipient-form">
          <Form onSubmit={handleRecipientFormSubmit}>
            <Form.Group controlId="recipientName">
              <Form.Label>Recipient Name</Form.Label>
              <Form.Control
                style={{
                  backgroundColor: "mintcream",
                  color: "#006588",
                  marginBottom: "1rem"
                }}
                type="text"
                placeholder="Enter recipient name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="receipt">
              <Form.Label>Upload Receipt</Form.Label>
              <Form.Control style={{
                backgroundColor: "mintcream",
                color: "#006588",
                marginBottom: "1rem"
              }} type="file" onChange={handleUploadReceipt} required />
              {receiptPreview && (
                <div className="receipt-preview" style={{ maxWidth: "200px", margin: "1rem auto" }}>
                  <img src={receiptPreview} alt="Receipt Preview" width={250} />
                </div>
              )}
            </Form.Group>
            <Button className='shadow' style={{ fontFamily: `"Montserrat", sans-serif`, background: "#006588", color: "mintcream" }}
              onClick={handleFormSubmit}
              type="submit">
              Confirm
            </Button>
          </Form>
        </div>
      )}

      {!error && showModal && (

        <Modal
          className='shadow'
          style={{ backdropFilter: "blur(5px)" }}
          show={showModal}
          onHide={handleModalClose}
          variant="success"
        >
          <div className="shadow" style={{ color: "mintcream", fontFamily: `"Montserrat", sans-serif`, backgroundColor: "#006588" }}>
            <Modal.Header closeButton closeVariant='white'>
              <Modal.Title style={{ textAlign: "center", width: "100%" }}>Thank You!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Thank you for your donation, {recipientName}!</p>
              <p>We have received your donation receipt.</p>
              <small style={{ textAlign: "center", width: "60%", margin: "auto" }}>
                You will receive a corresponding email shortly after we confirm the payment. Thanks once again!
              </small>
            </Modal.Body>
            <Modal.Footer>
              <a className='shadow' href="/">
                <Button variant="primary" onClick={handleModalClose}>
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

export default Bitcoin;
