import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css'
import Footer from '../components/Footer';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVariant, setAlertVariant] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation (you can add more validation rules as needed)
        if (formData.name.trim() === '' || !formData.email.includes('@') || formData.message.trim() === '') {
            setAlertMessage('Please fill out all fields correctly.');
            setAlertVariant('danger');
            setShowAlert(true);
            return;
        }

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_USER_ID
        ).then((result) => {
            setAlertMessage('Message sent successfully!');
            setAlertVariant('success');
            setShowAlert(true);
            setSubmitted(true);
        }, (error) => {
            setAlertMessage('An error occurred. Please try again.');
            setAlertVariant('danger');
            setShowAlert(true);
        });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className="container mt-5">
            <h1>Contact Me</h1>
            {showAlert && <div className={`alert alert-${alertVariant}`}>{alertMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3 position-relative">
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <div className="diagonal-decoration"></div> {/* Diagonal decoration */}
                </div>
                <div className="mb-3 position-relative">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <div className="diagonal-decoration"></div>
                </div>
                <div className="mb-3 position-relative">
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Message"
                        required
                    ></textarea>
                    <div className="diagonal-decoration"></div>
                </div>
                <button type="submit" className="primary">Send Message</button>
            </form>
            <Footer hideForm={true} />
        </div>
    );
}

export default ContactForm;
