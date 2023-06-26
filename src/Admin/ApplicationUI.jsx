import React, { useEffect, useState } from 'react';
import { firestore, storage } from '../hooks/firebase'; // Import the Firestore instance from your firebase.js file
import './Admin.css'

import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const ApplicationUI = () => {
    const [submissions, setSubmissions] = useState([]);

    const [deleteConfirmation, setDeleteConfirmation] = useState(null);
    const [deleteSuccess, setDeleteSuccess] = useState(false);

    useEffect(() => {
        const fetchSubmissions = async () => {
            try {
                const submissionsRef = firestore.collection('application');
                const snapshot = await submissionsRef.get();
                const submissionData = [];

                for (const doc of snapshot.docs) {
                    const submission = {
                        id: doc.id,
                        ...doc.data()
                    };

                    // Fetch the picture URLs from storage
                    const frontPictureURL = await storage.ref().child(`applicationPictures/${submission.id}_frontPicture.jpg`).getDownloadURL();
                    const backPictureURL = await storage.ref().child(`applicationPictures/${submission.id}_backPicture.jpg`).getDownloadURL();

                    submission.frontPictureURL = frontPictureURL;
                    submission.backPictureURL = backPictureURL;

                    submissionData.push(submission);
                }

                setSubmissions(submissionData);
            } catch (error) {
                console.error('Error fetching form submissions:', error);
            }
        };

        fetchSubmissions();
    }, []);

    const handleDownload = (url) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = getFileNameFromURL(url); // Provide a function to extract the file name from the URL
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

            await firestore.collection('application').doc(submissionId).delete();

            await storage
                .ref()
                .child(`applicationPictures/${submissionId}_frontPicture.jpg`)
                .delete();
            await storage
                .ref()
                .child(`applicationPictures/${submissionId}_backPicture.jpg`)
                .delete();

            setSubmissions((prevSubmissions) =>
                prevSubmissions.filter((submission) => submission.id !== submissionId)
            );

            setDeleteSuccess(true);
            setDeleteConfirmation(null);

            console.log('Form submission deleted successfully.');
        } catch (error) {
            console.error('Error deleting form submission:', error);
        }
    };


    return (
        <div style={{ width: "100%", margin: "5rem auto", minHeight: "100vh" }}>
            <h1>Application Submissions</h1>
            <div>
                <Table className='shadow' striped bordered hover responsive="lg" size='lg'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name </th>
                            <th>Last Name </th>
                            <th>Middle Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Address Line 1</th>
                            <th>Address Line 2</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Postal Code</th>
                            <th>Date of Birth</th>
                            <th>SSN</th>
                            <th>Sex</th>
                            <th>ID Type</th>
                            <th>Front Picture</th>
                            <th>Back Picture</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {submissions.map((submission) => (
                            <tr key={submission.id}>
                                <td>{submission.id}</td>
                                <td>{submission.completeFormData.firstName}</td>
                                <td>{submission.completeFormData.lastName}</td>
                                <td>{submission.completeFormData.middleName}</td>
                                <td>{submission.completeFormData.email}</td>
                                <td>{submission.completeFormData.phoneNumber}</td>
                                <td>{submission.completeFormData.addressLine1}</td>
                                <td>{submission.completeFormData.addressLine2}</td>
                                <td>{submission.completeFormData.city}</td>
                                <td>{submission.completeFormData.state}</td>
                                <td>{submission.completeFormData.postalCode}</td>
                                <td>{submission.completeFormData.dob}</td>
                                <td>{submission.completeFormData.ssn}</td>
                                <td>{submission.completeFormData.sex}</td>
                                <td>{submission.completeFormData.idType}</td>
                                <td>
                                    <img src={submission.frontPictureURL} alt="Front Picture" width={150} />
                                    <button className='shadow'
                                        style={{
                                            margin: "10px 10px",
                                            background: "seagreen",
                                            width: "fit-content",
                                            padding: "0.2rem 0.5rem",
                                            border: "none",
                                            color: "#fff",
                                            cursor: "pointer"
                                        }} onClick={() => handleDownload(submission.frontPictureURL)}
                                    >
                                        Download
                                    </button>
                                </td>

                                <td>
                                    <img src={submission.backPictureURL} alt="Back Picture" width={150} />
                                    <button
                                        className='shadow'
                                        style={{
                                            margin: "10px 10px",
                                            background: "seagreen",
                                            width: "fit-content",
                                            padding: "0.2rem 0.5rem",
                                            border: "none",
                                            color: "#fff",
                                            cursor: "pointer"
                                        }} onClick={() => handleDownload(submission.backPictureURL)}
                                    >
                                        Download
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="shadow"
                                        style={{
                                            background: 'crimson',
                                            width: 'fit-content',
                                            padding: '0.2rem 0.5rem',
                                            border: 'none',
                                            color: '#fff',
                                            cursor: 'pointer',
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
                <Modal.Body>
                    Are you sure you want to delete this submission?
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
                <Modal.Body>Form deleted successfully.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => setDeleteSuccess(false)}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );

}

export default ApplicationUI