const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const cartItems = document.getElementById('cart-items');
const totalSpan = document.getElementById('total');
const cartDiv = document.getElementById('cart');

// Mostrar carrito solo si existen los elementos necesarios
function mostrarCarrito() {
    if (!cartItems || !totalSpan || !cartDiv) return;

    cartItems.innerHTML = '';
    let total = 0;

    if (carrito.length === 0) {
        cartItems.innerHTML = '<li>Tu carrito está vacío.</li>';
        totalSpan.textContent = '0';
        return;
    }

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${item.nombre}</h3>
            <img src="${item.imagen}" alt="${item.nombre}" class="producto-img" />
            <p>Precio: $${item.precio.toFixed(2)}</p>
        `;
        cartItems.appendChild(li);
        total += item.precio;
    });

    totalSpan.textContent = total.toFixed(2);

    // Verificamos si ya existe el botón para no duplicarlo
    if (!document.querySelector('.boton-comprar')) {
        const botonComprar = document.createElement('button');
        botonComprar.textContent = 'Comprar';
        botonComprar.onclick = () => {
            alert('¡Compra realizada con éxito!');
            localStorage.removeItem('carrito');
            location.reload(); // recarga la página para vaciar el carrito
        };
        botonComprar.classList.add('boton-comprar');
        cartDiv.appendChild(botonComprar);
    }
}

mostrarCarrito();