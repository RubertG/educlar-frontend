"use client"

import Link from 'next/link'
import React from 'react'
import { NavigationItem } from '../../interfaces/navigation'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Interfaz NavigationItem con la propiedad className de tipo string
interface Props extends NavigationItem {
  className?: string
  onClick?: () => void
}

/*
  Componente de elemento de lista de navegación.
  Implementa un elemento de lista de navegación y edita su clase si está activo.
*/
const NavListItem = ({
  label, href, className, onClick
}: Props) => {
  const pathName = usePathname()
  const isActive = pathName === href

  return (
    <li className={`w-full md:w-auto ${className}`}>
      <Link
        className={clsx("capitalize block w-full text-center px-2 py-2 hover:text-primary-100 rounded-lg font-medium text-sm", {
          "text-primary-100": isActive,
          "": !isActive
        })}
        href={href}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  )
}

export { NavListItem }
