"use client"

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/core/components"
import { useSubjectsStore } from "@/enrollment/stores"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

interface Props {
  subjectId: string
}

const ChangeGroupDialog = ({
  subjectId
}: Props) => {
  const subject = useSubjectsStore(state => state.findSubject(subjectId))
  const groups = subject?.groups.filter(group => !group.isSelected) || []

  const [open, setOpen] = useState(true)
  const [selectedGroup, setSelectedGroup] = useState("")
  const [loading, setLoading] = useState(false)
  const selectGroup = useSubjectsStore(state => state.selectGroup)
  const router = useRouter()

  const handleClose = () => {
    router.push("/matricula")
    setOpen(!open)
  }

  const handleClick = async () => {
    if (!selectedGroup) {
      toast.error("Debes seleccionar un grupo")

      return
    }

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    selectGroup(subjectId, selectedGroup)

    setLoading(false)
    setOpen(false)
    router.push("/matricula")
  }

  if (!subject) {
    return null
  }

  return (
    <>
      <Dialog
        open={open}
        onOpenChange={handleClose}
      >
        <DialogContent>

          {
            groups.length > 0 ? (
              <>
                <DialogHeader>
                  <DialogTitle>¿Quieres cambiar de grupo esta materia?</DialogTitle>
                  <DialogDescription>
                    Puedes volver al grupo más adelante si cambias de opinión y existen aún cupos en la materia.
                  </DialogDescription>
                </DialogHeader>

                <Select
                  onValueChange={setSelectedGroup}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Grupo" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      groups.map((group) => (
                        <SelectItem
                          key={group.id}
                          value={group.id}
                          defaultChecked={group.isSelected}
                        >
                          {group.name}
                        </SelectItem>
                      ))
                    }
                  </SelectContent>
                </Select>

                <DialogFooter>
                  <Button
                    onClick={handleClick}
                  >
                    {loading ? "Guardando..." : "Guardar"}
                  </Button>
                </DialogFooter>
              </>
            ) : (
              <DialogHeader>
                <DialogTitle>No hay más grupos disponibles para esta materia</DialogTitle>
                <DialogDescription>
                  Esta materia tiene un solo grupo disponible, puede que más adelante esto cambie.
                </DialogDescription>
              </DialogHeader>
            )
          }


        </DialogContent>
      </Dialog>

    </>
  )
}

export { ChangeGroupDialog }
