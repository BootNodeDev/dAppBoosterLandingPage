import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Dropdown, Item as BaseItem } from 'db-ui-toolkit'

import { type Networks } from '@/src/sharedComponents/TokenSelect'
import SearchInput from '@/src/sharedComponents/TokenSelect/Search/Input'
import NetworkButton from '@/src/sharedComponents/TokenSelect/Search/NetworkButton'

const Wrapper = styled.div.attrs(({ className = 'tokenSelectSearchWrapper' }) => ({ className }))`
  display: flex;
  column-gap: var(--base-gap);
  height: 72px;
  padding: 0 calc(var(--base-common-padding) * 2);

  .dbuitkDropdownButton {
    height: 100%;
  }
`

const Item = styled(BaseItem)`
  font-size: 1.6rem;
  min-height: 48px;
  width: 250px;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentNetworkId: number
  networks?: Networks
  placeholder: string
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const TokenSelect: React.FC<Props> = ({
  currentNetworkId,
  networks,
  placeholder,
  searchTerm,
  setSearchTerm,
  ...restProps
}) => {
  return (
    <Wrapper {...restProps}>
      <SearchInput
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        value={searchTerm}
      />
      {networks && networks.length > 1 && (
        <Dropdown
          button={
            <NetworkButton>
              {networks.find((item) => item.id === currentNetworkId)?.icon}
            </NetworkButton>
          }
          highlightItem
          items={networks.map(({ icon, label, onClick }, index) => (
            <Item key={index} onClick={onClick}>
              {icon}
              {label}
            </Item>
          ))}
          position="right"
        />
      )}
    </Wrapper>
  )
}

export default TokenSelect
