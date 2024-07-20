import '../styles/Cart.css'; 
import { useState } from "react";


function Cart({cart, updateCart}){
    const price = 0;
    const [isOpen, setOpen] = useState(false);

    const total = cart.reduce((acc, plant) => acc + plant.price * plant.amount, 0);

    return isOpen ? (
        <div className="lmj-cart">
            <button onClick={() => setOpen(false)} className='lmj-cart-toggle-button'>Fermer</button>
            <h2>Panier</h2>
            {cart.map(({name, price, amount}, index) =>(
                <div key={`${name}-${index}`}>
                    {name} {price}€ x {amount}
                </div>
            ))}
            <h3>Total : {total}€</h3>
            <button onClick={() => updateCart([])}>Vider le panier</button>
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
