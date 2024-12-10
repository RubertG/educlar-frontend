export type UserRole = "Estudiante" | "Profesor" | "Administrador"

export interface User { 
  id: string
  name: string
  email: string
  role: UserRole
}