import { TOKEN_PATH, USER_PATH } from "@/auth/consts/cookies"
import { setCookie } from "cookies-next/client"

export const logoutClient = () => {
  try {
    setCookie(USER_PATH, null)
    setCookie(TOKEN_PATH, null)
  } catch (error) {
    console.log(error)
  }
}