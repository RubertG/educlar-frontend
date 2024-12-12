import { User } from "@/core/interfaces/user"

export interface LoginAPIResponse {
  response: string;
  data: Data;
}

export interface Data {
  token: string;
  User: User;
}

export interface verifyCredentialsAPIResponse {
  message: string
  User: User
}