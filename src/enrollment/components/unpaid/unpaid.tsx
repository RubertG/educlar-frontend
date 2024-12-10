import { Hr } from "@/core/components"
import { PropsWithClassName } from "@/core/interfaces/props"
import { PriceSummary, SummaryItem, UnpaidContainer } from "@/enrollment/components"
import { UnpaidDetails } from "./unpaid-details"

const PRICE_SUMMARY = [
  {
    label: 'Derechos de matricula ingeniería en sistemas',
    value: 895700
  },
  {
    label: 'Beneficiario de política de gratuidad',
    value: -895700
  },
  {
    label: 'Derechos complementarios ingeniería en sistemas',
    value: 104000
  },
  {
    label: 'Seguro estudiantil',
    value: 17000
  },
  {
    label: 'Fondo de capital semilla',
    value: 33800
  },
  {
    label: 'Timbre pro cultural',
    value: 26000
  },
  {
    label: 'Subtotal',
    value: 1171500
  },
  {
    label: 'Total a pagar',
    value: 260800
  }
]

const Unpaid = ({
  className = ''
}: PropsWithClassName) => {
  const items = PRICE_SUMMARY.slice(0, PRICE_SUMMARY.length - 2)
  const totals = PRICE_SUMMARY.slice(PRICE_SUMMARY.length - 2, PRICE_SUMMARY.length)

  /*
    TODO: Implementar lógica para obtener los datos de la matrícula
  */

  return (
    <UnpaidContainer className={`${className}`}>
      <UnpaidDetails />

      <PriceSummary>
        {
          items.map(({ label: label, value }) => (
            <SummaryItem
              className="first:pt-0 pt-1"
              key={label}
              label={label}
              value={value}
            />
          ))
        }
        <Hr className="mt-2.5 mb-2" />
        {
          totals.map(({ label, value }) => (
            <SummaryItem
              key={label}
              label={label}
              value={value}
              labelClassName="font-bold !text-base"
            />
          ))
        }
      </PriceSummary>
    </UnpaidContainer>
  )
}

export { Unpaid }
