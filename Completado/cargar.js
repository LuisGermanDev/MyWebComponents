import {pructs} from './ProductCard'{
    const productContainer = document.getElementById('products');
    products.forEach(product => {
        const productCard = document.createElement('product-card');
        productCard.setAttribute('title',product.title);
        productCard.setAttribute('description',product.description);
        productCard.setAttribute('price',product.price);
        productCard.setAttribute('image',product.image);
        productCard.appendChild(productCard);

    });
}