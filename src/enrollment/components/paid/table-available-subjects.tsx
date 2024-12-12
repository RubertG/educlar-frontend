"use client"

import { useEffect } from "react"
import { TableSubjects } from "./table-subjects"
import { useAvailableSubjectsStore } from "../../stores/available-subjects.store"
import { columns } from "./columns-available-subjects"

const TableAvailableSubjects = () => {
  const fetchAvailableSubjects = useAvailableSubjectsStore(state => state.fetchAvailableSubjects)
  const data = useAvailableSubjectsStore(state => state.availableSubjects)
  const loading = useAvailableSubjectsStore(state => state.loading)

  useEffect(() => {
    fetchAvailableSubjects()
  }, [fetchAvailableSubjects])

  return (
    <div className="border border-bg-300 bg-bg-50 rounded-lg p-4 shadow-custom-card">
      <TableSubjects
        columns={columns}
        data={data}
        loading={loading}
      />
    </div>
  )
}

export { TableAvailableSubjects }
