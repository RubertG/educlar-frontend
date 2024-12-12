import { TableAvailableSubjects, TableEnrolledSubjects } from "@/enrollment/components"

export function Paid () {
  return (
    <div className="grid gap-5 items-start lg:grid-cols-2">
      <TableEnrolledSubjects />
      <TableAvailableSubjects />
    </div>
  )
}
