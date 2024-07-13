import { render } from "@testing-library/react";
import css from './Form.module.css';
import React, { useState } from "react";

const random = Math.ceil(Math.random() * 10); // Generate a random number (1 to 10)

function MyForm() {
    /* const [guess, setGuess] = useState(""); // State for user's guess */
    const [result, setResult] = useState(""); // State for result message


    function operation(e) {
        let value = parseInt(e.target.value); // Get the value of the input and parse it to an integer
       if(value){
        if (value === random) {
            setResult("Yipee, you won!");
        } else if (value > random) {
            setResult("Lower");
        } else if (value < random) {
            setResult("Higher");
        } else {
            setResult("");
        }
    }
    else{
        setResult("")
    }
}

    return (
        <form>
            <header className={css.header}>
                <div className={css.inner}>
                    <label>Guess the number 1 to 10:&nbsp;&nbsp;</label>
                    <input
                        type="Number"
                        className={css.input}                        onChange={operation}
                        max={10}
                        min={0}
                    // Bind input value to state
                    /> <br />
                    <label>You Guessed: <h2 name="Result">{result}</h2> </label>
                    <button value={<MyForm />} className={css.refresh}>Refresh Number</button>
                </div>
                </header>
        </form>
    );
}

export default MyForm;
