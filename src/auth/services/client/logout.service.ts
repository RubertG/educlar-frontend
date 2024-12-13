import { TOKEN_PATH, USER_PATH } from "@/auth/consts/cookies"
import { setCookie } from "cookies-next"

export const logoutClient = async () => {
  try {
    await setCookie(USER_PATH, null)
    await setCookie(TOKEN_PATH, null)
  } catch (error) {
    console.log(error)
  }
}