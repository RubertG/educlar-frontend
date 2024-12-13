"use client"

import { Button } from "@/core/components"
import { Subject } from "@/enrollment/interfaces/api-response"
import { useAvailableSubjectsStore, useSubjectsStore } from "@/enrollment/stores"
import { useState } from "react"
import { toast } from "sonner"

interface Props {
  subject: Subject
  className?: string
}

const EnrolButton = ({
  subject, className
}: Props) => {
  const selectedGroup = useAvailableSubjectsStore(state => state.selectedGroup)
  const deleteAvailableSubject = useAvailableSubjectsStore(state => state.deleteAvailableSubject)
  const addSubject = useSubjectsStore(state => state.addSubject)
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    setLoading(true)
    const groupId = selectedGroup(subject.id)

    if (!groupId) {
      toast.error("Selecciona un grupo para matricular.")
      setLoading(false)

      return
    }

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(1)
      }, 1000)
    })

    deleteAvailableSubject(subject.id)
    addSubject({
      ...subject,
      isEnrolled: true
    })
    setLoading(false)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      className={className}
      onClick={onClick}
    >
      {loading ? "Matriculando..." : "Matricular"}
    </Button>
  )
}

export { EnrolButton }
