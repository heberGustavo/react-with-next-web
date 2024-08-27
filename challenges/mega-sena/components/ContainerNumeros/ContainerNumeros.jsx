import styles from "./ContainerNumeros.module.css";

import ItemNumeros from "../ItemNumeros/ItemNumeros";

export default function ContainerNumeros(props){

    const gerarNumeros = () => {
        return props.numeros.map((item, i) => {
            return <ItemNumeros key={i} numero={item}/>
        });
    }

    return(
        <div className={styles.container}>
            {gerarNumeros()}
        </div>
    );
}