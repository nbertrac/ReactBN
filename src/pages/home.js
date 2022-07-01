import Card from "../components/card/card";
import JsxExemple from "../components/jsx/exemple";
import Exemple from "../hooks/useEffect";
import HeaderEffect from "../hooks/useEffect2";
import StateExemple from "../hooks/useState";
import LogoReact from "../img/logo192.png";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Card title="Titre" desc="lorem ipsum" image={LogoReact} />
      <JsxExemple />
      <StateExemple />
      <Exemple />
      <HeaderEffect />
    </>
  );
}
