import { type FC, type HTMLAttributes } from 'react'
import styled from 'styled-components'

import AddERC20TokenButton from '@/src/sharedComponents/AddERC20TokenButton'
import { SecondaryButton } from '@/src/sharedComponents/Buttons'
import TokenLogo from '@/src/sharedComponents/TokenLogo'
import TokenBalance, { Balance, Value } from '@/src/sharedComponents/TokenSelect/List/TokenBalance'
import { type Token } from '@/src/types/token'

const Name = styled.div.attrs(({ className = 'tokenSelectRowName' }) => {
  return { className }
})`
  color: var(--theme-token-select-row-token-name-color-default);
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;
`

const Wrapper = styled.div.attrs(({ className = 'tokenSelectListRow', tabIndex = 0 }) => {
  return {
    tabIndex,
    className,
  }
})`
  --theme-token-select-row-background-color-default: var(
    --theme-token-select-row-background-color,
    transparent
  );
  --theme-token-select-row-background-color-hover-default: var(
    --theme-token-select-row-background-color-hover,
    rgb(0 0 0 / 5%)
  );
  --theme-token-select-row-token-name-color-default: var(
    --theme-token-select-row-token-name-color,
    #2e3048
  );
  --theme-token-select-row-token-balance-color-default: var(
    --theme-token-select-row-token-balance-color,
    #2e3048
  );
  --theme-token-select-row-token-value-color-default: var(
    --theme-token-select-row-token-value-color,
    #2e3048
  );

  align-items: center;
  background-color: var(--theme-token-select-row-background-color-default);
  column-gap: var(--base-gap-xl);
  cursor: pointer;
  display: flex;
  height: 100%;
  padding-left: calc(var(--base-token-select-horizontal-padding) + var(--base-common-padding));
  padding-right: calc(var(--base-token-select-horizontal-padding) + var(--base-common-padding));
  transition: background-color var(--base-transition-duration-sm) ease-in-out;
  width: 100%;

  &:hover {
    background-color: var(--theme-token-select-row-background-color-hover-default);

    ${Name} {
      color: var(
        --theme-token-select-row-token-name-color-hover,
        var(--theme-token-select-row-token-name-color-default)
      );
    }

    ${Balance} {
      color: var(
        --theme-token-select-row-token-balance-color-hover,
        var(--theme-token-select-row-token-balance-color-default)
      );
    }

    ${Value} {
      color: var(
        --theme-token-select-row-token-value-color-hover,
        var(--theme-token-select-row-token-value-color-default)
      );
    }
  }

  &:active {
    opacity: 0.8;
  }
`

const RightColumn = styled.div`
  margin-left: auto;
`

const Icon = styled.div.attrs<{ size: number }>(({ className = 'tokenSelectRowIcon' }) => {
  return {
    className,
  }
})`
  align-items: center;
  border-radius: 50%;
  display: flex;
  height: ${({ size }) => size}px;
  justify-content: center;
  overflow: hidden;
  width: ${({ size }) => size}px;
`

const Button = styled(SecondaryButton)`
  font-size: 1.1rem;
  height: 21px;
  padding: 0 var(--base-common-padding);
`

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  iconSize: number
  isLoadingBalances?: boolean
  onClick: (token: Token) => void
  showAddTokenButton?: boolean
  showBalance?: boolean
  token: Token
}

/**
 * @name Row
 * @description A row in the token select list.
 *
 * @param {Token} token - The token to display.
 * @param {number} iconSize - The size of the token icon.
 * @param {(token: Token) => void} onClick - Callback function to be called when the row is clicked.
 * @param {boolean} showAddTokenButton - Whether to display an add token button.
 * @param {boolean} [showBalance=false] - Optional flag to show the token balance. Default is false.
 * @param {boolean} [showBalance=false] - Optional flag to inform the balances are being loaded. Default is false.
 */
const Row: FC<Props> = ({
  iconSize,
  isLoadingBalances,
  onClick,
  showAddTokenButton,
  showBalance,
  token,
  ...restProps
}) => {
  const { name } = token

  return (
    <Wrapper onClick={() => onClick(token)} {...restProps}>
      <Icon size={iconSize}>
        <TokenLogo size={iconSize} token={token} />
      </Icon>
      <Name>{name}</Name>
      {showAddTokenButton && (
        <AddERC20TokenButton $token={token} as={Button}>
          Add token
        </AddERC20TokenButton>
      )}
      {showBalance && (
        <RightColumn>
          <TokenBalance isLoading={isLoadingBalances} token={token} />
        </RightColumn>
      )}
    </Wrapper>
  )
}

export default Row
