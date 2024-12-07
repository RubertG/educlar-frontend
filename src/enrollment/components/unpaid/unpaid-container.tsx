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
    <section className={`grid grid-cols-1 gap-6 gap-y-4 items-start lg:grid lg:grid-cols-[55%_auto] ${className}`}>
      {children}
    </section>
  )
}

export { UnpaidContainer }
