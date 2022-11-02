import { Container } from './styles'
import Image from 'next/image'

export type AvatarProps = React.ComponentProps<typeof Container> & {
  src: string
  alt: string
}

export function Avatar({ src, alt }) {
  return (
    <Container>
      <Image
        src={src}
        alt={alt}
        width={50}
        height={50}
        style={{
          borderRadius: '100%',
        }}
      />
    </Container>
  )
}
