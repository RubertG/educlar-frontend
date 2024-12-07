import { clsx } from "clsx"

// Interfaz para definir las propiedades que recibe el componente. En este caso, el componente recibe una etiqueta, un valor y clases CSS.
interface Props {
  className?: string
  label: string
  value: number | string
  labelClassName?: string
  valueClassName?: string
}

// Componente que muestra un item de resumen
const SummaryItem = ({
  label, value, className = '', valueClassName = '', labelClassName = ''
}: Props) => {
  return (
    <li className={`flex justify-between items-center gap-1 ${className}`}>
      <p className={`w-full truncate text-sm ${labelClassName}`}>
        {label}
      </p>
      <p className={clsx(`text-end ${valueClassName}`, {
        "text-red-500": typeof value === 'number' && value < 0
      })}>
        {value.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
      </p>
    </li>
  )
}

export { SummaryItem }
