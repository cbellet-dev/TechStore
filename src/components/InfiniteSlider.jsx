import React from 'react';
import '../styles/Slider.css';
import { PRODUCTS } from '../data';



const IMAGES = PRODUCTS;
const InfiniteSlider = () => {
    return (
        <div className="slider-container" >
            <div className="slider-track" >
                {/* Renderizamos las imágenes 3 veces para scroll infinito sin saltos */}
                {Array.from({ length: 3 }).map((_, setIndex) => (
                    IMAGES.map((image, imgIndex) => (
                        <div className="slide" key={`set-${setIndex}-img-${imgIndex}`}>
                            <img
                                src={image.image}
                                alt={image.name}
                                loading="eager"
                            />
                            <div className="slide-content">
                                <h3>{image.name}</h3>
                                <p>Price: {image.price}</p>
                                <button className="btn btn-secondary">Add to Cart</button>
                            </div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;