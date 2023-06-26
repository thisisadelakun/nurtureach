import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { saveContactFormSubmission } from '../../hooks/firebase';
import { Form } from 'react-bootstrap';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);

    const handleShowSuccessModal = () => {
        setShowSuccessModal(true);
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
    };

    const handleShowErrorModal = () => {
        setShowErrorModal(true);
    };

    const handleCloseErrorModal = () => {
        setShowErrorModal(false);
    };



    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === 'name') {
            setName(value);
        } else if (name === 'subject') {
            setSubject(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await saveContactFormSubmission({ name, subject, message });

            setName('');
            setSubject('');
            setMessage('');
            handleShowSuccessModal(); // Display success modal
        } catch (error) {
            // console.error('Error submitting form:', error);
            handleShowErrorModal();
        }
    };


    const email = 'info@nurturereach.org';


    return (
        <div className='impact'>
            <div className="impact-header">
                <div>
                    <div className="impact-header-img"></div>
                    <div className="impact-header-txt container shadow">
                        <h1>Contact Us</h1>
                    </div>
                </div>
            </div>

            <div className="impact-main-title mb-3">
                <div>
                    <h3>Feel free to reach out to us with any questions or feedback.</h3>
                </div>
            </div>

            <div className="m-3" style={{ fontFamily: `'Montserrat', sans-serif`, color: "#006588", }}>
                <div className="shadow steps-form-col">
                    <div className=" mb-4">
                        <h4>Email</h4>
                        <p>{email}</p>
                    </div>

                    <h4 className='mb-5'>Send us a Message</h4>
                    <Form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <Form.Group style={{ width: "100%", marginBottom: "1.5rem" }} controlId="name">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="subject" className="form-label">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="form-control"
                                value={subject}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control"
                                value={message}
                                onChange={handleInputChange}
                                rows="4"
                            />
                        </div>

                        <button type="submit" className="btn"  style={{backgroundColor:"#006588", color:"#fff"}}>Send</button>
                    </Form>

                </div>
            </div>

            <Modal show={showSuccessModal} onHide={handleCloseSuccessModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your message has been sent successfully. We will get back to you shortly.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSuccessModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showErrorModal} onHide={handleCloseErrorModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Message sending failed. Please try again later.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseErrorModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>



        </div>
    )
}

export default Contact