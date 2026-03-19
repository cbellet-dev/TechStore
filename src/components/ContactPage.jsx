import React, { useState } from 'react'
import NavModal from './NavModal'
import '../styles/ContactForm.css'


function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Simulate form submission (demo only)
        console.log('Form submitted:', formData)
        setSubmitted(true)

        // Reset after 3 seconds
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', message: '' })
        }, 3000)
    }
    return (
        <>
            <header>
                <div className='container'>
                    <h1>TechStore</h1>
                    <nav>
                        <NavModal />
                    </nav>
                </div>
            </header>

            <main>
                <div className="container" style={{
                    padding: '60px 20px',
                    maxWidth: '1200px'
                }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Contact Us</h2>
                    <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 20px' }}>
                        If you have any questions or need assistance, please feel free to contact us.
                    </p>

                    {submitted && (
                        <div className="success-message">
                            ✅ Message sent successfully! (Demo only - no real email sent)
                        </div>
                    )}

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Send Message</button>
                    </form>
                </div>
            </main>

            <footer>
                <div>
                    <p>© 2025 TechStore. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default ContactPage