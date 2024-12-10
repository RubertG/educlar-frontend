interface Props {
  className?: string
  label: string
}

const InfoColorItem = ({
  label, className
}: Props) => {
  return (
    <li className="flex items-center gap-2.5">
      <div className={`py-2 w-7 h-5 rounded-lg shadow-custom-card lg:w-10 lg:h-5 ${className}`} /> 
      <p className="text-sm font-medium">{label}</p>
    </li>
  )
}

export { InfoColorItem }
