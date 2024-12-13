interface Props {
  children: React.ReactNode
  className?: string
}

export function Paid({
  children, className
}: Props) {
  return (
    <div className={`grid gap-5 items-start lg:grid-cols-2 ${className}`}>
      {children}
    </div>
  )
}
