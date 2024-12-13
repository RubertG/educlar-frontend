import { FileBadge, IdCard, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { ProfileRadialChart, InfoContainer, InfoItem, StatItem, StatsContainer } from "@/profile/components"
import { PropsWithClassName } from "@/core/interfaces/props"
import { ProfileAPIResponse } from "@/profile/interfaces/profile-api-response"
import { USER_PATH } from "@/auth/consts/cookies"
import { User } from "@/core/interfaces/user"
import { cookies } from "next/headers"

const getData = async () => {
  const user = JSON.parse(cookies().get(USER_PATH)?.value || "") as User

  if (!user) return null

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/infoPerfil/${user.id}`)
  const data = await response.json()

  return data as ProfileAPIResponse
}

const ProfileInfo = async ({
  className = ""
}: PropsWithClassName) => {
  const data = await getData()

  if (!data) return null

  const { stats, user, image } = data

  return (
    <header className={`flex flex-col items-center xl:flex-row xl:gap-7 ${className}`}>
      <Image
        className="w-full max-w-44 aspect-[3/3.5] rounded-lg object-cover object-center"
        src={`${process.env.NEXT_PUBLIC_API_URL}/imagenes/${image}`}
        width={200}
        height={300}
        alt="Profile picture"
        priority
      />

      <InfoContainer>
        <div className="xl:flex xl:gap-4 xl:items-center  xl:flex-wrap">
          <p className="text-lg font-semibold flex items-center gap-2 justify-center xl:justify-start">
            <IdCard className="w-6 stroke-text-100" />
            <span className="">{user.id}</span>
          </p>

          <h2 className="text-xl font-semibold">
            {user.name}
          </h2>
        </div>

        <div className="mt-4 flex flex-wrap gap-6 gap-y-1 items-center justify-center xl:justify-start xl:mt-6">
          <InfoItem Icon={FileBadge} label={user.carrer} />
          <InfoItem Icon={Mail} label={user.email} />
          <InfoItem Icon={MapPin} label={user.location} />
        </div>

        <StatsContainer className="mt-4">
          <StatItem label="Periodo acumulado" value={stats.period} />
          <StatItem label="Ubicación semestral" value={stats.semester} />
          <StatItem label="Promedio acumulado" value={stats.average} />
          <StatItem label="Total de creditos" value={stats.totalCredits} />
          <StatItem label="Créditos aprovados" value={stats.approvedCredits} />
          <StatItem label="Porcentaje de avance" value={stats.progress} />
        </StatsContainer>
      </InfoContainer>

      <ProfileRadialChart
        className="mt-4 xl:mt-0"
        progress={stats.progress}
      />
    </header>
  )
}

export { ProfileInfo }
