import { useState } from "react";

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your question here');

    const isInputError = inputValue.includes('f');

    function checkValue(value) {
        if(!value.includes('f')) {
            setInputValue(value);
        }
    }
    

    return (
        <div>
            {/* {isInputError && <div style={{color: 'red'}}> Vous n'avez pas droit d'utiliser la lettre "f"</div>} */}
            <textarea name="" id="" cols="30" rows="10" 
                onChange={(e) =>  checkValue(e.target.value)}
                 defaultValue={inputValue}/>

            <button onClick={() => alert(inputValue)}> show state value</button>
        </div>
    )
}

export default QuestionForm;