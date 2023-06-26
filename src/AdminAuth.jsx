import React, { useState, useEffect } from 'react';
import AdminUI from './Admin/AdminUI';
import { firebase } from './hooks/firebase';
import Form from 'react-bootstrap/Form';


const AdminAuths = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            setIsAdminAuthenticated(true);
        } catch (error) {
            // console.error('Error logging in:', error);
            setErrorMessage('There is no user record corresponding to this identifier.');
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            setIsAdminAuthenticated(true);
        } catch (error) {
            // console.error('Error signing up:', error);
            // Handle the error and display an error message if needed
        }
    };

    const handleLogOut = async () => {
        try {
            await firebase.auth().signOut();
            setIsAdminAuthenticated(false);
            setEmail('');
            setPassword('');
        } catch (error) {
            // console.error('Error logging out:', error);
            // Handle the error and display an error message if needed
        }
    };

    const handleForgotPassword = async () => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            // console.log('Password reset email sent.');
            setShowSuccessMessage(true);
            setErrorMessage('');
        } catch (error) {
            // console.error('Error sending password reset email:', error);
            if (error.code === 'auth/user-not-found') {
                setErrorMessage('The email is not registered. Please enter a valid email address.');
            } else {
                setErrorMessage('Error sending password reset email. Please try again later.');
            }
            setShowSuccessMessage(false);
        }
    };


    const toggleForm = () => {
        setShowPassword(false);
        setShowSignUpForm((prevState) => !prevState);
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User is authenticated
                setIsAdminAuthenticated(true);
            } else {
                // User is not authenticated
                setIsAdminAuthenticated(false);
            }
        });

        // Clean up the subscription when the component is unmounted
        return () => {
            unsubscribe();
        };
    }, []);


    if (!isAdminAuthenticated) {
        return (
            <div style={{ paddingTop: "12rem", paddingBottom: "3rem", minHeight: "100vh", background: "mintcream" }}>
                <center className='container' style={{ margin: "auto", textAlign: "left" }}>
                    <h1
                        style={{
                            fontFamily: `'Montserrat', sans-serif`,
                            textAlign: "center",
                            color: "#006588",
                        }}
                    >
                        Welcome Admin!
                    </h1>
                    {errorMessage && <div className="error">{errorMessage}</div>}
                    {showSignUpForm ? (
                        <Form onSubmit={handleSignUp}>
                            <h2 style={{
                                fontFamily: `'Kanit', sans-serif`,
                                textAlign: "center",
                                color: "#006588",
                            }}
                            >
                                Sign Up Here,
                            </h2>

                            <div>
                                <label
                                    style={{
                                        fontFamily: `'Kanit', sans-serif`,
                                        textAlign: "left",
                                        color: "#006588",
                                        marginBottom: "5px"
                                    }}
                                    htmlFor="signup-email"
                                >Email:
                                </label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label
                                    style={{
                                        fontFamily: `'Kanit', sans-serif`,
                                        textAlign: "left",
                                        color: "#006588",
                                        marginBottom: "5px"
                                    }}
                                    htmlFor="signup-password"
                                >
                                    Password:
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="signup-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className='shadow'
                                    style={{
                                        color: "#fff",
                                        padding: "0.3rem 0.7rem", border: "none",
                                        background: "skyblue",
                                    }}
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide Password' : 'Show Password'}
                                </button>
                            </div>
                            <button
                                className='shadow'
                                style={{
                                    color: "#fff",
                                    padding: "0.4rem 1rem", borderRadius: "5px", width: "50%", margin: "2rem auto",
                                    border: "none", background: "seagreen", display: "flex", textAlign: "center", justifyContent: "center"
                                }}
                                type="submit"
                            >
                                Sign Up
                            </button>
                            <p style={{ textAlign: "center" }}>
                                Already have an account?{' '}
                                <button
                                    style={{
                                        color: "seagreen", padding: "0.3rem 0.7rem",
                                        border: "none", background: "none",
                                        fontStyle: "italic"
                                    }}
                                    type="button" onClick={toggleForm}
                                >
                                    Login
                                </button>
                            </p>
                        </Form>
                    ) : (

                        <Form onSubmit={handleLogin}>
                            <h2 style={{
                                fontFamily: `'Kanit', sans-serif`,
                                textAlign: "center",
                                color: "#006588",
                            }}
                            >
                                Login Here,
                            </h2>
                            <div style={{
                                marginBottom: "1rem"
                            }}>
                                <label
                                    style={{
                                        fontFamily: `'Kanit', sans-serif`,
                                        textAlign: "left",
                                        color: "#006588",
                                        marginBottom: "5px"
                                    }}
                                    htmlFor="email"
                                >
                                    Email:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div style={{
                                marginBottom: "2rem"
                            }}>
                                <label
                                    style={{
                                        fontFamily: `'Kanit', sans-serif`,
                                        textAlign: "left",
                                        color: "#006588",
                                        marginBottom: "5px"
                                    }}
                                    htmlFor="password"
                                >
                                    Password:
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className='shadow'
                                    style={{
                                        color: "#fff",
                                        padding: "0.3rem 0.7rem", border: "none",
                                        background: "skyblue",
                                    }}
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? 'Hide Password' : 'Show Password'}
                                </button>
                            </div>
                            <button className='shadow'
                                style={{
                                    color: "#fff",
                                    padding: "0.4rem 1rem", borderRadius: "5px", width: "50%", margin: "2rem auto",
                                    border: "none", background: "seagreen", display: "flex", textAlign: "center", justifyContent: "center"
                                }}
                                type="submit"
                            >
                                Login
                            </button>
                            <p>
                                <button
                                    style={{
                                        color: "seagreen",
                                        padding: "0.3rem 0.7rem",
                                        border: "none", background: ""
                                    }}
                                    type="check"
                                    onClick={handleForgotPassword}
                                >
                                    Forgot Password?
                                </button>
                                {showSuccessMessage && (
                                    <span className="success">Password reset link sent successfully!</span>
                                )}
                                {errorMessage && <span className="error">{errorMessage}</span>}
                            </p>
                            <p style={{ textAlign: "center" }}>
                                Don't have an account?{' '}
                                <button
                                    style={{
                                        color: "seagreen", padding: "0.3rem 0.7rem",
                                        border: "none", background: "none",
                                        fontStyle: "italic"
                                    }}
                                    type="button"
                                    onClick={toggleForm}
                                >
                                    Sign up
                                </button>
                            </p>
                        </Form>
                    )}
                </center>
            </div>
        );
    } else {

        return (
            <div style={{ width: "90%", margin: "9rem auto", minHeight: "100vh", color: "#006588" }}>
                <h1>YOU ARE IN</h1>

                <h3>How to use</h3>



                <ol>
                    <li>Download button: use this button to download the photo ID.</li>
                    <li>Delete button: use this button to delete unwnted or already use form</li>
                    <li>scroll horizontally if you are unable to see the full form</li>
                    <li>Please make sure you logout when not in use. Thanks and enjoy! </li> <br />
                </ol>

                <button className='shadow' style={{ color: "red", padding: "0.2rem 0.5rem" }} onClick={handleLogOut}>Logout</button>
                <AdminUI />
            </div>
        );
    }
};

export default AdminAuths;