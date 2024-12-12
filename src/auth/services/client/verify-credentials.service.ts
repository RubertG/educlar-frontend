import { User } from "@/core/interfaces/user"
import { getCookie } from "cookies-next/client"
import { TOKEN_PATH, USER_PATH } from "../../consts/cookies"
import { verifyCredentialsAPIResponse } from "@/auth/interfaces/api-response"

interface LoginResponse {
  user: User | null
  token: string | null
}

export const verifyCredentials = async (): Promise<LoginResponse> => {
  try {
    const user = getCookie(USER_PATH)
    const token = getCookie(TOKEN_PATH)
    
    if (!user || !token) {
      return {
        token: null,
        user: null
      }
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verificarToken`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const data = await res.json() as verifyCredentialsAPIResponse

    return {
      user: data.User,
      token: token
    }
  } catch (error) {
    console.log(error)

    return {
      user: null,
      token: null
    }
  }
}