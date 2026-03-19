import React from 'react'
import { Link } from 'react-router-dom'
import InfiniteSlider from './InfiniteSlider'
import NavModal from './NavModal'
import '../styles/LandingPage.css'


function LandingPage() {
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
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>
                            Premium Tech Products
                            <span className="highlight">At Your Fingertips</span>
                        </h1>
                        <p>
                            Discover the latest in technology with our curated selection
                            of premium gadgets and electronics. Quality guaranteed.
                        </p>
                        <div className="hero-buttons">
                            <Link to='/products' className="btn btn-primary">
                                Browse Products
                            </Link>
                            <Link to='/about' className="btn btn-secondary">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section">
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-number">10K+</div>
                            <div className="stat-label">Products</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">5K+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">99%</div>
                            <div className="stat-label">Satisfaction</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <h2>Why Choose TechStore?</h2>
                    <div className="features-grid">
                        <div className="feature-box">
                            <span className="feature-icon">🚚</span>
                            <h3>Free Shipping</h3>
                            <p>
                                Fast and free delivery on all orders.
                                Get your tech delivered to your doorstep.
                            </p>
                        </div>
                        <div className="feature-box">
                            <span className="feature-icon">🔒</span>
                            <h3>Secure Payments</h3>
                            <p>
                                Your transactions are protected with
                                industry-standard encryption.
                            </p>
                        </div>
                        <div className="feature-box">
                            <span className="feature-icon">⭐</span>
                            <h3>Premium Quality</h3>
                            <p>
                                Only the best products from trusted
                                manufacturers and brands.
                            </p>
                        </div>
                        <div className="feature-box">
                            <span className="feature-icon">💬</span>
                            <h3>24/7 Support</h3>
                            <p>
                                Our customer service team is always
                                ready to help you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Product Showcase */}
                <section className="section">
                    <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                        <h2>Featured Products</h2>
                        <p className="text-secondary">Check out our latest and most popular items</p>
                    </div>
                    <InfiniteSlider />
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <h2>Ready to Upgrade Your Tech?</h2>
                    <p>
                        Join thousands of satisfied customers and find your perfect gadget today.
                    </p>
                    <Link to='/products' className="btn btn-primary">
                        Shop Now
                    </Link>
                </section>
            </main>

            <footer>
                <div>
                    <p>© 2025 TechStore. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default LandingPage