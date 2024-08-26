const stylePCustom = {
    fontSize: "20px",
    fontWeight: "400",
    margin: "20px",
};

export default function ContadorDisplay(props){
    return(
        <div>
            <p>O calculo base é por: <strong>{props.numberBase}</strong></p>
            <br />

            <p style={stylePCustom}>O valor atual é: <strong>{props.number}</strong></p>
        </div>
    );
}