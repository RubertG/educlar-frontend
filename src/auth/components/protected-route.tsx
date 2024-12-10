"use client"

import { useUserStore } from "@/core/stores"
import { useRouter } from "next/navigation"
import { PropsWithChildren, useEffect } from "react"
import { verifyCredentials } from "../services"
import { Loading } from "@/core/components"

const ProtectedRoute = ({
  children
}: PropsWithChildren) => {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  const loading = useUserStore((state) => state.loading)
  const setLoading = useUserStore((state) => state.setLoading)
  const setToken = useUserStore((state) => state.setToken)
  const token = useUserStore((state) => state.token)
  const router = useRouter()

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

  useEffect(() => {
    if (user || token && !loading) {
      router.push("/")
    }
  }, [user, router, loading, token])

  if (loading) {
    return (
      <Loading />
    )
  }

  if (user && token) {
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
