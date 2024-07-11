import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: 'PUBLIC_',
  client: {
    PUBLIC_ALCHEMY_KEY: z.string().optional(),
    PUBLIC_APP_DESCRIPTION: z.string().min(1).optional(),
    PUBLIC_APP_LOGO: z.string().optional(),
    PUBLIC_APP_NAME: z.string().min(1),
    PUBLIC_APP_URL: z.string().optional(),
    PUBLIC_INFURA_KEY: z.string().optional(),
    PUBLIC_NATIVE_TOKEN_ADDRESS: z
      .string()
      .optional()
      .default('0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'),
    PUBLIC_RPC_ARBITRUM: z.string().optional(),
    PUBLIC_RPC_ARBITRUM_SEPOLIA: z.string().optional(),
    PUBLIC_RPC_BASE: z.string().optional(),
    PUBLIC_RPC_BASE_SEPOLIA: z.string().optional(),
    PUBLIC_RPC_GNOSIS: z.string().optional(),
    PUBLIC_RPC_GNOSIS_CHIADO: z.string().optional(),
    PUBLIC_RPC_MAINNET: z.string().optional(),
    PUBLIC_RPC_OPTIMISM: z.string().optional(),
    PUBLIC_RPC_OPTIMISM_SEPOLIA: z.string().optional(),
    PUBLIC_RPC_POLYGON: z.string().optional(),
    PUBLIC_RPC_POLYGON_MUMBAI: z.string().optional(),
    PUBLIC_RPC_SEPOLIA: z.string().optional(),
    PUBLIC_WALLETCONNECT_PROJECT_ID: z.string().length(32),
    PUBLIC_INCLUDE_TESTNETS: z.string().optional(),
    PUBLIC_SUBGRAPHS_API_KEY: z.string().optional(),
    PUBLIC_SUBGRAPHS_CHAINS_RESOURCE_IDS: z.string().optional(),
    PUBLIC_SUBGRAPHS_ENVIRONMENT: z.string().optional(),
    PUBLIC_SUBGRAPHS_DEVELOPMENT_URL: z.string().optional(),
    PUBLIC_SUBGRAPHS_PRODUCTION_URL: z.string().optional(),
  },
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
})
