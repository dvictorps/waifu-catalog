import { styled } from "../../../configs"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: 100,
  height: '100%',
  width: '100%',
  alignItems: 'center',
  p: '1rem',
  '@md': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    top: 100,
    position: 'absolute',
  },
  '@lg': {
    position: 'absolute',
    top: 0,
    left: '15rem',
    width: 'stretch',
  },
})

export const PageHeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  overflowWrap: 'anywhere',
  alignItems: 'center',
  textAlign: 'center',
  width: '80%',
  height: 'auto',
})

export const ImageContainer = styled('div', {
  backgroundColor: '$primary',
  p: '0.3rem',
  borderRadius: '25px',
  height: 'auto',
  width: '50%',
})

export const TagListContainer = styled('div', {
  textAlign: 'center',
  mt: '1rem',
  maxWidth: '50%',
})

export const TagListText = styled('h1', {
  mb: '0.7rem',
  fontSize: '1.5rem',
})

export const ButtonContainer = styled('div', {
  display: 'grid',
  textAlign: 'center',
  justifyItems: 'center',
  mt: '1rem',
  pb: '1rem',
})
