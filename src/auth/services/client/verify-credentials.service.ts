import { User } from "@/core/interfaces/user"
import { getCookie } from "cookies-next/client"
import { TOKEN_PATH, USER_PATH } from "../../consts/cookies"

interface LoginResponse {
  user: User | null
  token: string | null
}

export const verifyCredentials = async (): Promise<LoginResponse> => {
  try {
    const user = getCookie(USER_PATH)
    const token = getCookie(TOKEN_PATH)

    console.log(user, token)
    // TODO: Verificar si el token es válido con el backend

    if (!user || !token) {
      return {
        token: null,
        user: null
      }
    }

    return {
      user: JSON.parse(user),
      token: JSON.parse(token)
    }
  } catch (error) {
    console.log(error)

    return {
      user: null,
      token: null
    }
  }
}