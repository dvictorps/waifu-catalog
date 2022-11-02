import Link from 'next/link'

export type LinkModProps = React.ComponentPropsWithRef<typeof Link> &
  React.HTMLProps<HTMLDivElement> & {
    href: string
  }

export function LinkMod({ ref, children, href, ...props }: LinkModProps) {
  return (
    <Link href={href} passHref>
      {children}
    </Link>
  )
}
