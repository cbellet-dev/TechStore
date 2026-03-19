import React from 'react'
import NavModal from './NavModal'
import '../styles/AboutPage.css'


function AboutPage() {
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
                    <div className="about-hero">
                        <h2>About TechStore</h2>
                        <p>
                            A modern e-commerce demo showcasing industrial design principles,
                            responsive layouts, and smooth user experiences. Built with React
                            and modern web technologies.
                        </p>
                    </div>

                    <div className="features-grid">
                        <div className="feature-card">
                            <span className="feature-icon">🎨</span>
                            <h3>Industrial Design</h3>
                            <p>
                                Bold, geometric layouts with a distinctive industrial aesthetic
                                featuring solid borders and clean typography.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">📱</span>
                            <h3>Fully Responsive</h3>
                            <p>
                                Seamless experience across all devices with adaptive navigation
                                and optimized layouts for mobile, tablet, and desktop.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">⚡</span>
                            <h3>Fast & Smooth</h3>
                            <p>
                                Optimized performance with smooth animations, infinite scrolling
                                product carousel, and instant page transitions.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">🧩</span>
                            <h3>Component-Based</h3>
                            <p>
                                Modular architecture with reusable components, centralized data
                                management, and clean separation of concerns.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">🎯</span>
                            <h3>User-Focused</h3>
                            <p>
                                Intuitive navigation, accessible forms with validation, and
                                clear visual feedback for all user interactions.
                            </p>
                        </div>

                        <div className="feature-card">
                            <span className="feature-icon">🔧</span>
                            <h3>Best Practices</h3>
                            <p>
                                Following modern web standards with semantic HTML, CSS custom
                                properties, and professional code organization.
                            </p>
                        </div>
                    </div>

                    <div className="tech-stack">
                        <h3>Built With</h3>
                        <div className="tech-list">
                            <span className="tech-badge">React</span>
                            <span className="tech-badge">Vite</span>
                            <span className="tech-badge">React Router</span>
                            <span className="tech-badge">CSS3</span>
                            <span className="tech-badge">JavaScript ES6+</span>
                            <span className="tech-badge">Responsive Design</span>
                        </div>
                    </div>

                    <div className="about-hero" style={{ marginTop: '60px' }}>
                        <h3>Portfolio Project</h3>
                        <p>
                            This is a demonstration project showcasing frontend development skills
                            including component architecture, state management, routing, responsive
                            design, and modern CSS techniques. No real transactions are processed.
                        </p>
                    </div>
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

export default AboutPage