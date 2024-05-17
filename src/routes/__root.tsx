import { useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { WagmiProvider } from 'wagmi'

import { Profile } from '@/src/_components/Profile'
import { TanStackReactQueryDevtools } from '@/src/_components/TanStackReactQueryDevtools'
import { TanStackRouterDevtools } from '@/src/_components/TanStackRouterDevtools'
import { config } from '@/src/_lib/wagmi.config'

import '@/src/routes/__root.css'

export const Route = createRootRoute({
  component: Root,
})

const queryClient = new QueryClient()

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <>
            <Profile />
            <hr />
            <div>
              <Link to="/">Home</Link>
              {' | '}
              <Link to="/about">About</Link>
              {' | '}
              <Link to="/contact">Contact</Link>
            </div>
            <hr />
            <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
            <hr />
            <Outlet />
          </>
          <TanStackReactQueryDevtools />
        </QueryClientProvider>
      </WagmiProvider>
      <TanStackRouterDevtools />
    </>
  )
}
