import { Container, Form, SingInContent, SingInImage } from "./style.js";

import { Link } from "react-router-dom";

import { Button } from "../../../components/Button/index.jsx";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../../components/Input/index.jsx";

export function SingIn() {
  return (
    <>
      <Container>
        <SingInContent>
          <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir.</p>

            <h2>Faça seu login</h2>

            <Input placeholder="E-mail" type="text" icon={FiMail} />

            <Input placeholder="Senha" type="password" icon={FiLock} />

            <Button title="Entrar" />
          </Form>
          <Link to="/register">Criar Conta</Link>
        </SingInContent>

        <SingInImage></SingInImage>
      </Container>
    </>
  );
}