import { Container } from './style'

export function Button({ title, loading, icon: Icon, link, ...rest }) {
  return (
    <>
      <Container type='button' {...rest}>
        {Icon && <Icon />}

        {link}
        {title}
      </Container>
    </>
  )
}
