"use client"

import { useEffect } from "react"
import { useAvailableSubjectsStore } from "@/enrollment/stores"
import { columnsAvailableSubjects, TableSubjects } from "@/enrollment/components"
import { Subject } from "@/enrollment/interfaces/api-response"

interface Props {
  className?: string
  data?: Subject[]
}

const TableAvailableSubjects = ({
  data: subjects, className
}: Props) => {
  const data = useAvailableSubjectsStore(state => state.availableSubjects)
  const loading = useAvailableSubjectsStore(state => state.loading)
  const setAvailableSubjects = useAvailableSubjectsStore(state => state.setAvailableSubjects)

  useEffect(() => {
    setAvailableSubjects([...subjects || []])
  }, [])

  return (
    <div className={`border border-bg-300 bg-bg-50 rounded-lg p-4 shadow-custom-card ${className}`}>
      <TableSubjects
        columns={columnsAvailableSubjects}
        data={data}
        loading={loading}
      />
    </div>
  )
}

export { TableAvailableSubjects }
