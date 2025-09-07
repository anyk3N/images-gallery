import { useState } from "react"

export const useFetching = <T extends (...args: any[]) => Promise<any>>(
  callback: T,
) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const fetching = async (
    ...args: Parameters<T>
  ): Promise<ReturnType<T> | void> => {
    try {
      setIsLoading(true)
      setError("")
      return await callback(...args)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Unknown error")
    } finally {
      setIsLoading(false)
    }
  }

  return [fetching, isLoading, error] as const
}
