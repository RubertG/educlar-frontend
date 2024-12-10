interface Props {
  className?: string
  children?: React.ReactNode
}

const CareerMapRow = ({
  className, children
}: Props) => {
  return (
    <div className={`grid grid-cols-[auto_1fr] h-[100px] border-t first:border-t-0 border-bg-300 ${className}`}>
      {children}
    </div>
  )
}

export { CareerMapRow }
