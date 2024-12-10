interface Props {
  className?: string
  children: React.ReactNode
}

const SubjectContainer = ({
  children, className
}: Props) => {
  return (
    <ul className={`py-2.5 px-4 flex gap-2.5 overflow-y-hidden overscroll-y-auto ${className}`}>
      {children}
    </ul>
  )
}

export { SubjectContainer }
