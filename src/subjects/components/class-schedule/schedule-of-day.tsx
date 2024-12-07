import { Clock } from "lucide-react"

// Interfaz de las propiedades del componente
interface Props {
  className?: string
  listClassName?: string
  day?: string
  children?: React.ReactNode
}

// Componente que muestra el horario de un día. Contiene una lista de materias y sus horarios
const ScheduleOfDay = ({
  className, day, children, listClassName
}: Props) => {
  return (
    <article className={`border border-bg-300 rounded-lg shadow-custom-card bg-bg-50 overflow-hidden ${className}`}>
      {
        day && (
          <header className="p-3 bg-primary-100 flex items-center justify-between">
            <h3 className="font-semibold text-bg-50 xl:text-lg">
              {day}
            </h3>
            <Clock className="w-4 stroke-bg-200" />
          </header>
        )
      }
      {
        children && (
          <ul className={`${listClassName}`}>
            {children}
          </ul>
        )
      }
    </article>
  )
}

export { ScheduleOfDay }