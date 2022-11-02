import { styled } from '../../configs'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: 100,
  height: '100%',
  fontWeight: 'bold',
  width: '100%',
  alingContent: 'center',
  justifyContent: 'center',
  p: '1rem',
  '@md': {
    display: 'flex',
    flexDirection: 'column',
    alingContent: 'auto',
    justifyContent: 'flex-start',
    top: 100,
    position: 'absolute',
  },
  '@lg': {
    position: 'absolute',
    top: 0,
    left: '15rem',
    width: 'stretch',
    m: '3rem',
  },
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const SearchbarContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  borderWidth: '1px',
  borderColor: '$primary',
  borderStyle: 'solid',
  width: '15rem',
})

export const SearchBar = styled('input', {
  p: '10px',
  width: '80%',
  fontWeight: 'bold',
  border: 'none',
  '&:focus': {
    outline: 'none',
  },
})

export const PageHeaderH1 = styled('h1', {})

export const WaifuContainer = styled('div', {
  mt: '1rem',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: 'repeat(2, 1fr) ',
  '@md': { gridTemplateColumns: 'repeat(3, 1fr)', pb: '1rem' },
  '@xl': { gridTemplateColumns: 'repeat(4, 1fr)' },
  '@xxl': { gridTemplateColumns: 'repeat(7, 1fr) ', mt: '2rem' },
})
