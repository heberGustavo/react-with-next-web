import styles from "./ItemNumero.module.css";

export default function ItemNumeros(props) {
    return (
        <div className={styles.numero}>{props.numero}</div>
    );
}