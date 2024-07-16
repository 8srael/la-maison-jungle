import '../styles/Cart.css'; 
import { useState } from "react";


function Cart(){
    const monsteraPrice = 8;
    const [cart, updateCart] = useState(0);
    const [isOpen, setOpen] = useState(false);

    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setOpen(false)} className='lmj-cart-toggle-button'>Fermer</button>
            <h2>Panier</h2>
            <div>
                Monstera : {monsteraPrice}€
                <button className='lmj-cart-add-button' onClick={() => updateCart(cart + 1)}>
                    Ajouter
                </button>
            </div>
            <h3>Total : {monsteraPrice * cart}</h3>
            <button onClick={() => updateCart(0)}>Vider le panier</button>
        </div>
    ) : (
        <div className="lmj-cart-closed">
            <button className='lmj-cart-toggle-button' onClick={() => setOpen(true)}>Ouvrir le Panier</button>
        </div>
    )
        

}
 
//  // Cart component
//  function Cart() {
//     const price1 = 8;
//     const price2 = 10;
//     const price3 = 15;
//     return (
//         <div className="lmj-cart">
//             <h2>Panier</h2>
//             <ul>
//                 <li>La monstera 🌹 : {price1}€</li>
//                 <li>Le lierre 🌼 : {price2}€</li>
//                 <li>Le bouquet de fleurs 💐 : {price3}€</li>
//             </ul>

//             <h3>Total : {price1 + price2 + price3}€</h3>
//         </div>
//     )
// }

export default Cart;
