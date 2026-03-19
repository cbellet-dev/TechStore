import React from 'react'
import NavModal from './NavModal'
import { PRODUCTS } from '../data'


function ProductsPage() {
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
                    <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Products</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '30px'
                    }}>
                        {PRODUCTS.map(product => (
                            <div className="slide" key={product.id}>
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    loading="eager"
                                />
                                <div className="slide-content">
                                    <h3>{product.name}</h3>
                                    <p>Price: {product.price}</p>
                                    <button className="btn btn-secondary">Add to Cart</button>
                                </div>
                            </div>
                        ))}
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

export default ProductsPage