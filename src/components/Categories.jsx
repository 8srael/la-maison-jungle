import { plantList } from "../datas/plantList";
import '../styles/Categories.css';

function Categories({setCat}){

    const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc: acc.concat(plant.category) 
    , []);


    function catChange(e) {
        console.log(e.target.value)
        setCat(e.target.value)
    }

    return <div className="categories-container">
                <span>Categories : </span>
                <select className="categories-select" onChange={e => catChange(e)}>
                        <option value=""></option>
                    {categories.map((category) => (
                        <option key={category}>{category}</option>
                    ))
                    }
                </select>
                <button className="reset-btn">Renitialiser</button>
        </div>
}


export default Categories;