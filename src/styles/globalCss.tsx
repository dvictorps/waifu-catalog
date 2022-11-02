import { globalCss } from '../configs/stitches'

export function GlobalStyles({ children }) {
  const styledGlobal = globalCss({
    body: {
      margin: 0,
      padding: 0,
      height: '100%',
      '@md': { fontSize: '87.5%' }, // 87.5% -> 14px
      '@lg': { fontSize: '93.75%' }, // 87.5% -> 15px,
    },
    '*': { margin: 0, padding: 0, fontFamily: 'Poppins' },
  })

  return (
    <div>
      {styledGlobal()} {children}
    </div>
  )
}
