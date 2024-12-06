// Interfaz que define las propiedades que debe recibir el componente StatsContainer
interface Props {
  children: React.ReactNode
  className?: string
}

/*
  Componente contenedor de las estadisticas de un perfil.
*/
const StatsContainer = ({
  children, className
}: Props) => {
  return (
    <ul className={`flex flex-wrap gap-3 mt-4 items-start justify-center xl:justify-start ${className}`}>
      {children}
    </ul>
  )
}

export { StatsContainer }
