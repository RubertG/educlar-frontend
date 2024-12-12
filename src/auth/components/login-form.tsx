"use client"

import { z } from "zod"
import { loginSchema } from "@/auth/schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormField, Form, FormItem, FormLabel, FormControl, FormMessage, Button, Input } from "@/core/components"
import { useRouter } from "next/navigation"
import { useUserStore } from "@/core/stores"
import { loginClient } from "@/auth/services"
import { useState } from "react"

/*
  Formulario de inicio de sesión
  Contiene las funciones para validar los campos del formulario y enviar los datos
  Contiene los campos de email y contraseña para iniciar sesión
*/
const LoginForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  
  const router = useRouter()
  const setError = useUserStore((state) => state.setError)
  const setUser = useUserStore((state) => state.setUser)
  const errorMessage = useUserStore((state) => state.error)
  const setToken = useUserStore((state) => state.setToken)

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    setError(null)
    setLoading(true)

    const { user, token, error } = await loginClient(values.email, values.password)

    if (user && token && !error) {
      setUser(user)
      setToken(token)
      router.push("/")
    } 
    
    if (error) {
      setError(error)
    }
    
    setLoading(false)
  }

  return (
    <article className="max-w-96 w-full p-5 bg-bg-50 rounded-lg border border-bg-300 shadow-custom-card">
      <h2 className="font-semibold text-3xl text-center">
        Iniciar sesión
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-3.5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo electrónico</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-2">
                <FormLabel>Contraseña</FormLabel>
                <FormControl>
                  <Input placeholder="*********" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormMessage className="mt-2">
            {errorMessage}
          </FormMessage>

          <Button
            className="block w-full mt-5"
            type="submit"
          >
            {loading ? "Cargando..." : "Ingresar"}
          </Button>
        </form>
      </Form>
    </article>
  )
}

export { LoginForm }
