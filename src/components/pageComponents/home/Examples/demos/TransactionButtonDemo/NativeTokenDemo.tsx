import { useState, type ReactElement } from 'react'
import styled, { css } from 'styled-components'

import { useDialog, GeneralMessage as GeneralMessageBase } from 'db-ui-toolkit'
import { type Hash, type TransactionReceipt, parseEther } from 'viem'
import { sepolia } from 'viem/chains'
import { useSendTransaction } from 'wagmi'

import Wrapper from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo/Wrapper'
import { PrimaryButton } from '@/src/components/sharedComponents/Buttons'
import TransactionButton from '@/src/components/sharedComponents/TransactionButton'
import { withWalletStatusVerifier } from '@/src/components/sharedComponents/WalletStatusVerifier'
import { useWeb3StatusConnected } from '@/src/hooks/useWeb3Status'

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
        <Wrapper
          text="Demo transaction that sends 0.1 Sepolia ETH from / to your wallet."
          title="Native token demo"
        >
          <PrimaryButton
            as={TransactionButton}
            labelSending="Sending 0.1 ETH..."
            onMined={handleOnMined}
            transaction={handleSendTransaction}
          >
            Send 0.1 Sepolia ETH
          </PrimaryButton>
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
