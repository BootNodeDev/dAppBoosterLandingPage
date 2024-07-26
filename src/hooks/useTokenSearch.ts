import {
  type Dispatch,
  type SetStateAction,
  useDeferredValue,
  useState,
  type DependencyList,
  useEffect,
} from 'react'

import { type Tokens } from '@/src/types/token'

type TokenSearch = {
  searchResult: Tokens
  searchTerm: string
  setSearchTerm: Dispatch<SetStateAction<string>>
}

/**
 * A hook that provides a performant search to filter a list of tokens by a searchTerm
 * Internally it uses React's `useDeferredValue`
 *
 * @param {Array} tokens - a list of tokens to be filtered by `searchTerm`
 * @param {Array | undefined} deps - array of dependencies that trigger recalculation of the search
 * @returns {TokenSearch} Object containing searchResult, searchTerm, and setSearchTerm
 */
export const useTokenSearch = (tokens: Tokens, deps: DependencyList = []): TokenSearch => {
  const [searchTerm, setSearchTerm] = useState('')
  const [baseList, setBaseList] = useState(tokens)
  const deferredSearchTerm = useDeferredValue(searchTerm)

  // update the baseList when deps changes
  useEffect(() => {
    setBaseList(tokens)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokens, ...deps])

  // if no searchTerm, return the unfiltered list
  if (!deferredSearchTerm) {
    return { searchResult: baseList, searchTerm, setSearchTerm }
  }

  const searchResult = baseList.filter((token) => {
    return [token.address, token.symbol, token.name].some((key) =>
      key.toLowerCase().includes(deferredSearchTerm.toLowerCase()),
    )
  })

  return { searchResult, searchTerm, setSearchTerm }
}
