import { type ContractConfig, defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'

import { contracts } from '@/src/constants/contracts/contracts'
import { reactSuspenseRead } from '@/src/lib/wagmi/plugins/reactSuspenseRead'

// You can extend the config object with additional properties
// https://wagmi.sh/cli/config/options

export default defineConfig({
  out: 'src/hooks/generated.ts',
  plugins: [reactSuspenseRead(), react()],
  contracts: contracts as ContractConfig<number, undefined>[],
})
