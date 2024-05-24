import { Container } from "./style";

export function Button({ title, loading, icon: Icon, link }) {
  return (
    <>
      <Container type="button">
        {Icon && <Icon />}

        {link}
        {title}
      </Container>
    </>
  );
}
