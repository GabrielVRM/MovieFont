import { Container } from "./style";
import { LinkReact } from "./style";

export function Link({ icon: Icon, title, path }) {
  return (
    <>
      <Container>
        <LinkReact to={path}>
          {Icon && <Icon size={25} />} {title}
        </LinkReact>
      </Container>
    </>
  );
}
