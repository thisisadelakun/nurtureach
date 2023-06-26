import React, { useState } from 'react';
import Step1 from '../../hooks/Step1';
import Step2 from '../../hooks/Step2';
import './ApplyForm.css'
import SuccessMessage from '../../hooks/SuccessMessage';
import { saveFormSubmission } from '../../hooks/firebase';
import { applicationForm } from '../../db/db2';

const ApplyForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);

    const handleNextStep = (data) => {
        setFormData((prevFormData) => ({ ...prevFormData, ...data }));
        setStep((prevStep) => prevStep + 1);
        window.scrollTo(0, 0);
    };

    const handlePreviousStep = () => {
        setStep((prevStep) => prevStep - 1);
        window.scrollTo(0, 0);
    };

    const handleSubmit = async (completeFormData) => {
        try {
            const { frontPicture, backPicture, ...formDataWithoutPictures } = completeFormData;

            const submissionData = {
                ...formDataWithoutPictures,
            };

            const { frontPictureURL, backPictureURL } = await saveFormSubmission(
                submissionData,
                frontPicture,
                backPicture
            );

            // Update the submissionData object with the picture URLs
            submissionData.frontPictureURL = frontPictureURL;
            submissionData.backPictureURL = backPictureURL;

            console.log('Form submission successful');
            setIsSubmitted(true);
            setIsSuccessMessageVisible(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrors({ submitError: 'An error occurred during form submission.' });
            console.error('Form submission error:', error);

        }
    };

    return (
        <div className='application' style={{ backgroundColor: "#fff" }}>
            <div className="application-header">
                <div className="application-header-img"></div>
                <div className="application-header-txt container">
                    <h1>{applicationForm.title}</h1>
                </div>
            </div>

            <div className="application-main-title container">

                <div>
                    <h6>{applicationForm.disclaimer}</h6>
                </div>
            </div>

            <div className="application-main container">

                {!isSubmitted && (
                    <div>
                        {step === 1 && <Step1 onNext={handleNextStep} />}
                        {step === 2 && (
                            <Step2
                                onBack={handlePreviousStep}
                                onSubmit={handleSubmit}
                                formData={formData}
                            />

                        )}
                        {errors.submitError && <div className="error">{errors.submitError}</div>}
                    </div>
                )}
                {isSubmitted && (
                    <React.Fragment>
                        <div className={`backdrop ${isSuccessMessageVisible ? 'active' : ''}`}></div>
                        <SuccessMessage />
                    </React.Fragment>
                )}
            </div>

        </div >
    );
};

export default ApplyForm;
