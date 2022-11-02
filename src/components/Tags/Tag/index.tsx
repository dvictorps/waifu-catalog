import { Container, Tagtext } from './styles'

export type TagProps = React.ComponentPropsWithRef<typeof Container> &
  React.HTMLProps<HTMLDivElement> & {}

export function Tag({ children, ref, color }: TagProps) {
  if (children === 1) {
    children = 'Tsundere'
    color = 'red'
  }

  if (children === 5) {
    children = 'Loli'
    color = 'blue'
  }

  if (children === 2) {
    children = 'Tomboy'
    color = 'blue'
  }
  return (
    <Container ref={ref} color={color}>
      <Tagtext>{children}</Tagtext>
    </Container>
  )
}
