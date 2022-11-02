import { styled } from '../../../../configs/stitches'
import { BiLogOut } from 'react-icons/bi'
import { GiHeartburn } from 'react-icons/gi'

export const HeaderIcon = styled(GiHeartburn, {
  size: '2rem',
})

export const LogOutIcon = styled(BiLogOut, {
  size: '1rem',
  color: 'white',
})

export const WrapperLogout = styled('div', { size: '1rem' })

export const Container = styled('div', {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: '#201429',
  height: '100px',
  zIndex: '99',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  my: '1rem',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
})

export const LogoText = styled('h1', {
  display: 'inline-flex',
  fontSize: '1rem',
  fontWeight: '900',
  fontStyle: 'italic',
  cursor: 'default',
})

export const NavContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
})

export const NavList = styled('ul', {
  color: 'white',
  fontWeight: 'bold',
  listStyle: 'none',
})
export const NavContent = styled('li', {
  display: 'inline-grid',
  fontSize: '13px',
  alignItems: 'center',
})

export const NavLink = styled('a', {
  textDecoration: 'none',
  color: 'inherit',
  size: '100%',
  ml: '5px',
})

export const WrapperIcon = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'center',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  p: '7px',
  backgroundColor: '#322040',
  borderRadius: '8px',
  mx: '4px',
  py: '2px',
})
