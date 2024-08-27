import styles from './Container.module.css'

import Titulo from "../Titulo/Titulo";
import ContainerNumeros from "../ContainerNumeros/ContainerNumeros";
import GeradorNumeros from '../GeradorNumeros/GeradorNumeros';

export default function Container(){
    return(
        <div className={styles.container}>
            <Titulo titulo="MEGA SENA" subtitulo="Gere aqui seus números da Sorte!" />
            <br />

            <GeradorNumeros quantidadeNumeros={6} />
        </div>
    );
}