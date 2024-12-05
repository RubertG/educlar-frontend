import React from 'react'
import { PropsWithClassName } from '../../interfaces/props'
import { clsx } from 'clsx'

// Interfas Props con la propiedad children de tipo React.ReactNode, la propiedad className de tipo string y la propiedad open de tipo boolean.
interface Props extends PropsWithClassName {
  children: React.ReactNode
  open: boolean
}

/*
  Componente contenedor de la lista de navegación.
  Implementa un contenedor para los elementos de navegación.
*/
const NavListContainer = ({
  className = "",
  children,
  open
}: Props) => {
  return (
    <ul className={clsx(`absolute bg-white py-3 top-10 flex flex-col w-full items-center gap-0 transition-all md:flex-row md:justify-end md:py-0 md:static md:gap-2.5 ${className}`, {
      "opacity-100 translate-x-0": open,
      "opacity-0 -translate-x-full md:opacity-100 md:translate-x-0": !open
    })}>
      {children}
    </ul>
  )
}

export { NavListContainer }
