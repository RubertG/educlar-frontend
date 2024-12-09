import { FileBadge, IdCard, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { ProfileRadialChart, InfoContainer, InfoItem, StatItem, StatsContainer } from "@/profile/components"
import { PropsWithClassName } from "@/core/interfaces/props"

const STATS = [
  { label: "Periodo matriculado", value: "10" },
  { label: "Ubicación semestral", value: "20" },
  { label: "Promedio acumulado", value: "30" },
  { label: "Total de creditos", value: "20" },
  { label: "Créditos aprovados", value: "20" },
  { label: "Porcentaje de avance", value: "100%" }
]

const ProfileInfo = ({
  className = ""
}: PropsWithClassName) => {
  return (
    <header className={`flex flex-col items-center xl:flex-row xl:gap-7 ${className}`}>
      <Image
        className="w-full max-w-44 aspect-[3/3.5] rounded-lg object-cover object-center"
        src="/profile-img.jpg"
        width={200}
        height={300}
        alt="Profile picture"
        priority
      />

      <InfoContainer>
        <div className="xl:flex xl:gap-4 xl:items-center  xl:flex-wrap">
          <p className="text-lg font-semibold flex items-center gap-2 justify-center xl:justify-start">
            <IdCard className="w-6 stroke-text-100" />
            <span className="">1092344838</span>
          </p>

          <h2 className="text-xl font-semibold">
            Cristian David Navarro Vasquez
          </h2>
        </div>

        <div className="mt-4 flex flex-wrap gap-6 gap-y-1 items-center justify-center xl:justify-start xl:mt-6">
          <InfoItem Icon={FileBadge} label="Ingenieria de sistemas" />

          <InfoItem Icon={Mail} label="cristiannavarro@unipamplona.edu.co" />

          <InfoItem Icon={MapPin} label="Pamplona, Norte de Santander" />
        </div>

        <StatsContainer className="mt-4">
          {
            STATS.map(({ label, value }) => (
              <StatItem label={label} value={value} key={label} />
            ))
          }
        </StatsContainer>
      </InfoContainer>

      <ProfileRadialChart
        className="mt-4 xl:mt-0"
        progress={76.82}
      />
    </header>
  )
}

export { ProfileInfo }
