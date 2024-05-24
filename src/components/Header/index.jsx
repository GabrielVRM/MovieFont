import { Container } from "./style";
import RocketImage from "../../assets/RocketMovies.png";
import { Input } from "../Input";

import { Link } from "react-router-dom";
export function Header() {
  return (
    <>
      <Container>
        <img className="logo" src={RocketImage}></img>

        <Input placeholder="Pesquisar pelo título" type="text" />

        <div>
          <p>Gabriel Maximo</p>
          <Link to="/profile">sair</Link>
        </div>
        <img className=" avatar" src="https://github.com/GabrielVRM.png" />
      </Container>
    </>
  );
}
