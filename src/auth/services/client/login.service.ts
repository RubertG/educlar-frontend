import { User } from "@/core/interfaces/user"
import { TOKEN_PATH, USER_PATH } from "../../consts/cookies"
import { setCookie } from "cookies-next/client"

interface LoginResponse {
  user: User | null
  token?: string
  error?: string 
}

export const loginClient = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    // TODO: Hacer peticion a la API para verificar las credenciales
    await new Promise((resolve) => setTimeout(resolve, 1500))
    
    const token = "1234567890"
    const user: User = {
      email,
      id: "1",
      name: "John Doe",
      role: "Estudiante"
    }
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