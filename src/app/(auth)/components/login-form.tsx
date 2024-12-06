"use client"

import { z } from "zod"
import { loginSchema } from "../schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "@/app/core/components"
import { FormField, Form, FormItem, FormLabel, FormControl, FormMessage } from "@/app/core/components/ui/form"

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values)
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
                  <Input placeholder="*********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
          className="block w-full mt-5"
            type="submit"
          >
            Ingresar
          </Button>
        </form>
      </Form>
    </article>
  )
}

export { LoginForm }
