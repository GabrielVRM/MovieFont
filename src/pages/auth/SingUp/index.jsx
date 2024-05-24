import { Container, Form, SingInContent, SingInImage } from "./style.js";

import { Button } from "../../../components/Button/index.jsx";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../../components/Input/index.jsx";
import { Link } from "react-router-dom";

export function SingUp() {
  return (
    <>
      <Container>
        <SingInContent>
          <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Crie sua conta</h2>
            <Input placeholder="nome" type="text" icon={FiLock} />

            <Input placeholder="E-mail" type="text" icon={FiMail} />

            <Input placeholder="Senha" type="password" icon={FiLock} />

            <Button title="Cadastrar" />
          </Form>
          <Link to="/"> Voltar para o login</Link>
        </SingInContent>

        <SingInImage></SingInImage>
      </Container>
    </>
  );
}
