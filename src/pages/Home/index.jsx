import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { VscAdd } from "react-icons/vsc";

import { Container } from "./style";
import { Films } from "../../components/Films";
import { Link } from "../../components/Link";

export function Home() {
  return (
    <>
      <Header />

      <Container>
        <div className="title">
          <h1>Meus Filmes</h1>
          <Button
            icon={VscAdd}
            title={""}
            link={<Link title={"Adicionar Filme"} path={"/movieCreate"} />}
          ></Button>
        </div>
        <div className="films">
          <Films />
          <Films />
          <Films />
        </div>
      </Container>
    </>
  );
}
