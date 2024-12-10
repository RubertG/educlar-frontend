interface Props {
  className?: string
  children: React.ReactNode
}

const InfoColorsContainer = ({
  children, className
}: Props) => {
  return (
    <ul className={`flex flex-wrap gap-5 gap-y-3 lg:gap-7 ${className}`}>
      {children}
    </ul>
  )
}

export { InfoColorsContainer }
