import CareScale from './CareScale';
import '../styles/PlantItem.css';


function handleClick(plantName) {
    window.alert(`✨ Vous avez acheté 1 ${plantName} ? Très bon choix✨`);
}

function handleClick2(e){
    console.log('Ceci est mon event :', e)

}

function PlantItem({id, name, cover, light, water}) {
    return (
        <li key={id} className='lmj-plant-item' onClick={(e) => handleClick2(e)}>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            {name}
            <div>
                <CareScale scaleValue={ light } careType='light' />
                <CareScale scaleValue={ water } careType='water' />
            </div>
        </li>
    )
}

export default PlantItem;


// onClick={handleClick}