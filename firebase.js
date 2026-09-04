// firebase.js

// Importamos la conexión de Firebase y Firestore (módulo versión 10 de Google)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// Tu configuración de Firebase 
const firebaseConfig = {
  apiKey: "AIzaSyADCaK9NOR-zWVei5W5kVCsfAiqdhkLYe4",
  authDomain: "tienda-jose-garibaldi.firebaseapp.com",
  projectId: "tienda-jose-garibaldi",
  storageBucket: "tienda-jose-garibaldi.firebasestorage.app",
  messagingSenderId: "633800628614",
  appId: "1:633800628614:web:1360f923af72eea6e67407",
  measurementId: "G-Z6YQ9GBHZZ"
};

// 1. Inicializar la App de Firebase
const app = initializeApp(firebaseConfig);
// 2. Inicializar la Base de Datos (Esto faltaba y es muy importante)
const db = getFirestore(app);


// LOGICA PARA GUARDAR CORREO
const botonGuardar = document.getElementById('btnGuardarEmail');

botonGuardar.addEventListener('click', async () => {
    
    // Agarramos lo que el usuario escribió en el campo de texto
    const emailInput = document.getElementById('emailCliente').value;

    // Validamos que el cliente haya escrito algo con el símbolo @
    if(emailInput.includes('@')) {
        try {
            // Cambiamos el texto al botón mientras guarda
            botonGuardar.innerHTML = "Guardando...";

            // Guardamos en Firestore dentro de la "carpeta" o colección llamada "suscriptores_descuento"
            await addDoc(collection(db, "suscriptores_descuento"), {
                email: emailInput,
                fecha_suscripcion: new Date(),
                estado: "15% pendiente de usar"
            });

            // Ocultamos el Popup y damos mensaje de éxito
            alert("¡Éxito! Tu 15% de descuento ha sido asegurado. Pronto revisa el correo: " + emailInput);
            document.getElementById('popupApertura').style.display = 'none';

        } catch (error) {
            console.error("Hubo un error:", error);
            alert("No pudimos guardar el correo, revisa tu conexión a Internet.");
            botonGuardar.innerHTML = "¡Quiero mi 15% Off!";
        }
    } else {
        alert("Por favor ingresa un correo electrónico válido (que contenga un @)");
    }
});