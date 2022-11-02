import { Navbar } from '../../../components'
import {
  Container,
  PageHeaderContainer,
  ImageContainer,
  TagListContainer,
  TagListText,
  ButtonContainer,
} from './styles'
import Image from 'next/image'
import { TagList } from '../../../components/Tags/TagList'
import { listData } from '../../api/mock'
import { Button } from '../../../components'

//const reqValue = listData.waifus[6]

export const getStaticProps = async ({ params }) => {
  const waifus = listData.waifus.filter(waifu => waifu.id.toString() === params.id)
  return {
    props: {
      waifu: waifus[0],
    },
  }
}

export const getStaticPaths = async () => {
  const paths = listData.waifus.map(waifu => ({ params: { id: waifu.id.toString() } }))
  return { paths, fallback: false }
}

export default function Waifu({ waifu }) {
  return (
    <>
      <Navbar />
      <Container>
        <PageHeaderContainer>
          <h1>{waifu.name}</h1>
          <ImageContainer>
            <Image
              src={waifu.image}
              alt=''
              layout='responsive'
              objectFit='cover'
              width={'100%'}
              height={'100%'}
              style={{
                borderRadius: '25px',
              }}
            />
          </ImageContainer>
        </PageHeaderContainer>
        <TagListContainer>
          <TagListText>Tags</TagListText>
          <TagList items={waifu.tags} />
        </TagListContainer>
        <ButtonContainer>
          <TagListText>
            {waifu.name} já foi adicionada 0 vezes em listas pessoais
          </TagListText>
          <Button color='secondary'>Adicionar a lista</Button>
        </ButtonContainer>
      </Container>
    </>
  )
}
