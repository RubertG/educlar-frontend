"use client"

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/core/components"
import { MoreVertical, SquarePen, Trash } from "lucide-react"
import { Subject } from "@/enrollment/interfaces/api-response"
import { useRouter } from "next/navigation"

interface Props {
  subjectId: Subject["id"]
}

const EnrolledOptions = ({
  subjectId
}: Props) => {
  const router = useRouter()

  const handleDelete = () => {
    router.push(`?eliminar=${subjectId}`)
  }

  const handleChangeGroup = () => {
    router.push(`?cambiar=${subjectId}`)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menú</span>
            <MoreVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={handleChangeGroup}
          >
            <SquarePen className="stroke-text-100 w-4 h-4" /> Cambiar grupo
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer hover:!text-red-600 group"
            onClick={handleDelete}
          >
            <Trash className="group-hover:stroke-red-600 transition-colors duration-75" /> Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export { EnrolledOptions }
