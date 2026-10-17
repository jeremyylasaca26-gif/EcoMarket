const productos = [
    { id: 1, nombre: 'Fresa', precio: 1.5, categoria: 'Frutas', imagen: 'frutas/fresa.jpg', descripcion: 'Fruta dulce y jugosa ideal para postres.' },
    { id: 2, nombre: 'Mango', precio: 2.0, categoria: 'Frutas', imagen: 'frutas/mango.jpg', descripcion: 'Tropical y delicioso, perfecto para jugos.' },
    { id: 3, nombre: 'Uva', precio: 2.5, categoria: 'Frutas', imagen: 'frutas/uva.jpg', descripcion: 'Pequeñas, dulces y perfectas como snack.' },
    { id: 4, nombre: 'Manzana', precio: 1.5, categoria: 'Frutas', imagen: 'frutas/manzana.jpg', descripcion: 'Crujiente y refrescante, ideal para cualquier hora.' },
    { id: 5, nombre: 'Naranja', precio: 1.2, categoria: 'Frutas', imagen: 'frutas/naranja.jpg', descripcion: 'Rica en vitamina C y jugosa.' },
    { id: 6, nombre: 'Pera', precio: 1.8, categoria: 'Frutas', imagen: 'frutas/pera.jpg', descripcion: 'Suave y dulce, excelente para compotas.' },
    { id: 7, nombre: 'Piña', precio: 2.3, categoria: 'Frutas', imagen: 'frutas/piña.jpg', descripcion: 'Ácida y tropical, ideal para ensaladas.' },
    { id: 8, nombre: 'Albahaca', precio: 0.9, categoria: 'Verduras', imagen: 'verduras/albaca.jpg', descripcion: 'Hierba aromática perfecta para pizzas y pastas.' },
    { id: 9, nombre: 'Apio', precio: 1.0, categoria: 'Verduras', imagen: 'verduras/apio.jpg', descripcion: 'Crujiente y bajo en calorías, ideal para snacks.' },
    { id: 10, nombre: 'Brócoli', precio: 1.7, categoria: 'Verduras', imagen: 'verduras/brocoli.jpg', descripcion: 'Verdura verde rica en fibra y vitaminas.' },
    { id: 11, nombre: 'Col', precio: 1.4, categoria: 'Verduras', imagen: 'verduras/col.jpg', descripcion: 'Excelente para ensaladas y guisos.' },
    { id: 12, nombre: 'Culantro', precio: 0.7, categoria: 'Verduras', imagen: 'verduras/Culantro.jpg', descripcion: 'Ideal para sazonar sopas y guisos.' },
    { id: 13, nombre: 'Espinaca', precio: 1.3, categoria: 'Verduras', imagen: 'verduras/espinaca.jpg', descripcion: 'Rica en hierro, perfecta para ensaladas.' },
    { id: 14, nombre: 'Nabo', precio: 0.8, categoria: 'Verduras', imagen: 'verduras/NABO.jpg', descripcion: 'Tubérculo de sabor suave, ideal en sopas.' },
    { id: 15, nombre: 'Pimiento', precio: 1.6, categoria: 'Verduras', imagen: 'verduras/pimiento.jpg', descripcion: 'Colorido y sabroso, ideal para salteados.' },
    { id: 16, nombre: 'Poro', precio: 1.1, categoria: 'Verduras', imagen: 'verduras/poro.jpg', descripcion: 'Aporta sabor a sopas y guisos.' },
    { id: 17, nombre: 'Lechuga', precio: 1.2, categoria: 'Verduras', imagen: 'verduras/seda.jpg', descripcion: 'Fresca y crujiente, base ideal para ensaladas.' },
    { id: 18, nombre: 'Tomate', precio: 1.5, categoria: 'Verduras', imagen: 'verduras/tomate.jpg', descripcion: 'Jugoso y versátil, perfecto para salsas.' },
    { id: 19, nombre: 'Zanahoria', precio: 0.9, categoria: 'Verduras', imagen: 'verduras/zanahoria.jpg', descripcion: 'Dulce y nutritiva, ideal para snacks.' },
    { id: 20, nombre: 'Zapallo', precio: 1.8, categoria: 'Verduras', imagen: 'verduras/zapallo.jpg', descripcion: 'Suave y cremoso, ideal para sopas.' },
    { id: 21, nombre: 'Arroz', precio: 2.0, categoria: 'Abarrotes', imagen: 'abarrotes/arroz.jpg', descripcion: 'Básico en la cocina, ideal para cualquier comida.' },
    { id: 22, nombre: 'Atún', precio: 3.5, categoria: 'Abarrotes', imagen: 'abarrotes/atun.jpg', descripcion: 'Proteína enlatada ideal para ensaladas y pastas.' },
    { id: 23, nombre: 'Avena', precio: 1.9, categoria: 'Abarrotes', imagen: 'abarrotes/avena.jpg', descripcion: 'Saludable y energética para el desayuno.' },
    { id: 24, nombre: 'Café', precio: 4.0, categoria: 'Abarrotes', imagen: 'abarrotes/cafe.jpg', descripcion: 'Aromático y esencial para comenzar el día.' },
    { id: 25, nombre: 'Detergente', precio: 5.5, categoria: 'Abarrotes', imagen: 'abarrotes/detergente.jpg', descripcion: 'Eficaz para ropa limpia y fresca.' },
    { id: 26, nombre: 'Maca', precio: 3.2, categoria: 'Abarrotes', imagen: 'abarrotes/maca.jpg', descripcion: 'Energizante natural y saludable.' },
    { id: 27, nombre: 'Quinua', precio: 3.8, categoria: 'Abarrotes', imagen: 'abarrotes/quinua.jpg', descripcion: 'Grano andino rico en proteínas.' },
    { id: 28, nombre: 'Shampú', precio: 4.5, categoria: 'Abarrotes', imagen: 'abarrotes/shampu.jpg', descripcion: 'Cuida tu cabello con frescura y suavidad.' }
];

