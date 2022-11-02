import { Container } from './styles'
import { Tag } from '../Tag'

export type TagItems = {
  idTag?: number
  content: any
}

export type TagListProps = React.ComponentPropsWithRef<typeof Container> &
  React.HTMLProps<HTMLDivElement> & {
    items: TagItems[]
  }

export function TagList({ items }: TagListProps) {
  return (
    <Container>
      {items?.map((item, idTag) => (
        <Tag key={idTag}>{item.content}</Tag>
      ))}
    </Container>
  )
}
