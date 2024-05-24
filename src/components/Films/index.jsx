import { Container } from "./style";
import { Tag } from "../Tags";

import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
export function Films() {
  return (
    <>
      <Container>
        <h1>Interestellar</h1>
        <div>
          <IoStar size={12} />
          <IoStar size={12} />
          <IoStar size={12} />
          <IoStar size={12} />
          <IoStarOutline size={12} />
        </div>
        <p>
          Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que
          tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
          uma inteligência desconhecida que está enviando mensagens codificadas
          através de
        </p>
        <div className="tag">
          <Tag title={"Ficção Científica"} />
          <Tag title={"Drama"} />
          <Tag title={"Familia"} />
        </div>
      </Container>
    </>
  );
}
