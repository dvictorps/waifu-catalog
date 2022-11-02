import { styled } from '../../configs'

export const Container = styled('div', {
  width: '6rem',
  height: 'auto',
  maxHeight: '20rem',
  backgroundColor: '$primary',
  borderRadius: '25px',
  p: '1rem',
  '@xs': {
    width: '9rem',
  },
  '@lg': {
    width: '10rem',
  },
  '&:hover': {
    backgroundColor: '$secondary',
  },
})

export const ImageContainer = styled('div', {
  overflowWrap: 'anywhere',
  cursor: 'pointer',
})

export const ImageH1 = styled('h1', {
  fontSize: '1.5rem',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  width: '100%',
  color: 'white',
  fontWeight: 'bold',
})
