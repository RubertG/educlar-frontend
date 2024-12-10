import { devtools } from "zustand/middleware"
import { User } from "../interfaces/user"
import { create, StateCreator } from "zustand"

interface UserState {
  user: User | null
  loading: boolean
  error: string | null
  token: string | null

  setUser: (user: User | null) => void
  setLoading: (loading: boolean) => void
  setToken: (token: string | null) => void
  setError: (error: string | null) => void
}

const stateApi: StateCreator<UserState> = (set) => ({
  user: null,
  loading: true,
  error: null,
  token: null,

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
})

export const useUserStore = create<UserState>()(
  devtools(
    stateApi
  )
)