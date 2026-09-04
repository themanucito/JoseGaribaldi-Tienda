// app.js

// Generando los 15 items de muestra bajo tu esquema:
const productosDB = [
    { id: 1, nombre: "Cuadro 'Noche en el Puerto'", categoria: "Arte y Cuadros", precioOriginal: 450, precioOferta: 380, stock: 5, descripcion: "Impresión de arte abstracto con relieves pintados a mano.", dimensiones: { alto: 120, ancho: 80, profundidad: 4, unidad: "cm" }, materiales: { madera: "Pino Chileno", tela: "Lienzo de algodón 100%", peso: "3kg" }, cuidados: "Limpiar con paño seco, no exponer al sol directo.", cuotas: { meses: 6, pagoMensual: 63.33 }, costoEnvio: "Envío Gratis a todo el país", esFragil: false, fotos: ["url_1","url_2","url_3","url_4"] },
    { id: 2, nombre: "Escultura 'Busto Garibaldi'", categoria: "Esculturas", precioOriginal: 750, precioOferta: 650, stock: 2, descripcion: "Busto tallado en piedra de imitación. Acabado clásico y atemporal.", dimensiones: { alto: 50, ancho: 30, profundidad: 25, unidad: "cm" }, materiales: { tipo: "Resina reforzada con marmolina", peso: "12kg" }, cuidados: "Limpiar con brocha de cerdas suaves.", cuotas: { meses: 12, pagoMensual: 54.16 }, costoEnvio: "Calculado en Checkout (Carga pesada)", esFragil: true, fotos: ["url_1","url_2","url_3","url_4"] },
    { id: 3, nombre: "Cuadro 'Oro y Bronce Abstracto'", categoria: "Arte y Cuadros", precioOriginal: 600, precioOferta: 499, stock: 3, descripcion: "Pan de oro incrustado sobre pintura acrílica.", dimensiones: { alto: 150, ancho: 100, profundidad: 5, unidad: "cm" }, materiales: { madera: "Caoba (marco)", tela: "Lienzo", peso: "4.5kg" }, cuidados: "Plumero anti-estático solamente.", cuotas: { meses: 6, pagoMensual: 83.16 }, costoEnvio: "Envío Gratis a todo el país", esFragil: false, fotos: ["url_1","url_2","url_3","url_4"] },
    { id: 4, nombre: "Escultura 'Pensador de Plata'", categoria: "Esculturas", precioOriginal: 350, precioOferta: 299, stock: 4, descripcion: "Escultura moderna minimalista bañada en pintura plateada brillante.", dimensiones: { alto: 60, ancho: 20, profundidad: 20, unidad: "cm" }, materiales: { tipo: "Metal y yeso", peso: "4kg" }, cuidados: "Paño húmedo levemente, no aplicar solventes.", cuotas: { meses: 3, pagoMensual: 99.66 }, costoEnvio: "S/20 Envío Fijo", esFragil: true, fotos: ["url_1","url_2","url_3","url_4"] },
    // Continúan los otros 11 ítems (por formato práctico, genero los datos simplificados de 11 ítems restantes con la misma base):
    { id: 5, nombre: "Cuadro 'Líneas al Viento'", categoria: "Arte y Cuadros", precioOriginal: 200, precioOferta: 150, stock: 6, cuotas:{meses:3, pagoMensual: 50}, esFragil: false, dimensiones:{alto:80, ancho:60, unidad:"cm"} },
    { id: 6, nombre: "Escultura 'Torso Griego'", categoria: "Esculturas", precioOriginal: 900, precioOferta: 800, stock: 1, cuotas:{meses:12, pagoMensual: 66.6}, esFragil: true, dimensiones:{alto:75, ancho:40, unidad:"cm"} },
    { id: 7, nombre: "Cuadro 'Danza Marina'", categoria: "Arte y Cuadros", precioOriginal: 550, precioOferta: 480, stock: 4, cuotas:{meses:6, pagoMensual: 80}, esFragil: false, dimensiones:{alto:100, ancho:100, unidad:"cm"} },
    { id: 8, nombre: "Escultura 'Perro Globo Negro'", categoria: "Esculturas", precioOriginal: 180, precioOferta: 140, stock: 10, cuotas:{meses:3, pagoMensual: 46.6}, esFragil: false, dimensiones:{alto:25, ancho:25, unidad:"cm"} },
    { id: 9, nombre: "Cuadro 'Botanica I'", categoria: "Arte y Cuadros", precioOriginal: 120, precioOferta: 90, stock: 15, cuotas:{meses:1, pagoMensual: 90}, esFragil: false, dimensiones:{alto:40, ancho:30, unidad:"cm"} },
    { id: 10, nombre: "Escultura 'Corazón Anatómico Dorado'", categoria: "Esculturas", precioOriginal: 450, precioOferta: 400, stock: 2, cuotas:{meses:6, pagoMensual: 66.6}, esFragil: true, dimensiones:{alto:30, ancho:15, unidad:"cm"} },
    { id: 11, nombre: "Cuadro 'El Sol Vintage' (Mural)", categoria: "Arte y Cuadros", precioOriginal: 800, precioOferta: 650, stock: 3, cuotas:{meses:6, pagoMensual: 108.3}, esFragil: false, dimensiones:{alto:200, ancho:100, unidad:"cm"} },
    { id: 12, nombre: "Escultura 'Manos Unidas'", categoria: "Esculturas", precioOriginal: 220, precioOferta: 199, stock: 7, cuotas:{meses:3, pagoMensual: 66.3}, esFragil: true, dimensiones:{alto:35, ancho:20, unidad:"cm"} },
    { id: 13, nombre: "Cuadro 'Horizonte Terrestre'", categoria: "Arte y Cuadros", precioOriginal: 380, precioOferta: 340, stock: 8, cuotas:{meses:6, pagoMensual: 56.6}, esFragil: false, dimensiones:{alto:90, ancho:130, unidad:"cm"} },
    { id: 14, nombre: "Escultura 'Pantera Mármol'", categoria: "Esculturas", precioOriginal: 650, precioOferta: 550, stock: 5, cuotas:{meses:12, pagoMensual: 45.8}, esFragil: true, dimensiones:{alto:25, ancho:110, unidad:"cm"} },
    { id: 15, nombre: "Cuadro 'Retrato Picasso Mod'", categoria: "Arte y Cuadros", precioOriginal: 299, precioOferta: 250, stock: 10, cuotas:{meses:3, pagoMensual: 83.3}, esFragil: false, dimensiones:{alto:80, ancho:80, unidad:"cm"} }
];

