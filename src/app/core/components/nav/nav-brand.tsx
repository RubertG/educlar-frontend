import Image from "next/image"
import Link from "next/link"
import { PropsWithClassName } from "../../interfaces/props"

/*
  Componente para el logo de la aplicación.
  Recibe una clase CSS opcional.
*/
const NavBrand = ({
  className = ""
}: PropsWithClassName) => {
  return (
    <Link
      className={className}
      href="/"
    >
      <Image
        className="w-44"
        src="/logo-horizontal.webp"
        alt="logo"
        width={200}
        height={53}
      />
    </Link>
  )
}

export { NavBrand }
