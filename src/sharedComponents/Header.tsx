import { type FC, type HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Link } from '@tanstack/react-router'
import {
  InnerContainer,
  Header as BaseHeader,
  Logo,
  ContainerPadding,
  SwitchThemeButton,
} from 'db-ui-toolkit'
import { useTheme } from 'next-themes'

import { ConnectWalletButton } from '@/src/providers/Web3Provider'
import { MainMenu } from '@/src/sharedComponents/MainMenu'

/**
 * Note: you can remove all the custom styles and just use the default Header
 * component from db-ui-toolkit (or just create your own)
 */
const Wrapper = styled(BaseHeader)`
  height: var(--base-header-height);
  padding-top: 14px;
  position: relative;
  z-index: 10;
`

const Inner = styled(InnerContainer)`
  align-items: center;
  height: 100%;
  justify-content: space-between;

  ${ContainerPadding}
`

const Start = styled.div`
  flex: 1;
`

const HomeLink = styled(Link)`
  &:active {
    opacity: 0.7;
  }
`

const Menu = styled(MainMenu)`
  display: flex;
  justify-content: center;
  flex: 1;
`

const End = styled.div`
  align-items: center;
  column-gap: calc(var(--base-gap) * 3);
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
`

export const Header: FC<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => {
  const { setTheme, theme } = useTheme()

  return (
    <Wrapper {...restProps}>
      <Inner>
        <Start>
          <HomeLink to="/">
            <Logo />
          </HomeLink>
        </Start>
        <Menu />
        <End>
          <SwitchThemeButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <ConnectWalletButton />
        </End>
      </Inner>
    </Wrapper>
  )
}
