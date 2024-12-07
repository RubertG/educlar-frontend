import { PayButton } from "@/enrollment/components"

interface Props {
  className?: string
}

// Componente que muestra los detalles de la matrícula no pagada
const UnpaidDetails = ({
  className
}: Props) => {
  return (
    <div className={`text-sm lg:text-base ${className}`}>
      <p>
        Al realizar el pago de su matrícula en la Universidad de Pamplona, usted declara <strong>haber leído y aceptado las políticas de matrícula y las condiciones establecidas.</strong> Este pago confirma su compromiso de cumplir con los requisitos académicos y administrativos para formalizar su inscripción.
      </p>
      <p className="mt-2">
        Asimismo, <strong>acepta las condiciones de la política de devoluciones</strong>, reconociendo que los reembolsos solo se procesarán en casos específicos según lo establecido en el reglamento de la universidad. También <strong>autoriza el tratamiento de sus datos personales para fines académicos y administrativos,</strong> conforme a la normativa de protección de datos vigente.
      </p>
      <p className="mt-2">
        Recuerde que, al finalizar este proceso, asume la responsabilidad financiera de la matrícula y que el incumplimiento de los pagos puede limitar el acceso a servicios académicos y administrativos.
        Para más información, consulte las políticas completas en el sitio web oficial de la universidad.
      </p>
      <PayButton className="mt-4" />
    </div>
  )
}

export { UnpaidDetails }
