import { Paid, Unpaid } from "@/enrollment/components"

function EnrollementPage() {
  return (
    <section className="mb-5">
      <Unpaid />
      <Paid />
    </section>
  )
}

export default EnrollementPage
