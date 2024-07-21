import { Container } from './style'

export function Tag({ icon: Icon, title, ...rest }) {
  return (
    <>
      <Container {...rest}>{title}</Container>
    </>
  )
}
