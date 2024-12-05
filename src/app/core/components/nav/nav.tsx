import { NavigationItem } from "../../interfaces/navigation"
import { Button } from "../ui/button"
import { NavBrand } from "./nav-brand"
import { NavListContainer } from "./nav-list-container"
import { NavListItem } from "./nav-list-item"

// Lista de items de la navegación
const NAV_ITEMS: NavigationItem[] = [
  {
    label: "Perfil",
    href: "/"
  },
  {
    label: "Matricula",
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

  return (
    <nav className="bg-bg-50 shadow-nav">
      <nav className="container mx-auto py-2 flex items-center justify-between">
        <NavBrand />

        <NavListContainer>
          {
            NAV_ITEMS.map((item) => (
              <NavListItem
                key={item.label}
                label={item.label}
                href={item.href}
              />
            ))
          }
          <li className="ml-2">
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
