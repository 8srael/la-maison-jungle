import '../styles/Banner.css';
// import logo from '../assets/logo.png';
import Recommendation from './Recommendation';
 
 // Banner component
//  function Banner() {
//     const title = 'la maison jungle'  //'🌻la maison jungle 🌼'
   
//     return (
//         <div className="lmj-banner">
//             <div className="lmj-banner-row">
//                 <img src={logo} alt={title} className='lmj-logo' />
//                 <h1 className='lmj-title'>{ title.toUpperCase() }</h1>
//             </div>

//             <Recommendation/>
//         </div>
//     )
// }

function Banner({children}) {
    return (
        <div className='lmj-banner'>
            {children}
            <Recommendation/>
        </div>
    )
}

export default Banner;