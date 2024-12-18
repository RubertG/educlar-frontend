"use client"

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/core/components"
import { useAvailableSubjectsStore, useSubjectsStore } from "@/enrollment/stores"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import { deleteSubjectService } from "../services"
import { useUserStore } from "@/core/stores"
import { customRevalidatePath } from "@/enrollment/utils"

interface Props {
  subjectId: string
}

const DeleteSubjectDialog = ({
  subjectId
}: Props) => {
  const user = useUserStore(state => state.user)

  const subject = useSubjectsStore(state => state.findSubject(subjectId))
  const deleteSubject = useSubjectsStore(state => state.deleteSubject)
  const addAvailableSubject = useAvailableSubjectsStore(state => state.addAvailableSubject)
  const selectedGroup = useSubjectsStore(state => state.selectedGroup)

  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleClose = () => {
    router.push("/matricula")
    setOpen(!open)
  }

  const handleClick = async () => {
    if (!subject) {
      router.push("/matricula")

      return
    }

    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (subject.isObligatory) {
      toast.error("No puedes eliminar una materia que es obligatorias.")
      setLoading(false)
      handleClose()

      return
    }

    const groupId = selectedGroup(subject.id)
    const { error, response } = await deleteSubjectService(user?.id || "", groupId)

    if (error) {
      toast.error(response)
      setLoading(false)

      return
    }

    deleteSubject(subjectId)
    addAvailableSubject({
      ...subject,
      isEnrolled: false
    })
    toast.success("Grupo eliminado con éxito")
    setLoading(false)
    setOpen(false)

    customRevalidatePath("/materias")
    customRevalidatePath("/")

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
          <DialogHeader>
            <DialogTitle>¿Quieres eliminar esta materia?</DialogTitle>
            <DialogDescription>
              Puedes volver a matricularla más adelante, pero ten en cuenta que los cupos de esta pueden acabarse en algún momento.
            </DialogDescription>
          </DialogHeader>


          <DialogFooter>
            <Button
              onClick={handleClick}
              variant="destructive"
            >
              {loading ? "Eliminando..." : "Eliminar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </>
  )
}

export { DeleteSubjectDialog }
