import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import { Modal, useModal } from '@faceless-ui/modal'
import { GeneralMessage as GeneralMessageBase } from 'db-ui-toolkit'

import { PrimaryButton } from '@/src/components/sharedComponents/Buttons'
import SignButtonBase from '@/src/components/sharedComponents/SignButton'

const message = `
👻🚀 Welcome to dAppBooster! 🚀👻

By signing this message, you acknowledge the awesome power and potential of dAppBooster.

Empower your dApps!

✨ Keep boosting! ✨

dAppBooster Team 💪
`

const GeneralMessage = styled(GeneralMessageBase)<{ status?: 'ok' | 'error' }>`
  ${({ status }) =>
    status === 'ok' &&
    css`
      --theme-general-message-icon-color: var(--theme-color-ok);
    `}
`

const Button = styled(PrimaryButton).attrs({ as: SignButtonBase })`
  font-size: 1.6rem;
  font-weight: 500;
  height: 48px;
  padding-left: calc(var(--base-common-padding) * 3);
  padding-right: calc(var(--base-common-padding) * 3);
`

const SignMessageDemo = () => {
  const [state, setState] = useState<{
    signature: string | null
    error: Error | null
  }>({
    error: null,
    signature: null,
  })
  const { closeModal, isModalOpen, openModal } = useModal()

  useEffect(() => {
    if (state.signature || state.error) {
      openModal('sign-message')
    }
  }, [state.signature, state.error, openModal])

  const onClose = () => {
    closeModal('sign-message')
    setState({ error: null, signature: null })
  }

  const dialogTitle = state.signature ? 'Success' : state.error ? 'Error' : ''
  const dialogMessage = (
    <>
      {state.signature ? (
        <>
          <b>Signature:</b> {state.signature}
        </>
      ) : state.error ? (
        <pre>{state.error.message}</pre>
      ) : (
        ''
      )}
    </>
  )
  const dialogButton = <PrimaryButton onClick={onClose}>Close</PrimaryButton>

  return (
    <>
      <Button
        message={message}
        onError={(error) => setState({ error, signature: null })}
        onSign={(signature) => setState({ error: null, signature })}
      />
      <Modal slug="sign-message">
        {isModalOpen('sign-message') && (
          <GeneralMessage
            actionButton={dialogButton}
            message={dialogMessage}
            status={state.error ? 'error' : 'ok'}
            title={dialogTitle}
          />
        )}
      </Modal>
    </>
  )
}

export default SignMessageDemo
