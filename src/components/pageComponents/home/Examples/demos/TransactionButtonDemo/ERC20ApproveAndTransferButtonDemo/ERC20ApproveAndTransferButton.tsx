import { type FC } from 'react'
import styled from 'styled-components'

import { type Address, type TransactionReceipt, type Hash, erc20Abi } from 'viem'
import * as chains from 'viem/chains'
import { useWriteContract } from 'wagmi'

import Wrapper from '@/src/components/pageComponents/home/Examples/demos/TransactionButtonDemo/Wrapper'
import { PrimaryButton } from '@/src/components/sharedComponents/Buttons'
import TransactionButton from '@/src/components/sharedComponents/TransactionButton'
import { useSuspenseReadErc20Allowance } from '@/src/hooks/generated'
import { useWeb3StatusConnected, useWeb3Status } from '@/src/hooks/useWeb3Status'
import { type Token } from '@/src/types/token'
import { getExplorerLink } from '@/src/utils/getExplorerLink'

const Button = styled(PrimaryButton).attrs({ as: TransactionButton })`
  font-size: 1.6rem;
  font-weight: 500;
  height: 48px;
  padding-left: calc(var(--base-common-padding) * 3);
  padding-right: calc(var(--base-common-padding) * 3);
`

interface Props {
  amount: bigint
  disabled?: boolean
  label?: string
  labelSending?: string
  onSuccess?: (receipt: TransactionReceipt) => void
  spender: Address
  token: Token
  transaction: () => Promise<Hash>
}

/**
 * Dynamically renders either an approval button or a transaction button based on the user's current token allowance.
 * After the approval, the transaction button will be rendered.
 *
 * @dev Use with <Suspense> to add an skeleton loader while fetching the allowance.
 *
 * @param {Props}
 * @param {Token} props.token - The token to be approved.
 * @param {Address} props.spender - The address of the spender to be approved.
 * @param {bigint} props.amount - The amount of tokens to approve (or send).
 * @param {Function} props.onMined - The callback function to be called when transaction is mined.
 * @param {boolean} props.disabled - The flag to disable the button.
 * @param {Function} props.transaction - The transaction function that send after approval.
 * @param {string} props.label - The label for the button.
 * @param {string} props.labelSending - The label for the button when the transaction is pending.
 *
 */
const ERC20ApproveAndTransferButton: FC<Props> = ({
  amount,
  disabled,
  label,
  labelSending,
  onSuccess,
  spender,
  token,
  transaction,
}) => {
  const { address } = useWeb3StatusConnected()
  const { writeContractAsync } = useWriteContract()
  const { isWalletConnected, walletChainId } = useWeb3Status()

  const { data: allowance, refetch: getAllowance } = useSuspenseReadErc20Allowance({
    address: token.address as Address, // TODO: token.address should be Address type
    args: [address, spender],
  })

  const isApprovalRequired = allowance < amount

  const handleApprove = () => {
    return writeContractAsync({
      abi: erc20Abi,
      address: token.address as Address,
      functionName: 'approve',
      args: [spender, amount],
    })
  }

  const findChain = (chainId: number) => Object.values(chains).find((chain) => chain.id === chainId)

  // mainnet is the default chain if not connected or the chain is not found
  const currentChain =
    isWalletConnected && walletChainId ? findChain(walletChainId) || chains.mainnet : chains.mainnet

  return isApprovalRequired ? (
    <Wrapper text={`Approve the use of ${token.symbol} with your wallet`} title="Approval required">
      <Button
        disabled={disabled}
        key="approve"
        labelSending={`Approving ${token.symbol}`}
        onMined={() => getAllowance()}
        transaction={handleApprove}
      >
        Approve
      </Button>
    </Wrapper>
  ) : (
    <Wrapper
      text={
        <>
          Supply {token.symbol} to the{' '}
          <a
            href={getExplorerLink({ chain: currentChain, hashOrAddress: spender })}
            rel="noreferrer"
            target="_blank"
          >
            AAVE staging contract
          </a>
          .
        </>
      }
      title="Execute the transaction"
    >
      <Button
        disabled={disabled}
        key="send"
        labelSending={labelSending}
        onMined={onSuccess}
        transaction={transaction}
      >
        {label}
      </Button>
    </Wrapper>
  )
}

export default ERC20ApproveAndTransferButton
