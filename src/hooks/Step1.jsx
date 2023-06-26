import React, { useState } from 'react';
import { applicationForm } from '../db/db2';
import './Form.css';

const Step1 = ({ onNext }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First Name is required';
    } else {
      delete newErrors.firstName; // Clear the error for firstName
    }

    if (!lastName) {
      newErrors.lastName = 'Last Name is required';
    } else {
      delete newErrors.lastName; // Clear the error for lastName
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    } else {
      delete newErrors.email; // Clear the error for email
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else {
      delete newErrors.phoneNumber; // Clear the error for phoneNumber
    }

    if (!addressLine1) {
      newErrors.addressLine1 = 'Address Line 1 is required';
    } else {
      delete newErrors.addressLine1; // Clear the error for addressLine1
    }

    if (!city) {
      newErrors.city = 'City is required';
    } else {
      delete newErrors.city; // Clear the error for city
    }

    if (!state) {
      newErrors.state = 'State is required';
    } else {
      delete newErrors.state; // Clear the error for state
    }

    if (!postalCode) {
      newErrors.postalCode = 'Postal / Zip Code is required';
    } else {
      delete newErrors.postalCode; // Clear the error for postalCode
    }

    if (!message) {
      newErrors.message = 'Message is required';
    } else {
      delete newErrors.postalCode; // Clear the error for postalCode
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };




  const handleNext = () => {
    const isValid = validateForm();

    if (isValid) {
      const formData = {
        firstName,
        lastName,
        middleName,
        email,
        phoneNumber,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        message,
      };

      onNext(formData);
      setErrors({});
    }
  };

  return (
    <div>
      <h2>{applicationForm.subtitle}</h2>
      <div className="steps-form-col">
        <div>
          <p>{applicationForm.content}</p>
        </div>
        <div className="steps-form-row">
          <div className="steps-form">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (errors.firstName) {
                  delete errors.firstName;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your first name"
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (errors.lastName) {
                  delete errors.lastName;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your last name"
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="middleName">Middle Name (optional):</label>
            <input
              type="text"
              id="middleName"
              value={middleName}
              onChange={(e) => setMiddleName(e.target.value)}
            />
            {errors.middleName && <div className="error">{errors.middleName}</div>}
          </div>
        </div>

        <div className="steps-form-row-flex">
          <div className="steps-form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) {
                  delete errors.email;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your email"
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
                if (errors.phoneNumber) {
                  delete errors.phoneNumber;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your phone number"
            />
            {errors.postalCode && <div className="error">{errors.phoneNumber}</div>}
          </div>
        </div>

        <div className="steps-form">
          <label htmlFor="addressLine1">Address Line 1:</label>
          <input
            type="text"
            id="addressLine1"
            value={addressLine1}
            onChange={(e) => {
              setAddressLine1(e.target.value);
              if (errors.addressLine1) {
                delete errors.addressLine1;
                setErrors({ ...errors });
              }
            }}
            placeholder="1234 Main Str"
          />
          {errors.addressLine1 && <div className="error">{errors.addressLine1}</div>}
        </div>

        <div className="steps-form">
          <label htmlFor="addressLine2">Address Line 2 (optional):</label>
          <input
            type="text"
            id="addressLine2"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Apartment, studio, or floor"
          />
          {errors.addressLine2 && <div className="error">{errors.addressLine2}</div>}
        </div>

        <div className="steps-form-row">
          <div className="steps-form">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                if (errors.city) {
                  delete errors.city;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your city"
            />
            {errors.city && <div className="error">{errors.city}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="state">State / Province:</label>
            <input
              type="text"
              id="state"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
                if (errors.state) {
                  delete errors.state;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your state"
            />
            {errors.state && <div className="error">{errors.state}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="postalCode">Postal / Zip Code:</label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => {
                setPostalCode(e.target.value);
                if (errors.postalCode) {
                  delete errors.postalCode;
                  setErrors({ ...errors });
                }
              }}
              placeholder="Enter your zip code"
            />
            {errors.postalCode && <div className="error">{errors.postalCode}</div>}
          </div>
        </div>

        <div className="steps-form">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value)
              if (errors.message) {
                delete errors.message;
                setErrors({ ...errors });
              }
            }}
            placeholder="Why do you need our help and how can we help you?"
            style={{ height: '150px', padding: "10px", }}

          />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>

      </div>
      <div className="next-btn-col">
        <button className='btn-next yellow-btn' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Step1;