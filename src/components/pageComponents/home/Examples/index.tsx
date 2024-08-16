import { type FC, type HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { InnerContainer as Inner, ContainerPadding, breakpointMediaQuery } from 'db-ui-toolkit'

import { Props as ItemProps } from '@/src/components/pageComponents/home/Examples/Item'
import List from '@/src/components/pageComponents/home/Examples/List'
import ImgEns from '@/src/components/pageComponents/home/Examples/assets/Ens'
import ImgInputAddress from '@/src/components/pageComponents/home/Examples/assets/InputAddress'
import ImgSign from '@/src/components/pageComponents/home/Examples/assets/Sign'
import ImgSubgraph from '@/src/components/pageComponents/home/Examples/assets/Subgraph'
import ImgSubgraphStatus from '@/src/components/pageComponents/home/Examples/assets/SubgraphStatus'
import ImgSwitch from '@/src/components/pageComponents/home/Examples/assets/Switch'
import ImgTokenInput from '@/src/components/pageComponents/home/Examples/assets/TokenInput'
import ImgTokenList from '@/src/components/pageComponents/home/Examples/assets/TokenList'
import ImgTransaction from '@/src/components/pageComponents/home/Examples/assets/Transaction'
import ImgUserCheck from '@/src/components/pageComponents/home/Examples/assets/UserCheck'
import ImgWallet from '@/src/components/pageComponents/home/Examples/assets/Wallet'
import ERC20ApproveAndTransferButtonDemo from '@/src/components/pageComponents/home/Examples/demos/ERC20ApproveAndTransferButtonDemo'
import EnsNameDemo from '@/src/components/pageComponents/home/Examples/demos/EnsNameDemo'
import HashHandlingDemo from '@/src/components/pageComponents/home/Examples/demos/HashHandlingDemo'
import SignMessageDemo from '@/src/components/pageComponents/home/Examples/demos/SignMessageDemo'
import SubgraphDemo from '@/src/components/pageComponents/home/Examples/demos/SubgraphDemo'
import SubgraphStatusDemo from '@/src/components/pageComponents/home/Examples/demos/SubgraphStatusDemo'
import SwitchNetworkDemo from '@/src/components/pageComponents/home/Examples/demos/SwitchNetworkDemo'
import TokenDropdownDemo from '@/src/components/pageComponents/home/Examples/demos/TokenDropdownDemo'
import TokenInputDemo from '@/src/components/pageComponents/home/Examples/demos/TokenInputDemo'
import TransactionButtonDemo from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo'
import { ConnectWalletButton as ConnectWalletButtonDemo } from '@/src/providers/Web3Provider'

const Wrapper = styled.section`
  [data-theme='light'] & {
    --landing-page-main-background-color: #f7f7f7;
  }

  [data-theme='dark'] & {
    --landing-page-main-background-color: #2e3048;
  }

  background-color: var(--landing-page-main-background-color);
  flex-grow: 1;
`

const InnerContainer = styled(Inner)`
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 50px;

  ${breakpointMediaQuery(
    'tabletPortraitStart',
    css`
      padding-bottom: 100px;
      padding-top: 100px;
    `,
  )}

  ${ContainerPadding}
`

const Examples: FC<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => {
  const items: ItemProps[] = [
    {
      demo: <ConnectWalletButtonDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/index.html#md:wallet-setup',
      icon: <ImgWallet />,
      text: (
        <>
          Connect to and disconnect from a cryptocurrency wallet, display your{' '}
          <a
            href="https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_Avatar.Avatar.html"
            rel="noreferrer"
            target="_blank"
          >
            avatar
          </a>{' '}
          and address.
        </>
      ),
      title: 'Wallet connectivity',
    },
    {
      demo: <HashHandlingDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_Hash.Hash.html',
      icon: <ImgInputAddress />,
      text: (
        <>
          Validate an address or hash. Copy or open it in the block explorer for the chain your
          wallet is connected to (defaults to mainnet).
        </>
      ),
      title: 'Hash handling',
    },
    {
      demo: <TokenDropdownDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_TokenDropdown.TokenDropdown.html',
      icon: <ImgTokenList />,
      text: (
        <>
          Allows you to search or select tokens from a list. Uses oure{' '}
          <a
            href="https://bootnodedev.github.io/dAppBooster/variables/sharedComponents_TokenSelect.TokenSelect.html"
            rel="noreferrer"
            target="_blank"
          >
            TokenSelect
          </a>{' '}
          component internally.
        </>
      ),
      title: 'Token dropdown',
    },
    {
      demo: <TokenInputDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_TokenInput.TokenInput.html',
      icon: <ImgTokenInput />,
      text: 'Input with max, user balance, decimals',
      title: 'Token input',
    },
    {
      demo: <SwitchNetworkDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_SwitchNetwork.SwitchNetwork.html',
      icon: <ImgSwitch />,
      text: 'Learn how to add or switch networks in supported wallets.',
      title: 'Add / switch network',
    },

    {
      demo: <SubgraphDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster#subgraphs',
      icon: <ImgSubgraph />,
      text: 'Connect to subgraphs and fetch data from the blockchain the easy way.',
      title: 'Subgraphs',
    },
    {
      demo: <SubgraphStatusDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster#subgraphs',
      icon: <ImgSubgraphStatus />,
      text: 'Easily check subgraph syncing status.',
      title: 'Subgraph status',
    },
    {
      demo: <EnsNameDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/86a7b001d4e48b41b3a463f844a83f632eae8c39/src/pageComponents/home/Examples/demos/EnsNameDemo.tsx#L63',
      icon: <ImgEns />,
      text: (
        <>
          Resolve{' '}
          <a href="https://ens.domains/" rel="noreferrer" target="_blank">
            ENS
          </a>{' '}
          names
        </>
      ),
      title: 'ENS name',
    },
    {
      demo: <TransactionButtonDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_TransactionButton.TransactionButton.html',
      icon: <ImgTransaction />,
      text: 'Send tokens from / to your address',
      title: 'Tx button',
    },
    {
      demo: <ERC20ApproveAndTransferButtonDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/86a7b001d4e48b41b3a463f844a83f632eae8c39/src/pageComponents/home/Examples/demos/ERC20ApproveAndTransferButtonDemo/ERC20ApproveAndTransferButton.tsx#L33',
      icon: <ImgUserCheck />,
      text: 'Checks allowance and combines the approval and transaction buttons into one component',
      title: 'ERC20 approve and transfer',
    },
    {
      demo: <SignMessageDemo />,
      href: 'https://bootnodedev.github.io/dAppBooster/functions/sharedComponents_SignButton.SignButton.html',
      icon: <ImgSign />,
      text: 'Sign a message and get the signature',
      title: 'Sign button',
    },
  ]

  return (
    <Wrapper id="examples" {...restProps}>
      <InnerContainer>
        <List items={items} />
      </InnerContainer>
    </Wrapper>
  )
}

export default Examples
