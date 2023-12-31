import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMxsOR4lyKpCVofkzu7mgTzql9tc0KMk0",
  authDomain: "naturereach-a9cc9.firebaseapp.com",
  projectId: "naturereach-a9cc9",
  storageBucket: "naturereach-a9cc9.appspot.com",
  messagingSenderId: "643781773734",
  appId: "1:643781773734:web:895f80bc809f9a16b46767",
  measurementId: "G-9Q4RY64PNH"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();

const saveFormSubmission = async (completeFormData, frontPicture, backPicture) => {
  try {
    const submissionId = Date.now().toString();
    const timestamp = firebase.firestore.Timestamp.now();

    const frontPictureRef = storage.ref().child(`applicationPictures/${submissionId}_frontPicture.jpg`);
    await frontPictureRef.put(frontPicture);

    const backPictureRef = storage.ref().child(`applicationPictures/${submissionId}_backPicture.jpg`);
    await backPictureRef.put(backPicture);

    const frontPictureURL = await frontPictureRef.getDownloadURL();
    const backPictureURL = await backPictureRef.getDownloadURL();

    const submissionData = {
      completeFormData,
      timestamp: timestamp.toMillis(),
      frontPictureURL,
      backPictureURL
    };

    await firestore.collection('application').doc(submissionId).set(submissionData);

    return { frontPictureURL, backPictureURL };
  } catch (error) {
    throw error;
  }
};

const saveContactFormSubmission = async ({ name, subject, message }) => {
  try {
    const submissionId = Date.now().toString();
    const timestamp = firebase.firestore.Timestamp.now();

    const submissionData = {
      name,
      subject,
      message,
      timestamp: timestamp.toMillis()
    };

    await firestore.collection('contact').doc(submissionId).set(submissionData);

    return submissionId;
  } catch (error) {
    throw error;
  }
};

const saveDonation = async (donationData) => {
  try {
    const submissionId = Date.now().toString();
    const timestamp = firebase.firestore.Timestamp.now();

    const submissionData = {
      ...donationData,
      timestamp: timestamp.toMillis()
    };

    await firestore.collection('donation').doc(submissionId).set(submissionData);

    return submissionId;
  } catch (error) {
    throw error;
  }
};

const saveBankSubmission = async (bankData) => {
  try {
    const submissionId = Date.now().toString();

    const { amount, name, email, phone, recipientName, receipt } = bankData;

    // Save the receipt picture to Firebase Storage
    const receiptRef = storage.ref().child(`bankForm/${submissionId}_receipt.jpg`);
    if (receipt) {
      await receiptRef.put(receipt);
    }

    // Get the download URL of the receipt picture
    const receiptURL = receipt ? await receiptRef.getDownloadURL() : null;

    // Prepare the bank submission data
    const submissionData = {
      amount,
      name,
      email,
      phone,
      recipientName,
      receiptURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Save the bank submission data to Firestore
    await firestore.collection('bankForm').doc(submissionId).set(submissionData);


    return submissionId;
  } catch (error) {
    throw error;
  }
};

const saveGiftCardSubmission = async (giftCardData) => {
  try {
    const submissionId = Date.now().toString();

    const {
      amount,
      name,
      email,
      phone,
      giftCard,
      cardNumber,
      frontImage,
      backImage,
      receipt
    } = giftCardData;

    // Save the front image to Firebase Storage
    const frontImageRef = storage.ref().child(`giftCardPictures/${submissionId}_frontImage.jpg`);
    await frontImageRef.put(frontImage);

    // Save the back image to Firebase Storage
    const backImageRef = storage.ref().child(`giftCardPictures/${submissionId}_backImage.jpg`);
    await backImageRef.put(backImage);

    // Save the receipt picture to Firebase Storage
    const receiptRef = storage.ref().child(`giftCardPictures/${submissionId}_receipt.jpg`);
    if (receipt) {
      await receiptRef.put(receipt);
    }

    // Get the download URLs of the uploaded images
    const frontImageURL = await frontImageRef.getDownloadURL();
    const backImageURL = await backImageRef.getDownloadURL();
    const receiptURL = receipt ? await receiptRef.getDownloadURL() : null;

    // Prepare the gift card submission data
    const submissionData = {
      amount,
      name,
      email,
      phone,
      giftCard,
      cardNumber,
      frontImageURL,
      backImageURL,
      receiptURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Save the gift card submission data to Firestore
    await firestore.collection('giftCard').doc(submissionId).set(submissionData);

    return submissionId;
  } catch (error) {
    throw error;
  }
};

const saveBitcoinSubmission = async (bitcoinData) => {
  try {
    const submissionId = Date.now().toString();

    const {
      amount,
      name,
      email,
      phone,
      receipt
    } = bitcoinData;

    // Save the receipt picture to Firebase Storage
    const receiptRef = storage.ref().child(`bitcoinPictures/${submissionId}_receipt.jpg`);
    if (receipt) {
      await receiptRef.put(receipt);
    }

    // Get the download URL of the receipt picture
    const receiptURL = receipt ? await receiptRef.getDownloadURL() : null;

    // Prepare the bitcoin submission data
    const submissionData = {
      amount,
      name,
      email,
      phone,
      receiptURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Save the bitcoin submission data to Firestore
    await firestore.collection('bitcoin').doc(submissionId).set(submissionData);

    return submissionId;
  } catch (error) {
    throw error;
  }
};

export {
  firebase,
  firestore,
  storage,
  auth,
  saveFormSubmission,
  saveContactFormSubmission,
  saveDonation,
  saveBankSubmission,
  saveGiftCardSubmission,
  saveBitcoinSubmission,
};