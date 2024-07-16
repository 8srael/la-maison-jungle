import { plantList } from "../datas/plantList";
import '../styles/ShoppingList.css';

function shoppingList() {

    const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc: acc.concat(plant.category) 
    , []);


    return (
        <div>
            <ul className="lmj-plant-list">
                {categories.map((category) => (
                    <li key={category}>{category + ''}</li>
                ))}
            </ul>

            <ul>
                {plantList.map((plant)=> (
                    <li key={plant.id} className='lmj-plant-item'>
                        {plant.name}

                        {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default shoppingList;