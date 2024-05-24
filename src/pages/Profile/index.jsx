import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./style.js";
import { Input } from "../../components/Input/index.jsx";
import { Button } from "../../components/Button/index.jsx";

import { Link } from "../../components/Link/index.jsx";

export function Profile() {
  return (
    <>
      <Container>
        <header>
          <Link icon={FiArrowLeft} path={"/"}></Link>
        </header>
        <Form>
          <Avatar>
            <img src="https://github.com/GabrielVRM.png"></img>

            <label htmlFor="avatar">
              <FiCamera />
              <input id="avatar" type="file"></input>
            </label>
          </Avatar>

          <Input placeholder="Nome" type="text" icon={FiUser} />
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha Atual" type="password" icon={FiLock} />
          <Input placeholder="Nova Senha" type="password" icon={FiLock} />

          <Button title={"Salvar"} />
        </Form>
      </Container>
    </>
  );
}
