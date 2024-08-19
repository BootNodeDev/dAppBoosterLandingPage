import { useState, type ReactElement } from 'react'
import styled, { css } from 'styled-components'

import { useDialog, GeneralMessage as GeneralMessageBase } from 'db-ui-toolkit'
import { type Hash, type TransactionReceipt, parseEther } from 'viem'
import { sepolia } from 'viem/chains'
import { useSendTransaction } from 'wagmi'

import { PrimaryButton } from '@/src/components/sharedComponents/Buttons'
import TransactionButton from '@/src/components/sharedComponents/TransactionButton'
import { withWalletStatusVerifier } from '@/src/components/sharedComponents/WalletStatusVerifier'
import { useWeb3StatusConnected } from '@/src/hooks/useWeb3Status'

const Wrapper = styled.div`
  display: grid;
  row-gap: var(--base-gap-xl);
`

const Button = styled(PrimaryButton).attrs({ as: TransactionButton })`
  font-size: 1.6rem;
  font-weight: 500;
  height: 48px;
  padding-left: calc(var(--base-common-padding) * 3);
  padding-right: calc(var(--base-common-padding) * 3);
`

const GeneralMessage = styled(GeneralMessageBase)<{ status?: 'ok' | 'error' }>`
  ${({ status }) =>
    status === 'ok' &&
    css`
      --theme-general-message-icon-color: var(--theme-color-ok);
    `}
`

/**
 * This demo shows how to send a native token transaction.
 *
 * Works only on Sepolia chain.
 */
const NativeTokenDemo = withWalletStatusVerifier(
  () => {
    const { Dialog, close, open } = useDialog()
    const { address } = useWeb3StatusConnected()
    const { sendTransactionAsync } = useSendTransaction()
    const [minedMessage, setMinedMessage] = useState<string | ReactElement>()

    const handleOnMined = (receipt: TransactionReceipt) => {
      setMinedMessage(
        <>
          <b>Hash:</b> <span>{receipt.transactionHash}</span>
        </>,
      )
      open('tx-dialog')
    }

    const handleSendTransaction = (): Promise<Hash> => {
      // Send native token
      return sendTransactionAsync({
        to: address,
        value: parseEther('0.1'),
      })
    }

    return (
      <>
        <Wrapper>
          <Button
            labelSending="Sending 0.1 ETH..."
            onMined={handleOnMined}
            transaction={handleSendTransaction}
          >
            Send 0.1 ETH
          </Button>
        </Wrapper>
        <Dialog id="tx-dialog">
          <GeneralMessage
            actionButton={
              <PrimaryButton
                onClick={() => {
                  close('tx-dialog')
                  setMinedMessage('')
                }}
              >
                Close
              </PrimaryButton>
            }
            message={minedMessage}
            status={'ok'}
            title={'Transaction completed!'}
          />
        </Dialog>
      </>
    )
  },
  {
    chainId: sepolia.id, // this DEMO component only works on sepolia chain
  },
)

export default NativeTokenDemo
