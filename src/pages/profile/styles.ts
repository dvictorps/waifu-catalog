import { styled } from '../../configs'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  top: 100,
  height: '100%',
  width: '100%',
  alignItems: 'center',
  textAlign: 'center',
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
    pb: '7rem',
  },
})

export const ProfileContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  '@lg': {
    width: '50%',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '$primary',
    borderRadius: '25px',
    mx: '3rem',
    mt: '1rem',
    px: '10rem',
    py: '3em',
  },
})

export const ProfileTitle = styled('h1', {
  textAlign: 'center',
  fontWeight: 'bold',
})

export const ImageContainer = styled('div', {
  textAlign: 'center',
  width: '40%',
  cursor: 'pointer',
})

export const AvatarH1 = styled('h1', {
  fontSize: '1.3rem',
  fontWeight: 'bold',
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'auto',
  alignItems: 'center',
  '@lg': {
    flexDirection: 'row',
    display: 'inline-flex',
  },
})

export const InfoContent = styled('p', {
  fontWeight: 'bolder',
  fontSize: '1.4rem',
})

export const InfoContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@lg': {
    textAlign: 'start',
    ml: '3rem',
    mt: '5rem',
  },
})

export const InfoSpan = styled('span', {
  fontWeight: 'bolder',
  fontSize: '1.3rem',
})

export const WaifuContainer = styled('div', {
  p: '1rem',
  mt: '1rem',
})

export const WaifuListContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  '@xl': {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
})

export const WaifuH1 = styled('h1', {
  fontWeight: 'bold',
  mb: '1rem',
})

export const EditContainer = styled('div', {
  mt: '1rem',
  '@lg': {
    mt: 0,
    ml: '3rem',
    justifyContent: 'end',
    display: 'flex',
  },
})
