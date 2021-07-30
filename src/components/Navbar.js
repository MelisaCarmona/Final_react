import React from 'react';
import '../style/style.css';


export default function Navbar () {
    return (
        <header>
             <h1>Fragance Style</h1>
             <nav id="menu_principal">
                 <ul>
                     <li>Catálogo</li>
                     <li>Contacto</li>
                     <li><i type="button"  style={{ fontWeight: 570 }} className="fas fa-shopping-cart" id="carrito"></i></li>
                     <li><i className="fas fa-user" style={{ fontWeight: 70 }} type="button" data-bs-toggle="modal" data-bs-target="#registerUser"></i></li>
                     <li> <button type="button" id="cierreSesion" className="btn btn-outline-light">Cerrar Sesión</button></li>
                 </ul>
             </nav>
        </header>
    );
}