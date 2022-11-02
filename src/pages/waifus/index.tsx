import { WaifuCard } from '../../components'
import { Icon } from '../../components'
import { Button } from '../../components'
import { listData } from '../api/mock'
import { useState } from 'react'
import { Navbar } from '../../components'
import {
  Container,
  PageHeaderH1,
  SearchBar,
  SearchbarContainer,
  HeaderContainer,
  WaifuContainer,
} from './styles'

export default function Waifus({}) {
  const [searchTerm, setSearchTerm] = useState('')

  const waifuMapCard = listData.waifus
    .filter(waifu => {
      if (searchTerm == '') {
        return waifu
      } else if (waifu.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return waifu
      }
    })
    .map(waifu => {
      return (
        <WaifuCard
          link={`/waifus/${waifu.id}`}
          key={waifu.id}
          src={waifu.image}
          name={waifu.name}
        />
      )
    })

  return (
    <>
      <Navbar />
      <Container>
        <HeaderContainer>
          <PageHeaderH1>Waifu list</PageHeaderH1>
          <SearchbarContainer>
            <SearchBar
              type='text'
              placeholder='Search..'
              onChange={event => {
                setSearchTerm(event.target.value)
              }}
            />
            <Icon name='FaSearch' />
          </SearchbarContainer>
        </HeaderContainer>
        <WaifuContainer>{waifuMapCard}</WaifuContainer>
      </Container>
    </>
  )
}
