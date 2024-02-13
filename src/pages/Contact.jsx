import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Form validation (you can add more validation rules as needed)
        if (formData.name.trim() === '' || !formData.email.includes('@') || formData.message.trim() === '') {
            alert('Please fill out all fields correctly.');
            return;
        }

        try {
            // Send email via SendGrid
            await axios.post('https://api.sendgrid.com/v3/mail/send', {
                personalizations: [
                    {
                        to: [{ email: 'recipient@example.com' }], // Replace with your recipient email address
                        subject: 'New Message from Contact Form'
                    }
                ],
                from: { email: formData.email, name: formData.name },
                content: [
                    {
                        type: 'text/plain',
                        value: formData.message
                    }
                ]
            }, {
                headers: {
                    'Authorization': `Bearer YOUR_SENDGRID_API_KEY`, // Replace with your SendGrid API key
                    'Content-Type': 'application/json'
                }
            });

            // Update state to show submission success
            setSubmitted(true);
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
        <div className='background'>
            <div className="container mt-5">
                <h1>Contact Me</h1>
                {submitted ? (
                    <div className="alert alert-success">
                        Thank you for your message! I will get back to you soon.
                    </div>
                ) : (
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
                            <div className="diagonal-decoration"></div> {/* Diagonal decoration */}
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
                            <div className="diagonal-decoration"></div> {/* Diagonal decoration */}
                        </div>
                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
