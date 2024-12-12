"use client"

import { Subject } from "@/enrollment/interfaces/api-response"
import { ColumnDef } from "@tanstack/react-table"
import { EnrolledOptions, SubjectName } from "@/enrollment/components"

export const columnsEnrolledSubjects: ColumnDef<Subject>[] = [
  {
    accessorKey: "name",
    header: "Materia",
    cell: ({ row }) => {
      const subject = row.original

      return (
        <SubjectName name={subject.name} />
      )
    }
  },
  {
    accessorKey: "groups",
    header: "Grupo",
    cell: ({ row }) => {
      const subject = row.original
      const group = subject.groups.find(group => group.isSelected)

      return (
        <p>{group?.name || "Sin grupo"}</p>
      )
    }
  },
  {
    accessorKey: "credits",
    header: "Creditos"
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const subject = row.original

      return (
        <EnrolledOptions subjectId={subject.id} />
      )
    }
  }
]
