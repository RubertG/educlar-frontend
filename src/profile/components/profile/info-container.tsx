// Interfaz que define las propiedades que debe recibir el componente InfoContainer
interface Props {
  children: React.ReactNode
  className?: string
}

/*
  Componente contenedor de las informacion principal de un perfil.
*/
const InfoContainer = ({
  children, className
}: Props) => {
  return (
    <div className={`w-full text-center mt-4 xl:text-start xl:mt-0 ${className}`}>
      {children}
    </div>
  )
}

export { InfoContainer }
