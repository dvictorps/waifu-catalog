import { styled } from '../../configs'

export const ButtonContainer = styled('button', {
  display: 'flex',
  backgroundColor: '$primary',
  width: 'auto',
  height: 'auto',
  borderRadius: '50px',
  fontSize: '15px',
  fontWeight: 'bold',
  color: 'white',
  p: '1rem',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  borderStyle: 'none',
  '&:hover': {
    backgroundColor: '$secondary',
  },
  variants: {
    variant: {
      rounded: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        justifyItems: 'center',
        borderRadius: '100%',
        width: 'auto',
        height: 'auto',
        p: '1.2rem',
      },
    },
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
        '&:hover': {
          backgroundColor: '$primary',
        },
      },
      outlined: {
        backgroundColor: 'transparent',
        borderColor: '$primary',
        borderStyle: 'solid',
        borderWidth: '1px',
        color: '$primary',
        '&:hover': {
          backgroundColor: 'lightGray',
        },
      },
    },
  },
})
