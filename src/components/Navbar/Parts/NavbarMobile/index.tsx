import { LinkMod } from '../../../LinkMod'
import { Icon } from '../../../Icons'
import {
  Container,
  HeaderIcon,
  LogOutIcon,
  LogoContainer,
  LogoText,
  NavList,
  NavContent,
  NavContainer,
  NavLink,
  WrapperIcon,
  WrapperLogout,
} from './styles'

import { NavbarProps } from '../types'

export function SideBarMobile({}: NavbarProps) {
  return (
    <Container>
      <WrapperLogout></WrapperLogout>
      <LogoContainer>
        <HeaderIcon />
        <LogoText>Waifu Catalog</LogoText>
      </LogoContainer>
      <NavContainer>
        <NavList>
          <NavContent>
            <WrapperIcon>
              <Icon name='FaHome' />
              <LinkMod href='/'>
                <NavLink>Home</NavLink>
              </LinkMod>
            </WrapperIcon>
          </NavContent>
          <NavContent>
            <WrapperIcon>
              <Icon name='FaList' />
              <LinkMod href='/waifus'>
                <NavLink>Waifu List</NavLink>
              </LinkMod>
            </WrapperIcon>
          </NavContent>
          <NavContent>
            <WrapperIcon>
              <Icon name='FaBorderAll' />
              <LinkMod href='/'>
                <NavLink>My Waifus</NavLink>
              </LinkMod>
            </WrapperIcon>
          </NavContent>
        </NavList>
      </NavContainer>
    </Container>
  )
}
