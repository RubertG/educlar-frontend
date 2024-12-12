import { User } from "@/core/interfaces/user"
import { TOKEN_PATH, USER_PATH } from "../../consts/cookies"
import { setCookie } from "cookies-next/client"
import { LoginAPIResponse } from "@/auth/interfaces/api-response"

interface LoginResponse {
  user: User | null
  token?: string
  error?: string
}

export const loginClient = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/ingresar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ email, password })
    })

    if (!res.ok) throw new Error()

    const { data } = await res.json() as LoginAPIResponse

    if (data?.User == null || data?.token == null) throw new Error()

    const token = data.token
    const user = data.User
    setCookie(USER_PATH, JSON.stringify(user))
    setCookie(TOKEN_PATH, token)

    return {
      user,
      token
    }
  } catch (error) {
    console.log(error)

    return {
      user: null,
      error: "Usuario o contraseña incorrectos"
    }
  }
}