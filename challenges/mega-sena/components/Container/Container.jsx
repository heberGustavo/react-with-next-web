import styles from './Container.module.css'

import { useEffect, useState } from 'react';
import { mega } from "../../functions/mega";

import Titulo from "../Titulo/Titulo";
import ContainerNumeros from "../ContainerNumeros/ContainerNumeros";

export default function Container(){

    const [numeros, setNumeros] = useState([]);

    useEffect(() => {
        setNumeros(mega())
    }, [])

    return(
        <div className={styles.container}>
            <Titulo titulo="MEGA SENA" subtitulo="Gere aqui seus números da Sorte!" />
            <ContainerNumeros numeros={numeros} />

            <br />
            <button 
                className={styles.button}
                onClick={() => setNumeros(mega())}
            >Gerar</button>
        </div>
    );
}