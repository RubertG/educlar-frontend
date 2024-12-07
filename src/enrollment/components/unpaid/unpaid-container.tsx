// Props que recibe el componente. En este caso, recibe un className y children.
interface Props {
  className?: string
  children: React.ReactNode
}

// Componente que renderiza un contenedor para los elementos hijos.
const UnpaidContainer = ({
  children, className
}: Props) => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-[55%_auto] gap-6 gap-y-4 items-start ${className}`}>
      {children}
    </section>
  )
}

export { UnpaidContainer }
