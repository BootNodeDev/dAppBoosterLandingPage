import styled, { css } from 'styled-components'

import { ExternalLink, useDialog, GeneralMessage as GeneralMessageBase } from 'db-ui-toolkit'
import { type Address, formatUnits } from 'viem'
import { sepolia } from 'viem/chains'
import { useWriteContract } from 'wagmi'

import ERC20ApproveAndTransferButton from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo/ERC20ApproveAndTransferButtonDemo/ERC20ApproveAndTransferButton'
import Wrapper from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo/Wrapper'
import { PrimaryButton } from '@/src/components/sharedComponents/Buttons'
import { withWalletStatusVerifier } from '@/src/components/sharedComponents/WalletStatusVerifier'
import { useSuspenseReadErc20BalanceOf } from '@/src/hooks/generated'
import { useWeb3StatusConnected } from '@/src/hooks/useWeb3Status'
import { type Token } from '@/src/types/token'
import { formatNumberOrString, NumberType } from '@/src/utils/numberFormat'
import { withSuspense } from '@/src/utils/suspenseWrapper'

const GeneralMessage = styled(GeneralMessageBase)<{ status?: 'ok' | 'error' }>`
  ${({ status }) =>
    status === 'ok' &&
    css`
      --theme-general-message-icon-color: var(--theme-color-ok);
    `}
`

const Button = styled(PrimaryButton)`
  margin: 0 auto;
  width: 100%;
`

const ExternalLinkIcon = () => (
  <svg fill="none" height="15" viewBox="0 0 15 15" width="15" xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M3.41669 4.58329C3.26198 4.58329 3.1136 4.64475 3.00421 4.75415C2.89481 4.86354 2.83335 5.01192 2.83335 5.16663V11.5833C2.83335 11.738 2.89481 11.8864 3.00421 11.9958C3.1136 12.1052 3.26198 12.1666 3.41669 12.1666H9.83335C9.98806 12.1666 10.1364 12.1052 10.2458 11.9958C10.3552 11.8864 10.4167 11.738 10.4167 11.5833V8.08329C10.4167 7.76113 10.6779 7.49996 11 7.49996C11.3222 7.49996 11.5834 7.76113 11.5834 8.08329V11.5833C11.5834 12.0474 11.399 12.4925 11.0708 12.8207C10.7426 13.1489 10.2975 13.3333 9.83335 13.3333H3.41669C2.95256 13.3333 2.50744 13.1489 2.17925 12.8207C1.85106 12.4925 1.66669 12.0474 1.66669 11.5833V5.16663C1.66669 4.7025 1.85106 4.25738 2.17925 3.92919C2.50744 3.601 2.95256 3.41663 3.41669 3.41663H6.91669C7.23885 3.41663 7.50002 3.67779 7.50002 3.99996C7.50002 4.32213 7.23885 4.58329 6.91669 4.58329H3.41669Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M8.66669 2.24996C8.66669 1.92779 8.92785 1.66663 9.25002 1.66663H12.75C13.0722 1.66663 13.3334 1.92779 13.3334 2.24996V5.74996C13.3334 6.07213 13.0722 6.33329 12.75 6.33329C12.4279 6.33329 12.1667 6.07213 12.1667 5.74996V2.83329H9.25002C8.92785 2.83329 8.66669 2.57213 8.66669 2.24996Z"
      fill="currentColor"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M13.1625 1.83748C13.3903 2.06529 13.3903 2.43463 13.1625 2.66244L6.74581 9.07911C6.51801 9.30691 6.14866 9.30691 5.92085 9.07911C5.69305 8.8513 5.69305 8.48195 5.92085 8.25415L12.3375 1.83748C12.5653 1.60967 12.9347 1.60967 13.1625 1.83748Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

// USDC token on Sepolia chain
const tokenUSDC_sepolia: Token = {
  address: '0x94a9d9ac8a22534e3faca9f4e7f2e2cf85d5e4c8',
  chainId: sepolia.id,
  decimals: 6,
  name: 'USD Coin',
  symbol: 'USDC',
}

// Using the AAVE staging contract pool apply function
const ABIExample = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'asset',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'onBehalfOf',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'referralCode',
        type: 'uint16',
      },
    ],
    name: 'supply',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

/**
 * This demo shows how to approve and send an ERC20 token transaction using the `TransactionButton` component.
 *
 * Works only on Sepolia chain.
 */
const ERC20ApproveAndTransferButtonDemo = withWalletStatusVerifier(
  withSuspense(() => {
    const { Dialog, close, open } = useDialog()
    const { address } = useWeb3StatusConnected()
    const { writeContractAsync } = useWriteContract()

    const { data: balance } = useSuspenseReadErc20BalanceOf({
      address: tokenUSDC_sepolia.address as Address,
      args: [address],
    })

    // AAVE staging contract pool address
    const spender = '0x6Ae43d3271ff6888e7Fc43Fd7321a503ff738951'

    const amount = 10000000000n // 10,000.00 USDC

    const handleTransaction = () =>
      writeContractAsync({
        abi: ABIExample,
        address: spender,
        functionName: 'supply',
        args: [tokenUSDC_sepolia.address as Address, amount, address, 0],
      })

    const formattedAmount = formatNumberOrString(
      formatUnits(amount, tokenUSDC_sepolia.decimals),
      NumberType.TokenTx,
    )

    return (
      <>
        {balance < amount ? (
          <Wrapper
            text={`Get ${formattedAmount} Sepolia USDC to proceed`}
            title={'Not enough USDC'}
          >
            <Button as={ExternalLink} href="https://staging.aave.com/faucet/">
              Sepolia USDC faucet <ExternalLinkIcon />
            </Button>
          </Wrapper>
        ) : (
          <ERC20ApproveAndTransferButton
            amount={amount}
            label={`Supply ${formattedAmount} USDC`}
            labelSending="Sending..."
            onSuccess={() => open('approve-and-transfer')}
            spender={spender}
            token={tokenUSDC_sepolia}
            transaction={handleTransaction}
          />
        )}
        <Dialog id="approve-and-transfer">
          <GeneralMessage
            actionButton={
              <PrimaryButton onClick={() => close('approve-and-transfer')}>Close</PrimaryButton>
            }
            message={'Approve and supply completed! 🎉'}
            status={'ok'}
            title={'Success'}
          />
        </Dialog>
      </>
    )
  }),
  { chainId: sepolia.id }, // this DEMO component only works on sepolia chain
)

export default ERC20ApproveAndTransferButtonDemo
