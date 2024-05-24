import { Container } from "./style";

export function TextArea({ text, ...rest }) {
  return (
    <>
      <Container {...rest}>{text}</Container>
    </>
  );
}
