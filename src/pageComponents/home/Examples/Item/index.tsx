import React, { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  [data-theme='light'] & {
    --theme-examples-item-background-color: #f7f7f7;
  }

  [data-theme='dark'] & {
    --theme-examples-item-background-color: #2e3048;
  }

  background-color: var(--theme-examples-item-background-color);
  border-radius: var(--base-border-radius);
  display: flex;
  gap: calc(var(--base-gap) * 2);
  max-width: 100%;
  padding: calc(var(--base-gap) * 2) calc(var(--base-gap) * 2) calc(var(--base-gap) * 2)
    calc(var(--base-gap) * 4);
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: calc(var(--base-gap) * 2) 0 0;
  row-gap: var(--base-gap);
`

const Icon = styled.div`
  --icon-size: 40px;

  align-items: center;
  background-color: var(--theme-color-primary);
  border-radius: 50%;
  color: #fff;
  display: flex;
  height: var(--icon-size);
  justify-content: center;
  width: var(--icon-size);
`

const Title = styled.h2`
  color: var(--theme-color-text-primary);
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.4;
  margin: 0;
`

const Text = styled.p`
  color: var(--theme-color-text-primary);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.4;
  margin: 0;
`

const Demo = styled.div`
  align-items: center;
  background-color: var(--theme-examples-list-background-color);
  border-radius: var(--base-border-radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 205px;
  padding: calc(var(--base-gap) * 3);
  flex: 1;
`

export interface Props extends HTMLAttributes<HTMLDivElement> {
  demo: React.ReactNode
  href: string
  icon: React.ReactNode
  text: string
  title: string
}

const Item: React.FC<Props> = ({ demo, href, icon, text, title, ...restProps }) => {
  return (
    <Wrapper {...restProps}>
      <Info>
        <Icon>{icon}</Icon>
        <Title>{title}</Title>
        <Text>{text}</Text>
        <a href={href}>Documentation</a>
      </Info>
      <Demo>{demo}</Demo>
    </Wrapper>
  )
}

export default Item
