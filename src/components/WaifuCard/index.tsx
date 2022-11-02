import { Container, ImageContainer, ImageH1 } from './styles'
import Image from 'next/image'
import { LinkMod } from '../LinkMod'

export type WaifuContainerProps = React.ComponentPropsWithRef<typeof Container> &
  React.HTMLProps<HTMLDivElement> & {
    src: string
    name: string
    link: string
  }

export function WaifuCard({ ref, name, link, src }: WaifuContainerProps) {
  return (
    <Container ref={ref}>
      <ImageContainer>
        <LinkMod href={link}>
          <Image
            src={src}
            alt={name}
            objectFit='cover'
            layout='responsive'
            width={'100%'}
            height={'100%'}
            style={{ borderRadius: '25px' }}
          />
        </LinkMod>
        <ImageH1>{name}</ImageH1>
      </ImageContainer>
    </Container>
  )
}
