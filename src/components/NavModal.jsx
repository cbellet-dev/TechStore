import React, { useState } from 'react'
import '../styles/NavModal.css'
import { Link } from 'react-router-dom'


function NavModal() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button
                className={`hamburger-btn ${isOpen ? 'menu-open' : ''}`}
                onClick={toggleMenu}
                aria-label="Menu de navegación"
            >
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 37 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isOpen ? 'open' : ''}
                >
                    <line
                        x1="6"
                        y1="10"
                        x2="26"
                        y2="10"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="line line-top"
                    />
                    <line
                        x1="6"
                        y1="16"
                        x2="26"
                        y2="16"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="line line-middle"
                    />
                    <line
                        x1="6"
                        y1="22"
                        x2="26"
                        y2="22"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="line line-bottom"
                    />
                </svg>
            </button>

            <div className={`nav-modal ${isOpen ? 'active' : ''}`}>
                <button
                    className="close-menu-btn"
                    onClick={toggleMenu}
                    aria-label="Cerrar menú"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                </button>

                <nav className="nav-content">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to='/products' onClick={toggleMenu}>Products</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </nav>
            </div>
        </>
    )
}


export default NavModal
