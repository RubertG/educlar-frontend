import { Schedule } from "@/subjects/interfaces/api-response"

// Interfaz de las propiedades del componente
interface Props {
  classname?: string
  subject: Schedule
}

// Componente que muestra la información de una materia
const SubjectItem = ({
  subject, classname
}: Props) => {
  const hourStart = subject.hourStart.toLocaleTimeString('es-CO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  })
  const hourEnd = subject.hourEnd.toLocaleTimeString('es-CO', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false
  })

  return (
    <li className={`px-3 py-2 flex justify-between items-center gap-1 ${classname}`}>
      <div className="overflow-hidden">
        <h4 className="font-bold truncate">
          {subject.name}
        </h4>
        <p className="text-sm text-text-200">
          {subject?.teacher || 'Sin profesor asignado'}
        </p>
      </div>

      <div className="text-nowrap text-sm text-text-200 text-end">
        <p>{hourStart} - {hourEnd}</p>
        <p>{subject.room} - Grupo {subject.group.name}</p>
      </div>
    </li>
  )
}

export { SubjectItem }
