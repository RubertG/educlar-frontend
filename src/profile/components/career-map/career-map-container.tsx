interface Props {
  className?: string
  children?: React.ReactNode
}

const CareerMapContainer = ({
  className, children
}: Props) => {
  return (
    <section className={`shadow-custom-card border border-bg-300 bg-bg-50 rounded-lg overflow-y-auto ${className}`}>
      {children}
    </section>
  )
}

export { CareerMapContainer }
