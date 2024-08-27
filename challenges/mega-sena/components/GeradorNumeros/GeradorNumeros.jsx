import styles from "./GeradorNumeros.module.css";

import { useState } from "react";
import ContainerNumeros from "../ContainerNumeros/ContainerNumeros";

export default function GeradorNumeros(props){

    const [numerosSorte, setNumerosSorte] = useState([]);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const gerarNumerosSorte = () => {
        let novosNumeros = [];
        const quantMax = 60;

        for (let i = 0; i < props.quantidadeNumeros; i++) {
            novosNumeros.push(getRandomInt(quantMax));
        }

        setNumerosSorte(novosNumeros);
    }

    return(
        <div>
            <p>{props.quantidade}</p>
            <button 
                className={styles.button}
                onClick={gerarNumerosSorte}
            >
                Gerar</button>

            <ContainerNumeros numeros={numerosSorte} />
        </div>
    );
}