interface Props {
  className?: string
  label: string
}

const CareerMapRowHeader = ({
  label, className
}: Props) => {
  return (
    <div className={`w-[115px] p-4 flex items-center justify-center border-r border-bg-300 xl:w-[150px] ${className}`}>
      <h2 className="text-xs font-bold xl:text-base">{label}</h2>
    </div>
  )
}

export { CareerMapRowHeader }
