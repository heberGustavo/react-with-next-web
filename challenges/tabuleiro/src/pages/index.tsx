import styles from "../styles/index.module.css";
import Block from "../components/Block/Block";

export default function Home() {
  return (
    <main className={styles.tabuleiro}>
      <div>{ContainerStartWhite(8, 8)}</div>
    </main>
  );
}

function ContainerStartWhite(x, y) {
  var rows = [];

  for (let i = 0; i < x; i++) {
    let divivelPorDois = i % 2 == 0;
    rows.push(<div className={styles.row}>{Blocks(y, divivelPorDois ? "white" : "black")}</div>);
  }
  return rows;
}

function Blocks(size, colorStart) {
  var viewBlocks = [];
  let lastColor = colorStart;

  for (let i = 0; i < size; i++) {
    viewBlocks.push(<Block key={i} color={lastColor} />);
    lastColor = lastColor === "white" ? "black" : "white";
  }

  return viewBlocks;
}
