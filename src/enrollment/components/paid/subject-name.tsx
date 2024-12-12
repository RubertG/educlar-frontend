interface Props {
  name: string
  className?: string
}

const SubjectName = ({
  name, className
}: Props) => {
  return (
    <p className={`${className}`}>
      {name}
    </p>
  )
}

export { SubjectName }
