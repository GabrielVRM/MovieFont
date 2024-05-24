import { Header } from "../../components/Header";
import { Link } from "../../components/Link";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FaArrowLeft } from "react-icons/fa";
import { VscAdd } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";

import { Container } from "./style";
import { TextArea } from "../../components/TextArea";
import { Tag } from "../../components/Tags";

export function MovieCreate() {
  return (
    <>
      <Header />

      <Container>
        <Link path={"/"} icon={FaArrowLeft} />
        <h1> Novo Filme</h1>
        <div className="inputs">
          <Input placeholder={"titulo"} />
          <Input placeholder={"Sua nota (de 0 a 5)"} />
        </div>
        <TextArea placeholder={"Observações"} />
        <h2>Marcadores</h2>
        <div className="tag">
          <Tag title="React" icon={VscChromeClose} />
          <Tag title="Novo Marcador" icon={VscAdd} active={true} />
        </div>
        <div className="buttons">
          <Button title={"Excluir Filmes"} />
          <Button title={"Salvar Alterações"} />
        </div>
      </Container>
    </>
  );
}
