import React from 'react'
import { Link } from 'react-router-dom'
import NavModal from './NavModal'
import '../styles/NotFound.css'

function NotFoundPage() {
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
                <div className="not-found-container">
                    <div className="not-found-content">
                        <h1 className="not-found-title">404</h1>
                        <h2 className="not-found-subtitle">Page Not Found</h2>
                        <p className="not-found-message">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        <Link to="/" className="btn btn-primary">
                            Back to Home
                        </Link>
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

export default NotFoundPage
