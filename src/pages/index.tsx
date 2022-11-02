import Image from 'next/image'
import { Navbar } from '../components'
import {
  Container,
  PageH1,
  PageP,
  PageHeader,
  ImageContainer,
  TextContainer,
  CountContainer,
  TextCountContainer,
  CountH1data,
} from './styles'

import { listData } from './api/mock'

export default function Home() {
  const waifuList = listData.waifus
  const waifuNumber = waifuList.length

  return (
    <>
      <Navbar />
      <Container>
        <PageHeader>
          <TextContainer>
            <PageH1>Seja Bem Vindo ao Waifu Catalog</PageH1>
            <PageP>
              Escolha e monte o seu harem com as mais variadas Waifus de diferentes
              mundos. Sinta-se livre para montar a sua lista procurando por universo e/ou
              por obra. Na página de Waifu List, procure pelo catálogo todas as que
              desejar. Caso tenha uma conta, verifique a sua lista utilizando a página My
              Waifus.
            </PageP>
          </TextContainer>
        </PageHeader>
        <CountContainer>
          <ImageContainer>
            <Image
              src='/images/eris.jpg'
              alt=''
              layout='responsive'
              width={'300'}
              height={'500'}
              style={{ borderRadius: '50%' }}
            />
          </ImageContainer>
          <TextCountContainer>
            <CountH1data>Há um total de {waifuNumber} Waifus disponíveis</CountH1data>
            <CountH1data> 0 Waifus já foram adicionadas em listas pessoais</CountH1data>
          </TextCountContainer>
        </CountContainer>
      </Container>
    </>
  )
}
