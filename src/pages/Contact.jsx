import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();

        // Form validation (you can add more validation rules as needed)
        if (formData.name.trim() === '' || !formData.email.includes('@') || formData.message.trim() === '') {
            alert('Please fill out all fields correctly.');
            return;
        }

        // Simulate form submission (you can replace this with your actual form submission logic)
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
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
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Your Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="johndoe@example.com"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            placeholder="I'd love to hear from you!"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            )}
        </div>
    );
}

export default ContactForm;
