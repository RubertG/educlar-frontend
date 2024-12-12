"use client"

import { useEffect } from "react"
import { useSubjectsStore } from "@/enrollment/stores"
import { columnsEnrolledSubjects, TableSubjects } from "@/enrollment/components"
import { Subject } from "@/enrollment/interfaces/api-response"

interface Props {
  className?: string
  data?: Subject[]
}

const TableEnrolledSubjects = ({
  className, data: subjects
}: Props) => {
  const fetchSubjects = useSubjectsStore(state => state.fetchSubjects)
  const data = useSubjectsStore(state => state.subjects)
  const loading = useSubjectsStore(state => state.loading)
  const setSubjects = useSubjectsStore(state => state.setSubjects)

  useEffect(() => {
    if (!subjects || subjects.length === 0) {
      fetchSubjects()
    } else {
      setSubjects(subjects)
    }
  }, [fetchSubjects, subjects, setSubjects])

  return (
    <div className={`border border-bg-300 bg-bg-50 rounded-lg p-4 shadow-custom-card ${className}`}>
      <TableSubjects
        columns={columnsEnrolledSubjects}
        data={data}
        loading={loading}
      />
    </div>
  )
}

export { TableEnrolledSubjects }
