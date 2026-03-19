import headphones from '../assets/headphones.png';
import smartphone from '../assets/smartphone.png';
import laptop from '../assets/laptop.png';
import smartwatch from '../assets/smartwatch.png';
import earbuds from '../assets/earbuds.png';
import productsData from './products.json';

// Mapeo de nombres de imágenes a imports reales
const imageMap = {
    'headphones.png': headphones,
    'smartphone.png': smartphone,
    'laptop.png': laptop,
    'smartwatch.png': smartwatch,
    'earbuds.png': earbuds
};

// Combinar datos JSON con imágenes importadas
export const PRODUCTS = productsData.map(product => ({
    ...product,
    image: imageMap[product.image]
}));

// También exportar las imágenes individuales por si se necesitan
export { headphones, smartphone, laptop, smartwatch, earbuds };
