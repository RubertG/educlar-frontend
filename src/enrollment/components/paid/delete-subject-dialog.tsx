"use client"

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/core/components"
import { useAvailableSubjectsStore, useSubjectsStore } from "@/enrollment/stores"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface Props {
  subjectId: string
}

const DeleteSubjectDialog = ({
  subjectId
}: Props) => {
  const subject = useSubjectsStore(state => state.findSubject(subjectId))
  const deleteSubject = useSubjectsStore(state => state.deleteSubject)
  const addAvailableSubject = useAvailableSubjectsStore(state => state.addAvailableSubject)

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
    deleteSubject(subjectId)
    addAvailableSubject({
      ...subject,
      isEnrolled: false
    })

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
