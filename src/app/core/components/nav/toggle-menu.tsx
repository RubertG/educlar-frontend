import { Menu } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

// Interfas Props con las propiedades de un botón
type Props = ButtonHTMLAttributes<HTMLButtonElement>


/*
  Componente de botón para mostrar un toggle de menú.
*/
const ToggleMenu = ({
  className, ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`w-6 md:hidden ${className}`}
    >
      <Menu />
    </button>
  )
}

export { ToggleMenu }
