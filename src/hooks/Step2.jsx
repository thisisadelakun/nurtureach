import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import './Form.css'

const Step2 = ({ onBack, onSubmit, formData }) => {

  const [dobMonth, setDobMonth] = useState('');
  const [dobDay, setDobDay] = useState('');
  const [dobYear, setDobYear] = useState('');
  const [ssn, setSsn] = useState('');
  const [sex, setSex] = useState('');
  const [idType, setIdType] = useState('');
  const [frontPicture, setFrontPicture] = useState(null);
  const [backPicture, setBackPicture] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);



  const validateForm = () => {
    const errors = {};

    if (!dobMonth || !dobDay || !dobYear) {
      errors.dob = 'Date of Birth is required';
    }

    if (!ssn) {
      errors.ssn = 'SSN is required';
    } else if (!isValidSsn(ssn)) {
      errors.ssn = 'Invalid SSN format';
    }

    if (!sex) {
      errors.sex = 'Sex is required';
    }

    if (!idType) {
      errors.idType = 'ID Type is required';
    }

    if (!frontPicture) {
      errors.frontPicture = 'Front picture of ID is required';
    }

    if (!backPicture) {
      errors.backPicture = 'Back picture of ID is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidSsn = (value) => {
    const ssnRegex = /^[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
    return ssnRegex.test(value);
  };

  // Function to generate options for days
  const generateDayOptions = () => {
    const days = Array.from({ length: 31 }, (_, index) => index + 1);
    return days.map((day) => (
      <option value={day} key={day}>
        {day}
      </option>
    ));
  };

  // Function to generate options for months
  const generateMonthOptions = () => {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months.map((month, index) => (
      <option value={index + 1} key={index + 1}>{month}</option>
    ));
  };

  // Function to generate options for years
  const generateYearOptions = () => {
    const options = [];
    for (let i = 1900; i <= 2023; i++) {
      options.push(<option value={i} key={i}>{i}</option>);
    }
    return options;
  };

  const handleBack = () => {
    onBack();
  };

  const handleSubmit = async () => {
    const isValid = validateForm();

    if (isValid) {
      setIsSubmitting(true);

      const completeFormData = {
        ...formData, // Access formData from props
        dob: `${dobMonth}/${dobDay}/${dobYear}`,
        ssn,
        sex,
        idType,
        frontPicture,
        backPicture,
      };

      await onSubmit(completeFormData);

      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Additional Information</h2>
      <div className="steps-form-col">
        <label htmlFor='birthdate'>Date of Birth:</label>
        <div className="steps-form-row">
          <div className="steps-form">
            <div className="custom-select">
              <select
                id='dobMonth'
                value={dobMonth}
                onChange={(e) => setDobMonth(e.target.value)}
              >
                <option value="">-- Select Month --</option>
                {generateMonthOptions()}
              </select>
              <div className="custom-select-icon">
                <RiArrowDropDownLine className="react-icons" />
              </div>
            </div>
          </div>
          <div className="steps-form">
            <div className="custom-select">
              <select
                id='dobDay'
                value={dobDay}
                onChange={(e) => setDobDay(e.target.value)}
              >
                <option value="">-- Select Day --</option>
                {generateDayOptions()}
              </select>
              <div className="custom-select-icon">
                <RiArrowDropDownLine className="react-icons" />
              </div>
            </div>
          </div>

          <div className="steps-form">
            <div className="custom-select">
              <select
                id='dobYear'
                value={dobYear}
                onChange={(e) => setDobYear(e.target.value)}
              >
                <option value="">-- Select Year --</option>
                {generateYearOptions()}
              </select>
              <div className="custom-select-icon">
                <RiArrowDropDownLine className="react-icons" />
              </div>
            </div>
          </div>
          {errors.dob && <div className="error">{errors.dob}</div>}
        </div>

        <div className="steps-form-row">
          <div className="steps-form">
            <label htmlFor="ssn">SSN:</label>
            <input
              type="text"
              id="ssn"
              value={ssn}
              onChange={(e) => setSsn(e.target.value)}
              placeholder='000-00-0000'
            />
            {errors.ssn && <div className="error">{errors.ssn}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="sex">Sex:</label>
            <div className="custom-select">
              <select
                id="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">-- Select Sex --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="custom-select-icon">
                <RiArrowDropDownLine className='react-icons' />
              </div>
            </div>
            {errors.sex && <div className="error">{errors.sex}</div>}
          </div>

          <div className="steps-form">
            <label htmlFor="idType">ID Type:</label>
            <div className="custom-select">
              <select
                id="idType"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option value="">-- Select ID Type --</option>
                <option value="stateID">State ID</option>
                <option value="driversLicense">Driver's License</option>
              </select>
              <div className="custom-select-icon">
                <RiArrowDropDownLine className='react-icons' />
              </div>
            </div>
            {errors.idType && <div className="error">{errors.idType}</div>}
          </div>
        </div>


        <div className='upload-files'>
          <label>Upload Front Picture of ID:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFrontPicture(e.target.files[0])}
          />
          {errors.frontPicture && <div className="error">{errors.frontPicture}</div>}
          {frontPicture && (
            <div className='preview'>
              <p>Preview:</p>
              <img src={URL.createObjectURL(frontPicture)} alt="Front ID" />
            </div>
          )}
        </div>

        <div>
          <label>Upload Back Picture of ID:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setBackPicture(e.target.files[0])}
          />
          {errors.backPicture && <div className="error">{errors.backPicture}</div>}
          {backPicture && (
            <div className='preview'>
              <p>Preview:</p>
              <img src={URL.createObjectURL(backPicture)} alt="Back ID" />
            </div>
          )}
        </div>


      </div>
      <div className="step2-btn-col">
        <button className='btn-prev yellow-btn' onClick={handleBack}>Back</button>
        <button className='btn-submit' onClick={handleSubmit}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default Step2;
