import { type FC, useState } from 'react'

import { arbitrum, mainnet, polygon } from 'viem/chains'

import Arbitrum from '@/src/pageComponents/home/Examples/demos/TokenDropdownDemo/assets/Arbitrum'
import Eth from '@/src/pageComponents/home/Examples/demos/TokenDropdownDemo/assets/Eth'
import Polygon from '@/src/pageComponents/home/Examples/demos/TokenDropdownDemo/assets/Polygon'
import TokenDropdown from '@/src/sharedComponents/TokenDropdown'
import { type Networks } from '@/src/sharedComponents/TokenSelect'
import { type Token } from '@/src/types/token'

const TokenDropdownDemo: FC = ({ ...restProps }) => {
  const [currentNetworkId, setCurrentNetworkId] = useState<number>(mainnet.id)
  const [currentToken, setCurrentToken] = useState<Token>()
  const networks: Networks = [
    {
      icon: <Eth />,
      id: mainnet.id,
      label: mainnet.name,
      onClick: () => setCurrentNetworkId(mainnet.id),
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

  const onTokenSelect = (token: Token | undefined) => {
    setCurrentToken(token)
  }

  return (
    <TokenDropdown
      currentNetworkId={currentNetworkId}
      currentToken={currentToken}
      networks={networks}
      onTokenSelect={onTokenSelect}
      showBalance
      showTopTokens
      {...restProps}
    />
  )
}

export default TokenDropdownDemo
