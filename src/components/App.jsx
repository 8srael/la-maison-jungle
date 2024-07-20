import Banner  from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png';
import QuestionForm from "./QuestionForm";
import Footer from "./Footer";
import '../styles/Layout.css';
import { useState } from "react";


function handleSubmit(event) {
    event.preventDefault();
    alert(event.target.my_input.value);
}

function App() {

    const [cart, updateCart] = useState([]);
    
    return (
        <div>
            {/* props children */}
            <Banner>
                <img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
            </Banner>

            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>

{/* 
            <form onSubmit={handleSubmit}>
                <input type="text" name="my_input" defaultValue="Tapez votre texte"/>
                <button type="submit">Entrer</button>
            </form> */}

            {/* <QuestionForm /> */}
            <Footer />
        </div>
    );
}

export default App;