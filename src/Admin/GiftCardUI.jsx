import React, { useEffect, useState } from 'react';
import { firestore, storage } from '../hooks/firebase';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './Admin.css';

const GiftCardUI = () => {
  const [submissions, setSubmissions] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const submissionsRef = firestore.collection('giftCard');
        const snapshot = await submissionsRef.get();
        const submissionData = [];

        snapshot.forEach((doc) => {
          const submission = {
            id: doc.id,
            ...doc.data()
          };

          submissionData.push(submission);
        });

        setSubmissions(submissionData);
      } catch (error) {
        console.error('Error fetching gift card form submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDownload = (url) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = getFileNameFromURL(url);
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    anchor.click();
  };

  const getFileNameFromURL = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  const handleDeleteConfirmation = (submissionId) => {
    setDeleteConfirmation(submissionId);
  };

  const handleDelete = async () => {
    try {
      const submissionId = deleteConfirmation;

      await firestore.collection('giftCard').doc(submissionId).delete();

      await storage.ref().child(`giftCardPictures/${submissionId}_frontImage.jpg`).delete();
      await storage.ref().child(`giftCardPictures/${submissionId}_backImage.jpg`).delete();
      await storage.ref().child(`giftCardPictures/${submissionId}_receipt.jpg`).delete();

      setSubmissions((prevSubmissions) =>
        prevSubmissions.filter((submission) => submission.id !== submissionId)
      );

      setDeleteSuccess(true);
      setDeleteConfirmation(null);

      console.log('Gift card form submission deleted successfully.');
    } catch (error) {
      console.error('Error deleting gift card form submission:', error);
    }
  };

  return (
    <div style={{ width: '100%', margin: '5rem auto', minHeight: '100vh' }}>
      <h1>Gift Card Submissions</h1>
      <div>
        <Table className="shadow" striped bordered hover responsive="lg" size="lg">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gift Card</th>
              <th>Card Number</th>
              <th>Front Image</th>
              <th>Back Image</th>
              <th>Receipts</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id}>
                <td>{submission.id}</td>
                <td>{submission.amount}</td>
                <td>{submission.name}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{submission.giftCard}</td>
                <td>{submission.cardNumber}</td>
                <td>
                  <img src={submission.frontImageURL} alt="Receipt" width={150} />
                  <button
                    className="shadow"
                    style={{
                      margin: '10px 10px',
                      background: 'seagreen',
                      width: 'fit-content',
                      padding: '0.2rem 0.5rem',
                      border: 'none',
                      color: '#fff',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDownload(submission.frontImageURL)}
                  >
                    Download
                  </button>
                </td>
                <td>
                  <img src={submission.backImageURL} alt="Receipt" width={150} />
                  <button
                    className="shadow"
                    style={{
                      margin: '10px 10px',
                      background: 'seagreen',
                      width: 'fit-content',
                      padding: '0.2rem 0.5rem',
                      border: 'none',
                      color: '#fff',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDownload(submission.backImageURL)}
                  >
                    Download
                  </button>
                </td>

                <td>
                  <img src={submission.receiptURL} alt="Receipt" width={150} />
                  <button
                    className="shadow"
                    style={{
                      margin: '10px 10px',
                      background: 'seagreen',
                      width: 'fit-content',
                      padding: '0.2rem 0.5rem',
                      border: 'none',
                      color: '#fff',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDownload(submission.receiptURL)}
                  >
                    Download
                  </button>
                </td>
                
                <td>
                  <button
                    className="shadow"
                    style={{
                      margin: '10px 10px',
                      background: 'red',
                      width: 'fit-content',
                      padding: '0.2rem 0.5rem',
                      border: 'none',
                      color: '#fff',
                      cursor: 'pointer'
                    }}
                    onClick={() => handleDeleteConfirmation(submission.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal show={!!deleteConfirmation} onHide={() => setDeleteConfirmation(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this submission? This action cannot be undone.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteConfirmation(null)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={deleteSuccess} onHide={() => setDeleteSuccess(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>The submission has been successfully deleted.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setDeleteSuccess(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default GiftCardUI;
