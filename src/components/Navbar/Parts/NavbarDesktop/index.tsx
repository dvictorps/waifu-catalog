import { LinkMod } from '../../../LinkMod'
import { NavbarProps } from '../types'
import { Icon } from '../../../Icons'
import { Avatar } from '../../../Avatar'
import { userData } from '../../../../pages/api/mock'

import {
  Container,
  Navbar,
  NavContent,
  NavLink,
  HeaderLogo,
  WrapperIcon,
  LogoText,
  WrapperIconHeader,
  WrapperProfile,
  WrapperPicture,
  ProfileH1,
  WrapperPictureText,
  ProfileText,
  LogOutIcon,
  WrapperLogout,
  HeaderIcon,
  LogOutClick,
} from './styles'

export function SideBar({}: NavbarProps) {
  return (
    <>
      <Container>
        <HeaderLogo>
          <WrapperIconHeader>
            <HeaderIcon />
          </WrapperIconHeader>
          <LogoText>Waifu Catalog</LogoText>
        </HeaderLogo>
        <Navbar>
          <NavContent>
            <WrapperIcon>
              <Icon name='FaHome' />
            </WrapperIcon>
            <LinkMod href='/'>
              <NavLink>Home</NavLink>
            </LinkMod>
          </NavContent>
          <NavContent>
            <WrapperIcon>
              <Icon name='FaBorderAll' />
            </WrapperIcon>
            <LinkMod href='/profile'>
              <NavLink>My Waifus</NavLink>
            </LinkMod>
          </NavContent>
          <NavContent>
            <WrapperIcon>
              <Icon name='FaList' />
            </WrapperIcon>
            <LinkMod href='/waifus'>
              <NavLink>Waifu List</NavLink>
            </LinkMod>
          </NavContent>
        </Navbar>
        <WrapperProfile>
          <WrapperPicture>
            <Avatar alt='Avatar' src={userData.profilePicture.url} />
          </WrapperPicture>
          <WrapperPictureText>
            <ProfileH1>{userData.username}</ProfileH1>
            <ProfileText>{userData.accountLevel}</ProfileText>
          </WrapperPictureText>
          <WrapperLogout>
            <LinkMod href='/'>
              <LogOutClick>
                <LogOutIcon />
              </LogOutClick>
            </LinkMod>
          </WrapperLogout>
        </WrapperProfile>
      </Container>
    </>
  )
}
