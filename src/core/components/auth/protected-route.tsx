"use client"

import { verifyCredentials } from "@/auth/services"
import { useUserStore } from "@/core/stores"
import { PropsWithChildren, useEffect } from "react"
import { Loading } from "./loading"

const ProtectedRoute = ({
  children
}: PropsWithChildren) => {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  const token = useUserStore((state) => state.token)
  const setToken = useUserStore((state) => state.setToken)
  const loading = useUserStore((state) => state.loading)
  const setLoading = useUserStore((state) => state.setLoading)

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const { token, user } = await verifyCredentials()
      setUser(user)
      setToken(token)
      setLoading(false)
    }

    fetchUser()
  }, [setUser, setToken, setLoading])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!user || !token) {
    return (
      <Loading />
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export { ProtectedRoute }
