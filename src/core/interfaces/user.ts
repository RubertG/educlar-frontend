import { USER_ROLES } from "@/auth/consts/user-roles"

export type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
}