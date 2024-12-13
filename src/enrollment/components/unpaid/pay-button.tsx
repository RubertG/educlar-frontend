"use client"

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/core/components"
import { PropsWithClassName } from "@/core/interfaces/props"
import { useUserStore } from "@/core/stores"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

function PayButton({
  className = ''
}: PropsWithClassName) {
  const user = useUserStore(state => state.user)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleOpen = () => {
    setOpen(!open)
  }

  const onClick = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/pagarMatricula/${user?.id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json()

      if (res.ok) {
        toast.success(data.response)
      } else {
        toast.error(data.response)
      }
    } catch (error) {
      console.log(error)

      toast.error("Ocurrió un error al procesar el pago.")
    } finally {
      setLoading(false)
      setOpen(false)
      router.refresh()
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpen}
    >
      <DialogTrigger asChild>
        <Button
          className={`${className}`}
        >
          Pagar matrícula
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="!space-y-3">
          <DialogTitle>¿Estás seguro de pagar la matricula?</DialogTitle>
          <DialogDescription className="!text-text-200">
            Esta acción de pago no está disponible en este prototipo, ya que está enfocado a la gestion de matriculas y materias, no la gestión de pagos.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button
            className="!mr-2"
            onClick={onClick}
            disabled={loading}
          >
            {loading ? 'Procesando...' : 'Pagar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export { PayButton }
