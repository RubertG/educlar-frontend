import React from 'react'
import { PropsWithClassName } from '../../interfaces/props'

// Interfas Props con la propiedad children de tipo React.ReactNode y la propiedad className de tipo string
interface Props extends PropsWithClassName {
  children: React.ReactNode
}

/*
  Componente contenedor de la lista de navegación.
  Implementa un contenedor para los elementos de navegación.
*/
const NavListContainer = ({
  className = "",
  children
}: Props) => {
  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {children}
    </ul>
  )
}

export { NavListContainer }
