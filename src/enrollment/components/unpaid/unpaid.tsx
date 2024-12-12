"use client" 

import { Hr } from "@/core/components"
import { PropsWithClassName } from "@/core/interfaces/props"
import { PriceSummary, SummaryItem, UnpaidContainer } from "@/enrollment/components"
import { UnpaidDetails } from "./unpaid-details"
import { useEffect, useState } from "react"
import { useUserStore } from "@/core/stores"

interface ApiResponse {
  label: string
  value: string
}

const Unpaid = ({
  className = ''
}: PropsWithClassName) => {
  const [data, setData] = useState<ApiResponse[]>([])
  const user = useUserStore(state => state.user)
  const totals = data.slice(data.length - 2, data.length)
  const items = data.slice(0, data.length - 2)

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/matriculaPagos/${user?.id}`)
      .then(response => response.json())
      .then(setData)
  }, [user])

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
