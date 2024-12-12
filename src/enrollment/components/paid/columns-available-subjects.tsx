"use client"

import { Subject } from "@/enrollment/interfaces/api-response"
import { ColumnDef } from "@tanstack/react-table"
import { EnrolButton, GroupSelector, SubjectName } from "@/enrollment/components"

export const columns: ColumnDef<Subject>[] = [
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
    header: "Grupos",
    cell: ({ row }) => {
      const subject = row.original

      return (
        <GroupSelector idSubject={subject.id} groups={subject.groups} className="w-[90px]" />
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
        <EnrolButton subject={subject} />
      )
    }
  }
]
