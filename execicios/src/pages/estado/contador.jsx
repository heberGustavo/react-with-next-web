/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const styleDivCustom = {
    backgroundColor: "#adadad",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
};

const styleH1Custom = {
    fontSize: "60px",
    fontWeight: "700",
};

const stylePCustom = {
    fontSize: "20px",
    fontWeight: "400",
    margin: "20px",
};

const styleButtonCustom = {
    backgroundColor: "#000",
    color: "#fff",
    width: "50px",
    height: "50px",
    borderRadius: "50px",
    fontSize: "20px",
    margin: "5px",
};

export default function contador() {
    const [number, setNumber] = useState(0);
    const [numberBase, setNumberBase] = useState(1);

    function addNumber(){
        setNumber(number + numberBase);
    }

    function subNumber(){
        setNumber(number - numberBase);
    }

    function setNumberInput(e){
        let myCurrentNumber = parseInt(e.target.value);

        if(!Number.isInteger(myCurrentNumber)){
            alert('Please, type a number!');
            setNumberBase(1);
            return;
        }

        setNumberBase(myCurrentNumber);
    }

    return (
        <div style={styleDivCustom}>
            <h1 style={styleH1Custom}>MEU CONTADOR</h1>
            <input 
                type="text"
                placeholder="Número" 
                style={{textAlign: "center"}}
                onChange={setNumberInput}
                value={numberBase}
            />
            <p>O calculo base é por: <strong>{numberBase}</strong></p>
            <br />

            <p style={stylePCustom}>O valor atual é: <strong>{number}</strong></p>
            <div>
                <button style={styleButtonCustom} onClick={subNumber}>-</button>
                <button style={styleButtonCustom} onClick={addNumber}>+</button>
            </div>
        </div>
    );
}