import React, { useEffect, useState } from 'react';

import './Admin.css'

import { firestore, storage } from '../hooks/firebase';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const BankUI = () => {
    const [submissions, setSubmissions] = useState([]);
    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const submissionsRef = firestore.collection('bankForm');
                const snapshot = await submissionsRef.get();
                const submissionData = [];

                for (const doc of snapshot.docs) {
                    const submission = {
                        id: doc.id,
                        ...doc.data()
                    };

                    submissionData.push(submission);
                }

                setSubmissions(submissionData);
            } catch (error) {
                console.error('Error fetching bank form submissions:', error);
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

            await firestore.collection('bankForm').doc(submissionId).delete();

            await storage.ref().child(`bankForm/${submissionId}_receipt.jpg`).delete();

            setSubmissions((prevSubmissions) =>
                prevSubmissions.filter((submission) => submission.id !== submissionId)
            );

            setDeleteSuccess(true);
            setDeleteConfirmation(null);

            console.log('Bank form submission deleted successfully.');
        } catch (error) {
            console.error('Error deleting bank form submission:', error);
        }
    };

    return (
        <div style={{ width: '100%', margin: '5rem auto', minHeight: '100vh' }}>
            <h1>Bank Submissions</h1>
            <div>
                <Table className='shadow' striped bordered hover responsive='lg' size='lg'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Amount</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Receipt</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {submissions.map((submission) => (
                            <tr key={submission.id}>
                                <td>{submission.id}</td>
                                <td>{submission.completeFormData.amount}</td>
                                <td>{submission.completeFormData.name}</td>
                                <td>{submission.completeFormData.email}</td>
                                <td>{submission.completeFormData.phone}</td>
                                <td>
                                    <img src={submission.receiptURL} alt='Receipt' width={150} />
                                    <button
                                        className='shadow'
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
                                        className='shadow'
                                        style={{
                                            background: 'crimson',
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
            <Modal show={deleteConfirmation !== null} onHide={() => setDeleteConfirmation(null)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this submission?</Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={() => setDeleteConfirmation(null)}>
                        Cancel
                    </Button>
                    <Button variant='danger' onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={deleteSuccess} onHide={() => setDeleteSuccess(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bank form submission deleted successfully.</Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={() => setDeleteSuccess(false)}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BankUI;
