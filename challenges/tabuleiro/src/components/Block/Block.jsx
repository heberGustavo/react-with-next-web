import styles from './block.module.css';

export default function Block(props){
    console.log(props);
    
    return(
        <div className={props.color === "white" ? styles.boxWhite : styles.boxBlack}></div>
    );
}