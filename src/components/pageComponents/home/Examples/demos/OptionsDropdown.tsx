import styled from 'styled-components'

import { Dropdown } from 'db-ui-toolkit'

export const OptionsDropdown = styled(Dropdown).attrs(() => {
  return {
    position: 'right',
  }
})`
  position: absolute;
  top: 10px;
  right: calc(var(--base-gap) + var(--base-gap-sm));
`
