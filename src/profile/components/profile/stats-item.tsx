// Props para StatsItem que contiene un label y un valor
interface Props {
  label: string
  value: string | number
}

// Componente que muestra un item de estadísticas
const StatItem = ({
  label, value
}: Props) => {
  return (
    <li key={label} className="w-auto max-w-28 px-3 py-2 bg-bg-50 shadow-custom-card rounded-lg border border-bg-300 text-center">
      <p className="text-3xl font-semibold">{value}</p>
      <p className="font-medium text-xs max-w-24 mx-auto mt-1 text-text-200">{label}</p>
    </li>
  )
}

export { StatItem }
