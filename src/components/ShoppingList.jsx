import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';
import PlantItem from "./PlantItem";

function shoppingList() {

    const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc: acc.concat(plant.category) 
    , []);


    return (
        <div>
            <ul>
                {categories.map((category) => (
                    <li key={category}>{category + ''}</li>
                ))}
            </ul>

            <ul className="lmj-plant-list">
                {plantList.map(({id, cover, name, water, light}) => (
                    <PlantItem id = {id} name = {name} cover = {cover} light = {light} water = {water} />
                ))}
            </ul>
        </div>
    )
}

export default shoppingList;