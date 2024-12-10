"use client"

import { useEffect, useState } from "react"
import { NavigationItem } from "../../interfaces/navigation"
import { Button, NavBrand, NavListContainer, NavListItem, ToggleMenu } from "@/core/components"
import { useRouter } from "next/navigation"
import { logoutClient } from "@/auth/services"
import { useUserStore } from "@/core/stores"

// Lista de items de la navegación
const NAV_ITEMS: NavigationItem[] = [
  {
    label: "Perfil",
    href: "/"
  },
  {
    label: "Matrícula",
    href: "/matricula"
  },
  {
    label: "Materias",
    href: "/materias"
  }
]

/*
  Componente de navegación.
  Implementa la navegación de la aplicación según el estado y rol del usuario.
*/
export function Nav() {
  /* 
  TODO: 
    - Implementar revicion de autenticación
    - Implementar rutas de navegación segun la autenticación
  */
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const token = useUserStore((state) => state.token)
  const setToken = useUserStore((state) => state.setToken)
  const setUser = useUserStore((state) => state.setUser)

  useEffect(() => {
    console.log(token)
  }, [token])

  const handleOpen = () => {
    setOpen(!open)
  }

  const logOut = () => {
    handleOpen()
    logoutClient()
    setUser(null)
    setToken(null)
    router.push("/ingresar")
  }

  const logIn = () => {
    handleOpen()
    router.push("/ingresar")
  }

  return (
    <nav className="bg-bg-50 shadow-nav">
      <nav className="container py-2 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex justify-between items-center w-full">
          <NavBrand />
          <ToggleMenu onClick={handleOpen} />
        </div>

        <NavListContainer open={open}>
          {
            token && (
              NAV_ITEMS.map((item) => (
                <NavListItem
                  key={item.label}
                  label={item.label}
                  href={item.href}
                  onClick={handleOpen}
                />
              ))
            )
          }
          <li className="mt-2 md:mt-0 md:ml-2">
            {
              token ? (
                <Button
                  variant="outline"
                  onClick={logOut}
                >
                  Cerrar sesión
                </Button>
              ) : (
                <Button onClick={logIn}>
                  Iniciar sesión
                </Button>
              )
            }
          </li>
        </NavListContainer>
      </nav>
    </nav>
  )
}
