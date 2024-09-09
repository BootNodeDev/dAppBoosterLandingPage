import { useState } from 'react'
import styled, { css } from 'styled-components'

import { Item, breakpointMediaQuery } from '@bootnodedev/db-ui-toolkit'
import { arbitrum, mainnet, polygon, optimism } from 'viem/chains'

import { OptionsButton } from '@/src/components/pageComponents/home/Examples/demos/OptionsButton'
import { OptionsDropdown } from '@/src/components/pageComponents/home/Examples/demos/OptionsDropdown'
import Arbitrum from '@/src/components/pageComponents/home/Examples/demos/assets/Arbitrum'
import Eth from '@/src/components/pageComponents/home/Examples/demos/assets/Eth'
import Optimism from '@/src/components/pageComponents/home/Examples/demos/assets/Optimism'
import Polygon from '@/src/components/pageComponents/home/Examples/demos/assets/Polygon'
import TokenInput from '@/src/components/sharedComponents/TokenInput'
import { useTokenInput } from '@/src/components/sharedComponents/TokenInput/useTokenInput'
import { type Networks } from '@/src/components/sharedComponents/TokenSelect/types'
import { useTokenLists } from '@/src/hooks/useTokenLists'
import { useTokenSearch } from '@/src/hooks/useTokenSearch'
import { useWeb3Status } from '@/src/hooks/useWeb3Status'

const Wrapper = styled.div`
  max-width: 100%;
  padding-top: var(--base-common-padding);

  ${breakpointMediaQuery(
    'desktopStart',
    css`
      padding-top: calc(var(--base-common-padding) * 3);
    `,
  )}
`

type Options = 'single' | 'multi'

/**
 * This demo uses the TokenInput component to show how to use it in a single
 * token or multi token mode.
 */
const TokenInputDemo = () => {
  const { isWalletConnected } = useWeb3Status()
  const [currentNetworkId, setCurrentNetworkId] = useState<number>()
  const { tokensByChainId } = useTokenLists()
  const { searchResult } = useTokenSearch({ tokens: tokensByChainId[1], defaultSearchTerm: 'WETH' })
  const tokenInputMulti = useTokenInput()
  const tokenInputSingle = useTokenInput(searchResult[0])

  const networks: Networks = [
    {
      icon: <Eth />,
      id: mainnet.id,
      label: mainnet.name,
      onClick: () => setCurrentNetworkId(mainnet.id),
    },
    {
      icon: <Optimism />,
      id: optimism.id,
      label: optimism.name,
      onClick: () => setCurrentNetworkId(optimism.id),
    },
    {
      icon: <Arbitrum />,
      id: arbitrum.id,
      label: arbitrum.name,
      onClick: () => setCurrentNetworkId(arbitrum.id),
    },
    {
      icon: <Polygon />,
      id: polygon.id,
      label: polygon.name,
      onClick: () => setCurrentNetworkId(polygon.id),
    },
  ]

  // useEffect(() => {
  //   currentToken && console.log(currentToken)
  //   amount && console.log(amount)
  //   error && console.log(error)
  // }, [currentToken, amount, error])

  const dropdownItems = [
    { label: 'Single token', type: 'single' },
    { label: 'Multi token', type: 'multi' },
  ]
  const [currentTokenInput, setCurrentTokenInput] = useState<Options>('single')

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

      {currentTokenInput === 'multi' && (
        <TokenInput
          currentNetworkId={currentNetworkId}
          networks={networks}
          showAddTokenButton
          showBalance={isWalletConnected}
          showTopTokens
          title="You pay"
          tokenInput={tokenInputMulti}
        />
      )}
      {currentTokenInput === 'single' && (
        <TokenInput
          currentNetworkId={currentNetworkId}
          networks={networks}
          showAddTokenButton
          showBalance={isWalletConnected}
          showTopTokens
          singleToken
          title="You pay"
          tokenInput={tokenInputSingle}
        />
      )}
    </Wrapper>
  )
}

export default TokenInputDemo
