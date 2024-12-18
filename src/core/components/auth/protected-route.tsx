"use client"

import { verifyCredentials } from "@/auth/services"
import { useUserStore } from "@/core/stores"
import { PropsWithChildren, useEffect } from "react"
import { Loading } from "./loading"
import { useRouter } from "next/navigation"

const ProtectedRoute = ({
  children
}: PropsWithChildren) => {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  const token = useUserStore((state) => state.token)
  const setToken = useUserStore((state) => state.setToken)
  const loading = useUserStore((state) => state.loading)
  const setLoading = useUserStore((state) => state.setLoading)
  const router = useRouter()

  useEffect(() => {
    const loadUserCredentials = async () => {
      setLoading(true)
      const { token, user } = await verifyCredentials()
      setUser(user)
      setToken(token)
      setLoading(false)

      if (!user || !token) {
        router.push("/ingresar")
      } 
    }

    loadUserCredentials()
  }, [setUser, setToken, setLoading, router])

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
