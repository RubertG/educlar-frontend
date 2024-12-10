"use client"

import { useUserStore } from "@/core/stores"
import { useRouter } from "next/navigation"
import { PropsWithChildren, useEffect } from "react"
import { verifyCredentials } from "../services"

const ProtectedRoute = ({
  children
}: PropsWithChildren) => {
  const user = useUserStore((state) => state.user)
  const setUser = useUserStore((state) => state.setUser)
  const loading = useUserStore((state) => state.loading)
  const setLoading = useUserStore((state) => state.setLoading)
  const setToken = useUserStore((state) => state.setToken)
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
    if (user && !loading) {
      router.push("/")
    }
  }, [user, router, loading])

  if (loading) {
    return (
      <div>
        Cargando...
      </div>
    )
  }

  if (user) {
    return null
  }

  return (
    <>
      {children}
    </>
  )
}

export { ProtectedRoute }
