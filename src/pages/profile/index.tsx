import { LinkMod } from '../../components'
import { WaifuCard } from '../../components'
import Image from 'next/image'
import { Icon } from '../../components'
import { Button } from '../../components'
import { userData, listData } from '../api/mock'
import { Navbar } from '../../components'
import {
  Container,
  ImageContainer,
  ProfileContainer,
  InfoContent,
  InfoContainer,
  ProfileTitle,
  InfoContentContainer,
  InfoSpan,
  AvatarH1,
  WaifuContainer,
  WaifuH1,
  WaifuListContainer,
  EditContainer,
} from './styles'

var profileSex

if (userData.sex === 1) {
  profileSex = 'Masculino'
} else {
  profileSex = 'Feminino'
}

export default function Perfil({}) {
  const waifuFilter = listData.waifus
    .filter(waifu => userData.waifuList.find(w => w.id === waifu.id))
    .map(waifu => {
      return (
        <WaifuCard
          name={waifu.name}
          link={`/waifus/${waifu.id}`}
          key={waifu.id}
          src={waifu.image}
        />
      )
    })

  return (
    <>
      <Navbar />
      <Container>
        <ProfileContainer>
          <ProfileTitle>Perfil</ProfileTitle>
          <InfoContainer>
            <ImageContainer>
              <AvatarH1>Avatar</AvatarH1>
              <Image
                alt=''
                src={userData.profilePicture.url}
                layout='responsive'
                objectFit='cover'
                width={'100%'}
                height={'100%'}
                style={{
                  borderRadius: '100%',
                }}
              />
            </ImageContainer>
            <InfoContentContainer>
              <InfoContent>Nome:</InfoContent>
              <InfoSpan>{userData.username}</InfoSpan>
              <InfoContent>Sexo:</InfoContent>
              <InfoSpan>{profileSex}</InfoSpan>
            </InfoContentContainer>
            <EditContainer>
              <Button color='outlined'>
                <Icon name='FaEdit' />
                Editar
              </Button>
            </EditContainer>
          </InfoContainer>
        </ProfileContainer>
        <WaifuContainer>
          <WaifuH1>Harem: </WaifuH1>
          <WaifuListContainer> {waifuFilter}</WaifuListContainer>
        </WaifuContainer>
      </Container>
    </>
  )
}
