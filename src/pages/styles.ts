import { styled } from '../configs'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: 50,
  height: '100%',
  width: '100%',
  alingContent: 'center',
  justifyContent: 'center',
  p: '1rem',
  '@md': {
    display: 'flex',
    flexDirection: 'column',
    alingContent: 'auto',
    justifyContent: 'flex-start',
    top: 50,
    position: 'absolute',
  },
  '@lg': {
    position: 'absolute',
    top: 0,
    left: '15rem',
    width: 'auto',
  },
})

export const PageHeader = styled('div', {
  display: 'flex',
  backgroundColor: 'white',
  flexDirection: 'column',
  alignItems: 'center',
  mb: '1rem',
  p: '3rem',
  '@md': {
    alignItems: 'flex-start',
  },
})

export const TextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const PageH1 = styled('h1', {})
export const PageP = styled('p', {
  mt: '1rem',
  fontSize: '1rem',
  fontWeight: 'bold',
  '@md': {
    maxWidth: '70%',
  },
})

export const ImageContainer = styled('div', {
  width: '70%',
  height: '70%',
  '@lg': {
    width: '50%',
    height: '50%',
  },
  '@xxl': {
    width: '20%',
    height: '20%',
  },
})

export const CountContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  justifyItems: 'center',
  p: '2rem',
  '@md': {
    display: 'grid',
    flexDirection: 'column',
    alignItems: 'flex-start',
    my: 0,
  },
  '@lg': {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    p: '3rem',
  },
})

export const TextCountContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  p: '1rem',
  '@lg': {
    display: 'flex',
    flexDirection: 'row',
    p: '1rem',
    mt: '4rem',
    ml: '4rem',
  },
})

export const CountH1data = styled('h1', {
  '@md': {
    m: '1rem',
  },
  fontWeight: 'bolder',
  my: '2rem',
})
