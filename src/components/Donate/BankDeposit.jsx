import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { RiFileCopyFill } from 'react-icons/ri';

import { paymentMethodIcon } from '../../db/db2';

import { saveBankSubmission } from '../../hooks/firebase';

const BankDeposit = ({ amount, name, email, phone }) => {
  const [showForm, setShowForm] = useState(false);
  const [recipientName, setRecipientName] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [receiptPreview, setReceiptPreview] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);


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
    // Reset the form and close the modal
    setRecipientName('');
    setReceipt(null);
    setReceiptPreview(null);
    setShowModal(false);

    // Reset the file input value
    const fileInput = document.getElementById('receipt');
    if (fileInput) {
      fileInput.value = null;
    }
  };

  const handleSubmit = async () => {
    setShowForm(true);
  };

  const handlePayment = () => {
    setShowModal(true);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const formSubmission = {
        amount,
        name,
        email,
        phone,
        recipientName,
        receipt
      };

      const submissionId = await saveBankSubmission(formSubmission);

      setFormSubmitted(true);

      console.log('Bank form submitted successfully:', formSubmission);
      console.log('Submission ID:', submissionId);
    } catch (error) {
      console.error('Error submitting bank form:', error);
      // Handle the error, such as displaying an error message
    }
    setShowModal(true);
  };


  return (
    <div className="bank-deposit-input shadow mt-5 mb-5 p-5">

      <div>
        <center style={{ margin: "3rem auto" }}>
          <div className="separator">
            <hr className="lines" />
            <h4 style={{ textAlign: "center", width: "100%", color: "#006588", fontFamily: `"Kanit", sans-serif` }}>
              Donate with Bank Deposit / Wire Transfer:
            </h4>
            <hr className="lines" />
          </div>
        </center>
      </div>

      <div style={{ margin: "0.5rem 0", color: "#006588", fontFamily: `"kanit", sans-serif` }}>
        <p>Instructions for Bank Deposit / Wire Transfer:</p>
        <ul>
          <li>Step 1: Choose one of the listed banks.</li>
          <li>Step 2: Copy the account number and routing number.</li>
          <li>Step 3: Initiate a bank deposit or wire transfer using the provided details.</li>
          <li>Step 4: After performing the transaction, click "I have donated" button, proceed to upload your bank
            deposit/ wiretransfer receipt.
          </li>
        </ul>
      </div>

      <div style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
        <p>Amount: $ {amount}.00</p>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Transaction ID: {generateTransactionId()}</p>
      </div>

      <div className="bank-details">
        <h6 style={{ margin: "2rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>Bank Details:</h6>
        <div className="bank-info">
          <div className="bank-info-item" style={{ margin: "1rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
            <h5 style={{
              width: "fit-content", margin: "2rem auto", textAlign: "center",
              borderBottom: "1px solid #006588", fontFamily: `"Kanit", sans-serif`,
              display: "flex", alignItems: "center",
            }}>
              Discover Bank <img src={paymentMethodIcon.icon13} alt={paymentMethodIcon.title} width={50} style={{ marginLeft: "10px" }} />
            </h5>
            <div style={{ display: "flex", flexDirection: "row !important", alignItems: "center" }}>
              <p> Account Number: 123456789</p><Button style={{
                border: "none", fontSize: "13px", color: "#006588", background: "none",
                marginTop: "-30px", marginLeft: "5px"
              }}
                size="sm" onClick={() => handleCopy('123456789')}>
                <RiFileCopyFill /> Copy
              </Button>{' '}
            </div>
            <div style={{ display: "flex", flexDirection: "row !important" }}>
              <p>Routing Number: 987654321</p><Button style={{
                border: "none", fontSize: "13px", color: "#006588", background: "none",
                marginTop: "-30px", marginLeft: "5px"
              }}
                size="sm" onClick={() => handleCopy('987654321')}>
                <RiFileCopyFill /> Copy
              </Button>
            </div>
          </div>

          <div className="bank-info-item" style={{ margin: "1rem 0", color: "#006588", fontFamily: `"Montserrat", sans-serif` }}>
            <h5 style={{
              width: "fit-content", margin: "2rem auto", textAlign: "center",
              borderBottom: "1px solid #006588", fontFamily: `"Kanit", sans-serif`,
              display: "flex", alignItems: "center",
            }}>
              Citi Bank <img src={paymentMethodIcon.icon14} alt={paymentMethodIcon.title} width={50} style={{ marginLeft: "10px", marginBottom: "7px" }} />
            </h5>
            <div style={{ display: "flex", flexDirection: "row !important", alignItems: "center" }}>
              <p> Account Number: 123456789</p><Button style={{
                border: "none", fontSize: "13px", color: "#006588", background: "none",
                marginTop: "-30px", marginLeft: "5px"
              }}
                size="sm" onClick={() => handleCopy('123456789')}>
                <RiFileCopyFill /> Copy
              </Button>{' '}
            </div>
            <div style={{ display: "flex", flexDirection: "row !important" }}>
              <p>Routing Number: 987654321</p><Button style={{
                border: "none", fontSize: "13px", color: "#006588", background: "none",
                marginTop: "-30px", marginLeft: "5px"
              }}
                size="sm" onClick={() => handleCopy('987654321')}>
                <RiFileCopyFill /> Copy
              </Button>
            </div>
          </div>
        </div>
      </div>

      {!showForm && (
        <Button style={{ fontFamily: `"Montserrat", sans-serif`, background: "#006588", color: "mintcream" }} onClick={handleSubmit}>
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

      <Modal className='shadow' style={{ backdropFilter: "blur(5px)" }}
        show={showModal} onHide={handleModalClose} variant="success">
        <div className="shadow" style={{ color: "mintcream", fontFamily: `"Montserrat", sans-serif`, backgroundColor: "#006588" }}>
          <Modal.Header closeButton closeVariant='white'>
            <Modal.Title style={{ textAlign: "center", width: "100%" }}>Thank You!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Thank you for your donation, {recipientName}!</p>
            <p>We have received your payment receipt.</p>
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
    </div>
  );
};

export default BankDeposit;