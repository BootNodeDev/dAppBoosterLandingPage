import { useState } from 'react'
import styled, { css } from 'styled-components'

import { Item, breakpointMediaQuery } from 'db-ui-toolkit'

import { OptionsButton } from '@/src/components/pageComponents/home/Examples/demos/OptionsButton'
import { OptionsDropdown } from '@/src/components/pageComponents/home/Examples/demos/OptionsDropdown'
import ERC20ApproveAndTransferButtonDemo from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo/ERC20ApproveAndTransferButtonDemo'
import NativeTokenDemo from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo/NativeTokenDemo'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: var(--base-common-padding);
  width: 100%;

  ${breakpointMediaQuery(
    'desktopStart',
    css`
      padding-top: calc(var(--base-common-padding) * 3);
    `,
  )}
`

type Options = 'erc20' | 'native'

const TransactionButtonDemo = () => {
  const dropdownItems = [
    { label: 'ERC20 token (USDC)', type: 'erc20' },
    { label: 'ETH (Native)', type: 'native' },
  ]
  const [currentTokenInput, setCurrentTokenInput] = useState<Options>('erc20')

  return (
    <Wrapper>
      <OptionsDropdown
        button={
          <OptionsButton>
            {dropdownItems.find((item) => item.type === currentTokenInput)?.label}
          </OptionsButton>
        }
        defaultActiveItem={0}
        items={dropdownItems.map((item, index) => (
          <Item key={index} onClick={() => setCurrentTokenInput(item.type as Options)}>
            {item.label}
          </Item>
        ))}
      />
      {currentTokenInput === 'erc20' && <ERC20ApproveAndTransferButtonDemo />}
      {currentTokenInput === 'native' && <NativeTokenDemo />}
    </Wrapper>
  )
}

export default TransactionButtonDemo
