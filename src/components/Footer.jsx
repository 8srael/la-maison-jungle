import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	const [inputValue, setInputValue] = useState('');

	function checkEmail() {
		if (!inputValue.includes('@'))
			alert(`Attention, il n'y a pas d'@, ceci n'est pas une adresse valide ${inputValue}`)
	}

	function handleInput(elem) {
		setInputValue(elem.target.value)
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>
				Laissez-nous votre mail : 
				<div>
					<input 
						type="text"
						placeholder="Entrer votre mail" 
						onBlur={checkEmail}
						onChange={handleInput}
						value={inputValue}
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer;