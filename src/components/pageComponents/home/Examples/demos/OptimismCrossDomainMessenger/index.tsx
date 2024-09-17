import { parseEther } from 'viem'
import { optimismSepolia, sepolia } from 'viem/chains'

import Wrapper from '@/src/components/pageComponents/home/Examples/demos/OptimismCrossDomainMessenger/Wrapper'
import TransactionButton from '@/src/components/sharedComponents/TransactionButton'
import { withWalletStatusVerifier } from '@/src/components/sharedComponents/WalletStatusVerifier'
import { PrimaryButton } from '@/src/components/sharedComponents/ui/Buttons'
import { getContract } from '@/src/constants/contracts/contracts'
import { useL1CrossDomainMessengerProxy } from '@/src/hooks/useOPL1CrossDomainMessengerProxy'
import { useWeb3StatusConnected } from '@/src/hooks/useWeb3Status'
import { withSuspenseAndRetry } from '@/src/utils/suspenseWrapper'

const OptimismCrossDomainMessenger = withWalletStatusVerifier(
  withSuspenseAndRetry(() => {
    // https://sepolia-optimism.etherscan.io/address/0xb50201558b00496a145fe76f7424749556e326d8
    const AAVEProxy = '0xb50201558b00496a145fe76f7424749556e326d8'
    const { address: walletAddress } = useWeb3StatusConnected()

    const contract = getContract('AAVEWeth', optimismSepolia.id)
    const depositValue = parseEther('0.01')

    const sendCrossChainMessage = useL1CrossDomainMessengerProxy({
      fromChain: sepolia,
      contractName: 'AAVEWeth',
      functionName: 'depositETH',
      l2ContractAddress: contract.address,
      args: [AAVEProxy, walletAddress, 0],
      value: depositValue,
    })

    return (
      <Wrapper title="Execute transaction">
        <p>
          Deposit <b>0.01</b> ETH in{' '}
          <a
            href="https://staging.aave.com/?marketName=proto_optimism_sepolia_v3"
            rel="noreferrer"
            target="_blank"
          >
            Optimism Sepolia AAVE market
          </a>{' '}
          from Sepolia.
        </p>
        <PrimaryButton as={TransactionButton} key="send" transaction={sendCrossChainMessage}>
          Deposit ETH
        </PrimaryButton>
        <p>Deposits take approximately 1-3 minutes.</p>
      </Wrapper>
    )
  }),
)

export default OptimismCrossDomainMessenger
