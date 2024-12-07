import { ReactNode } from "react"

// Interfaz de las propiedades del componente
interface Props {
  children: ReactNode
  className?: string
}

// Componente que contiene las materias de un día
const ScheduleContainer = ({
  className, children
}: Props) => {
  return (
    <ul className={`grid grid-cols-1 gap-4 gap-y-5 items-start md:grid-cols-2 lg:grid-cols-3 ${className}`}>
      {children}
    </ul>
  )
}

export { ScheduleContainer }
