"use client"

import { useState } from "react"
import { NavigationItem } from "../../interfaces/navigation"
import { Button } from "../ui/button"
import { NavBrand } from "./nav-brand"
import { NavListContainer } from "./nav-list-container"
import { NavListItem } from "./nav-list-item"
import { ToggleMenu } from "./toggle-menu"

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

  const handleOpen = () => {
    setOpen(!open)
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
            NAV_ITEMS.map((item) => (
              <NavListItem
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))
          }
          <li className="mt-2 md:mt-0 md:ml-2">
            <Button
              variant="outline"
            >
              Cerrar sesión
            </Button>
          </li>
        </NavListContainer>
      </nav>
    </nav>
  )
}