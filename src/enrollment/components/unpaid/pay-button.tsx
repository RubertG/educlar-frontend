"use client"

import { Button, Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/core/components"
import { PropsWithClassName } from "@/core/interfaces/props"
import { useState } from "react"

function PayButton({
  className = ''
}: PropsWithClassName) {
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    setLoading(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
  }

  return (
    <Dialog>
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
            Esta acción de pago no está disponible en este prototipo ya que está enfocado a la gestion de matriculas y materias, no la gestión de pagos.
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
