import { ButtonContainer } from './styles'

export type ButtonProps = React.ComponentProps<typeof ButtonContainer> &
  React.HTMLProps<HTMLButtonElement> & {
    variants?: 'rounded'
    color?: 'primary' | 'secondary' | 'outlined'
  }

export function Button({ ...props }) {
  return <ButtonContainer {...props}></ButtonContainer>
}
