import { Hr } from "@/core/components"
import { PropsWithClassName } from "@/core/interfaces/props"
import { PriceSummary, SummaryItem, UnpaidContainer } from "@/enrollment/components"
import { UnpaidDetails } from "./unpaid-details"

const PRICE_SUMMARY = [
  {
    title: 'Derechos de matricula ingeniería en sistemas',
    value: 895700
  },
  {
    title: 'Beneficiario de política de gratuidad',
    value: -895700
  },
  {
    title: 'Derechos complementarios ingeniería en sistemas',
    value: 104000
  },
  {
    title: 'Seguro estudiantil',
    value: 17000
  },
  {
    title: 'Fondo de capital semilla',
    value: 33800
  },
  {
    title: 'Timbre pro cultural',
    value: 26000
  },
  {
    title: 'Subtotal',
    value: 1171500
  },
  {
    title: 'Total a pagar',
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
          items.map(({ title, value }) => (
            <SummaryItem
              className="first:pt-0 pt-1"
              key={title}
              label={title}
              value={value}
            />
          ))
        }
        <Hr className="mt-2.5 mb-2" />
        {
          totals.map(({ title, value }) => (
            <SummaryItem
              key={title}
              label={title}
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