const galleryGrid = document.getElementById("gallery");

function renderProductos() {
    let html = "";
    productosDB.forEach(prod => {
        let tachado = prod.precioOriginal !== prod.precioOferta ? `<del>$${prod.precioOriginal}</del>` : "";
        let frágilHTML = prod.esFragil ? `<span class="badge badge-fragil">FRÁGIL - Embalaje Especial</span>` : "";
        
        // Placeholder temporal para fotos hasta que subas tus 4 imágenes (se ve una gris):
        html += `
        <div class="product-card">
            <div class="foto-carrusel">
                <img src="https://via.placeholder.com/300x300?text=${prod.categoria}" alt="${prod.nombre}">
            </div>
            ${frágilHTML}
            <h3>${prod.nombre}</h3>
            <p class="category">${prod.categoria}</p>
            <p class="price">${tachado} <strong>$${prod.precioOferta}</strong></p>
            <p class="installments">✨ Llévatelo en ${prod.cuotas.meses} cuotas de <strong>$${prod.cuotas.pagoMensual.toFixed(2)}</strong></p>
            <p class="stock">Quedan ${prod.stock} disponibles</p>
            <button class="btn-buy" onclick="comprar()">Ver detalles de obra</button>
        </div>`;
    });
    galleryGrid.innerHTML = html;
}

// Ventana Emergente - Newsletter de Apertura (15% DSCTO)
window.onload = () => {
    renderProductos();
    setTimeout(() => {
        document.getElementById('popupApertura').style.display = 'flex';
    }, 2000); // Aparece a los 2 segundos
}

function cerrarPopup() {
    document.getElementById('popupApertura').style.display = 'none';
}

function comprar() {
    alert("Próximamente... Enlazado al Checkout de WhatsApp o Pasarela.");
}