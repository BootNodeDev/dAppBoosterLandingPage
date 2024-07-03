import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import Row from '@/src/sharedComponents/TokenSelect/List/Row'
import VirtualizedList from '@/src/sharedComponents/VirtualizedList'
import { type Token, type Tokens } from '@/src/types/token'
import { withSuspense } from '@/src/utils/suspenseWrapper'

const Wrapper = styled.div.attrs(({ className = 'tokenSelectList' }) => ({ className }))`
  --theme-token-select-list-border-top-color-default: var(
    --theme-token-select-list-border-top-color,
    #e2e0e7
  );

  border-top: 1px solid var(--theme-token-select-list-border-top-color-default);
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  containerHeight: number
  iconSize: number
  itemHeight: number
  onTokenSelect: (token: Token | undefined) => void
  showBalance?: boolean
  showValue?: boolean
  tokenList: Tokens
}

/**
 * @name List
 * @description List component for TokenSelect. Displays a list of tokens.
 *
 * @param {number} containerHeight - The height of the virtualized list container.
 * @param {number} iconSize - The size of the token icon for each item in the list.
 * @param {number} itemHeight - The height of each item in the list.
 * @param {function} onTokenSelect - Callback function to be called when a token is selected.
 * @param {boolean} [showBalance] - Optional flag to show the token balance in the list.
 * @param {boolean} [showValue] - Optional flag to show the token value in the list.
 * @param {Tokens} tokenList - The list of tokens to display.
 */
const List = withSuspense(
  ({
    className,
    containerHeight,
    iconSize,
    itemHeight,
    onTokenSelect,
    showBalance,
    showValue,
    style,
    tokenList,
    ...restProps
  }: Props) => {
    return (
      <Wrapper className={`${className ? className : ''}`.trim()} style={style}>
        <VirtualizedList<Token>
          containerHeight={containerHeight}
          itemHeight={itemHeight}
          items={tokenList}
          renderItem={(item) => (
            <Row
              iconSize={iconSize}
              onClick={(token) => onTokenSelect(token)}
              showBalance={showBalance}
              showValue={showValue}
              token={item}
            />
          )}
          {...restProps}
        />
      </Wrapper>
    )
  },
)

export default List
