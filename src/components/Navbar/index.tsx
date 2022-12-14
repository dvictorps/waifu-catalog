import { SideBar, SideBarMobile } from './Parts'
import { BreakpointsEnum } from '../../enums/breakpoints'
import { useEffect, useState } from 'react'

export function Navbar({}) {
  type WindowDimentions = {
    width: number | undefined
    height: number | undefined
  }

  const useWindowDimensions = (): WindowDimentions => {
    const [windowDimensions, setWindowDimensions] = useState<WindowDimentions>({
      width: undefined,
      height: undefined,
    })
    useEffect(() => {
      function handleResize(): void {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return (): void => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount

    return windowDimensions
  }

  const { width } = useWindowDimensions()

  return <>{width < BreakpointsEnum.lg ? <SideBarMobile /> : <SideBar />}</>
}
