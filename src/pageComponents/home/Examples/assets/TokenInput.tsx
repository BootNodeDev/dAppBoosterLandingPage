import React, { HTMLAttributes } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;
`

const Icon: React.FC<HTMLAttributes<SVGElement>> = ({ ...restProps }) => (
  <Wrapper
    fill="none"
    height="20"
    viewBox="0 0 17 20"
    width="17"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M15.02 3.11684C13.8884 1.17715 12.3397 0.108398 10.6597 0.108398H6.15967C4.47967 0.108398 2.93092 1.17715 1.79936 3.11684C0.741856 4.92902 0.159668 7.32715 0.159668 9.8584C0.159668 12.3896 0.741856 14.7878 1.79936 16.6C2.93092 18.5396 4.47967 19.6084 6.15967 19.6084H10.6597C12.3397 19.6084 13.8884 18.5396 15.02 16.6C16.0775 14.7878 16.6597 12.3896 16.6597 9.8584C16.6597 7.32715 16.0775 4.92902 15.02 3.11684ZM15.14 9.1084H12.14C12.0814 7.56936 11.775 6.04985 11.2325 4.6084H14.1003C14.674 5.86277 15.0528 7.4209 15.14 9.1084ZM13.2087 3.1084H10.5153C10.202 2.56495 9.82429 2.0613 9.39029 1.6084H10.6597C11.5972 1.6084 12.4784 2.1709 13.2087 3.1084ZM1.65967 9.8584C1.65967 5.38652 3.72217 1.6084 6.15967 1.6084C8.59717 1.6084 10.6597 5.38652 10.6597 9.8584C10.6597 14.3303 8.59717 18.1084 6.15967 18.1084C3.72217 18.1084 1.65967 14.3303 1.65967 9.8584ZM10.6597 18.1084H9.39311C9.82711 17.6555 10.2048 17.1519 10.5181 16.6084H13.2115C12.4784 17.5459 11.5972 18.1084 10.6597 18.1084ZM14.1003 15.1084H11.2334C11.7759 13.6669 12.0823 12.1474 12.1409 10.6084H15.1409C15.0528 12.2959 14.674 13.854 14.1003 15.1084Z"
      fill="currentColor"
    />
  </Wrapper>
)

export default Icon
