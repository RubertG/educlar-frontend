"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/core/components"
import { Group } from "@/enrollment/interfaces/api-response"
import { useAvailableSubjectsStore } from "@/enrollment/stores"

interface Props {
  idSubject: string
  groups: Group[]
  className?: string
}

const GroupSelector = ({
  groups, className, idSubject
}: Props) => {
  const selectGroup = useAvailableSubjectsStore(state => state.selectGroup)

  const onClick = (id: string) => {
    selectGroup(idSubject, id)
  }

  return (
    <Select
      onValueChange={onClick}
    >
      <SelectTrigger className={`${className}`}>
        <SelectValue placeholder="Grupo" />
      </SelectTrigger>
      <SelectContent>
        {
          groups.map((group) => (
            <SelectItem
              key={group.id}
              value={group.id}
            >
              {group.name}
            </SelectItem>
          ))
        }
      </SelectContent>
    </Select>
  )
}

export { GroupSelector }
