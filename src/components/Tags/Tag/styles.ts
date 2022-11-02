import { styled } from '../../../configs'
export const Container = styled('div', {
  display: 'inline-flex',
  backgroundColor: '$primary',
  width: 'auto',
  overflowWrap: 'anywhere',
  minWidth: '4rem',
  maxWidth: '6rem',
  height: 'auto',
  p: '0.5rem',
  cursor: 'default',
  borderRadius: '20%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  borderWidth: '5px',
  borderStyle: 'double',
  borderColor: 'white',
  variants: {
    color: {
      red: {
        backgroundColor: 'DarkRed',
      },
      blue: {
        backgroundColor: 'DarkBlue',
      },
    },
  },
})

export const Tagtext = styled('span', {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: 'white',
})
