
// Props para InfoItem que contiene un ícono y un texto
interface Props {
  className?: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string
}

/*
  Componente que muestra un ícono y un texto.
*/
const InfoItem = ({
  Icon, label, className
}: Props) => {
  return (
    <p className={`flex items-center text-text-200 gap-2 ${className}`}>
      <Icon className="stroke-text-200 w-5" /> <span>{label}</span>
    </p>
  )
}

export { InfoItem }
