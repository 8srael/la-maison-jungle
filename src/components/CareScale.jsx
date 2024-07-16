import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function checkPlantNeeds(scale, careType) {
    const careTypeStr = careType === 'light' ? 'de lumière' : "d'arrosage"
    const finalStr = `Cette plante requiert `
    switch (scale) {
        case 1:
            return `${finalStr} peu de ${careTypeStr}`
        case 2:
            return `${finalStr} modérément de ${careTypeStr}`
        case 3:
            return `${finalStr} beaucoup de ${careTypeStr}`
        default:
            return ''
    }
}

function handleClick(scale, careType) {
    const needs = checkPlantNeeds(scale, careType)
    window.alert(needs)

}


function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? (<img src={Sun} alt="sun-icon" />) : (<img src={Water} alt="water-icon" />)

    return (
        <div onClick={() => handleClick(scaleValue, careType)}>
            { 
                range.map((rangeElem) => scaleValue >= rangeElem ? 
                    <span key={rangeElem.toString()}> {scaleType}</span> 
                    : 
                    null
                )
            }
        </div>
    )
}

export default CareScale;