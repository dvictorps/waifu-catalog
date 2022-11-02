import { styled } from '../../../../configs/stitches'
import { BiLogOut } from 'react-icons/bi'
import { GiHeartburn } from 'react-icons/gi'

export const Container = styled('div', {
  left: 0,
  fontSize: '1rem',
  position: 'fixed',
  color: 'white',
  backgroundColor: '#201429',
  height: '100%',
  width: '15rem',
})

export const Navbar = styled('ul', {
  listStyle: 'none',
  mx: '1rem',
})

export const NavContent = styled('li', {
  display: 'flex',
  color: 'white',
  my: '0.5rem',
  py: '0.3rem',
  width: '100%',
  height: '2.5rem',
  borderRadius: '5px',
  '&:hover': {
    backgroundColor: '#322040',
  },
  cursor: 'pointer',
})

export const NavLink = styled('a', {
  ml: '1rem',
  display: 'flex',
  fontWeight: 'bold',
  alignItems: 'center',
  size: '100%',
  color: 'inherit',
  textDecoration: 'none',
})

export const HeaderLogo = styled('div', {
  display: 'flex',
  mx: '1rem',
  mt: '1rem',
})

export const HeaderIcon = styled(GiHeartburn, {
  size: '2rem',
})

export const WrapperIcon = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  pl: '1rem',
})

export const LogoText = styled('h1', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  alignContent: 'center',
  fontSize: '1.1rem',
  fontWeight: '900',
  fontStyle: 'italic',
  cursor: 'default',
})

export const WrapperIconHeader = styled('div', {
  display: 'flex',
  justifyItems: 'center',
  alignItems: 'center',
  alignContent: 'center',
})

export const WrapperProfile = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  py: '0.5rem',
  width: '100%',
  backgroundColor: '#322040',
})

export const WrapperPicture = styled('div', {
  ml: '0.5rem',
})

export const WrapperPictureText = styled('div', {
  alignContent: 'center',
  ml: '1rem',
})

export const ProfileH1 = styled('h1', {
  fontSize: '1rem',
  fontWeight: 700,
})

export const ProfileText = styled('p', {})

export const WrapperLogout = styled('div', {})

export const LogOutIcon = styled(BiLogOut, {
  size: '1.5rem',
})

export const LogOutClick = styled('a', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  justifyItems: 'center',
  borderRadius: '10px',
  m: '0.5rem',
  p: '0.5rem',
  color: 'white',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#422A55',
  },
})
