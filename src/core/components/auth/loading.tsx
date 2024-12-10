import { LoaderCircle } from "lucide-react"

const Loading = () => {
  return (
    <section className="h-full w-full flex items-center justify-center">
      <LoaderCircle className="animate-spin stroke-primary-100 w-8 h-8" />
    </section>
  )
}

export { Loading }
