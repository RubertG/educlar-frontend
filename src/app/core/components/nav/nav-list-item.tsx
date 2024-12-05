"use client"

import Link from 'next/link'
import React from 'react'
import { NavigationItem } from '../../interfaces/navigation'
import { usePathname } from 'next/navigation'
import clsx from 'clsx' 

// Interfaz NavigationItem con la propiedad className de tipo string
interface Props extends NavigationItem {
  className?: string
}

/*
  Componente de elemento de lista de navegación.
  Implementa un elemento de lista de navegación y edita su clase si está activo.
*/
const NavListItem = ({
  label, href, className
}: Props) => {
  const pathName = usePathname()
  const isActive = pathName === href

  return (
    <li className={className}>
      <Link
        className={clsx("capitalize w-full px-2 py-2 hover:text-primary-100 rounded-lg font-medium text-sm", {
          "text-primary-100": isActive,
          "": !isActive
        })}
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}

export { NavListItem }
