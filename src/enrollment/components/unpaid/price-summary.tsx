interface Props {
  className?: string
  children: React.ReactNode
}

/*
  Componente que muestra un resumen de precios
*/
const PriceSummary = ({
  className = '', children
}: Props) => {
  return (
    <ul className={`rounded-lg border border-bg-300 shadow-custom-card bg-bg-50 p-5 ${className}`}>
      {children}
    </ul>
  )
}

export { PriceSummary }
