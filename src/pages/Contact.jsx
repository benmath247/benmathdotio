import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

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
            // Send data to Mailchimp
            const response = await axios.post(
                `https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members`,
                {
                    email_address: formData.email,
                    status: 'subscribed',
                    merge_fields: {
                        FNAME: formData.name,
                        LNAME: '',
                        MESSAGE: formData.message
                    }
                },
                {
                    headers: {
                        'Authorization': `Bearer bb93c31678f2f087e4b29d3fed53786c-us17`,
                        'Content-Type': 'application/json'
                    }
                }
            );

            if (response.status === 200) {
                setSubmitted(true);
            } else {
                throw new Error('Failed to subscribe');
            }
        } catch (error) {
            console.error('Error subscribing to Mailchimp:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    return (
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
                    <button type="submit" className="primary">Send Message</button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
