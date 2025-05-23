import "./styles.css";
import Header from "./shared/Header";
import AppControlPannel from "./shared/AppControlPannel";
import CardBoard from "./shared/CardBoard"; // si lo tenés en esa carpeta

const engine = {
  words: [],
  selectCard: (e, word) => {
    console.log("Carta seleccionada:", word);
    e.currentTarget.classList.add("flipped");
  },
};

export default function App() {
  return (
    <>
      <Header />
      <AppControlPannel />
      <CardBoard engine={engine} />
    </>
  );
}
