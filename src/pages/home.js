import Card from "../components/card/card";
import LogoReact from "../img/logo192.png";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Card title="Titre" desc="lorem ipsum" image={LogoReact} />
    </>
  );
}
