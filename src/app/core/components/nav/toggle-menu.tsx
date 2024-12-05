import { Menu } from "lucide-react"
import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement>

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