const productList = document.getElementById('product-list');
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function renderProductos(categoriaSeleccionada = 'Todas') {
    productList.innerHTML = '';
    const productosFiltrados = categoriaSeleccionada === 'Todas' ? productos : productos.filter(p => p.categoria === categoriaSeleccionada);
    productosFiltrados.forEach(prod => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
  <h3>${prod.nombre}</h3>
  <p class="descripcion">${prod.descripcion}</p>
  <img src="${prod.imagen}" alt="Imagen de ${prod.nombre}" class="producto-img"/>
  <p>Precio: $${prod.precio.toFixed(2)}</p>
  <button onclick="agregarAlCarrito(${prod.id})">Agregar</button>
`;

        productList.appendChild(div);
    });
}

function filtrarCategoria(categoria) {
    renderProductos(categoria);
}

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} agregado al carrito 🛒`);
}

function renderCarrito() {
    const carritoList = document.getElementById('carrito-list');
    carritoList.innerHTML = '';
    if (carrito.length === 0) {
        carritoList.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        carrito.forEach(producto => {
            const div = document.createElement('div');
            div.className = 'carrito-item';
            div.innerHTML = `
            <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" class="producto-img"/>
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `;
            carritoList.appendChild(div);
        });
        const btnComprar = document.createElement('button');
        btnComprar.innerText = 'Comprar';
        btnComprar.onclick = realizarCompra;
        carritoList.appendChild(btnComprar);
    }
}

function eliminarDelCarrito(id) {
    carrito = carrito.filter(p => p.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
}

function realizarCompra() {
    if (carrito.length === 0) {
        alert('Tu carrito está vacío. No puedes realizar la compra.');
        return;
    }
    alert('¡Tu pedido se ha completado con éxito! Gracias por tu compra 🛍️');
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    renderCarrito();
}

if (productList) renderProductos();
const carritoList = document.getElementById('carrito-list');
if (carritoList) renderCarrito();