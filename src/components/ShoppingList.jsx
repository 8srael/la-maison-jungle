import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState } from "react";

function shoppingList({cart, updateCart}) {
    const [cat, setCat] = useState('');

    function addToCart(name, price) {
        const currentplantAdded = cart.find((plant) => plant.name === name)
        if(currentplantAdded) {
            const cartFilteredCurrentPlant = cart.filter((plant) => plant.name !== name)
            updateCart([...cartFilteredCurrentPlant, {name, price, amount: currentplantAdded.amount + 1}])
        } else {
            updateCart([...cart, {name, price, amount: 1}])
        }
    }

    function plantListByCategory(plantList) {
        return plantList.filter((plant) => plant.category === cat)
    }

    return (
        <div className="lmj-shopping-list">
           <Categories setCat={setCat}/>

            <ul className="lmj-plant-list">
                {
                    cat.length === 0 ? (
                        plantList.map(({id, cover, name, water, light, price, category}) => (
                            <div key={id}>
                                <PlantItem name = {name} cover = {cover} light = {light} water = {water} />
                                <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            </div>
                        ))
                    ) : (
                        plantListByCategory(plantList).map(({id, cover, name, water, light, price, category}) => (
                            <div key={id}>
                                <PlantItem name = {name} cover = {cover} light = {light} water = {water} />
                                <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            </div>
                        ))
                    )
                }
            </ul>
        </div>
    )
}

export default shoppingList;