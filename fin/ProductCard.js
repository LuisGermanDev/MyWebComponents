class ProductCard extends HTMLElement {
  constructor() {
     // Línea 4: Llamada al constructor de la clase padre.
    super();

    // Línea 7: Creación del Shadow DOM con modo 'open' para permitir el acceso desde el exterior.
    const shadow = this.attachShadow({ mode: 'open' });
    
    // Líneas 10-13: Obtiene los atributos personalizados del elemento.
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const price = this.getAttribute('price');
    const image = this.getAttribute('image');

    // Líneas 16-22: Creación de elementos HTML para representar la tarjeta de producto.
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('product-card');

    const imageElement = document.createElement('img');
    imageElement.src = image;
    imageElement.alt = 'Producto';
    cardContainer.appendChild(imageElement);

    const titleElement = document.createElement('h2');
    titleElement.classList.add('product-title');
    titleElement.textContent = title;
    cardContainer.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('product-description');
    descriptionElement.textContent = description;
    cardContainer.appendChild(descriptionElement);

    const priceElement = document.createElement('p');
    priceElement.classList.add('product-price');
    priceElement.textContent = price;
    cardContainer.appendChild(priceElement);

    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('add-to-cart-btn');
    addToCartButton.textContent = 'Añadir al carrito';
    cardContainer.appendChild(addToCartButton);

    // Líneas 44-54: Creación del contador y su lógica de incremento al presionar el botón "Añadir al carrito".
    const counterElement = document.createElement('p');
    let count = 0;
    counterElement.textContent = `Cantidad: ${count}`;
    cardContainer.appendChild(counterElement);

    addToCartButton.addEventListener('click', () => {
      count++;
      counterElement.textContent = `Cantidad: ${count}`;
    });
    // Línea 44: Agrega el contenedor de la tarjeta de producto al Shadow DOM.
    shadow.appendChild(cardContainer);

    // Líneas 57 en adelante: Crea un elemento <link> para importar los estilos CSS externos.
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'estilos.css');
    shadow.appendChild(link);
  }
}

customElements.define('product-card', ProductCard);