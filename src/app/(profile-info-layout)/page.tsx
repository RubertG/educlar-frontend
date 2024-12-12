import { USER_PATH } from "@/auth/consts/cookies"
import { User } from "@/core/interfaces/user"
import { CareerMapContainer, CareerMapRow, CareerMapRowHeader, InfoColorItem, InfoColorsContainer, Subject, SubjectContainer } from "@/profile/components"
import { CAREER_MAP_COLORS } from "@/profile/consts/career-map-colors"
import { CareerMap } from "@/profile/interfaces/career-map"
import { cookies } from "next/headers"

const getData = async () => {
  const user = JSON.parse(cookies().get(USER_PATH)?.value || "") as User

  if (!user) return null

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/semaforo/${user.id}`)
  const data = await response.json()

  return data as CareerMap
}

const ProfilePage = async () => {
  const careerMap = await getData()

  if (!careerMap) return null

  const careerMapColors = Object.values(CAREER_MAP_COLORS)

  return (
    <>
      <InfoColorsContainer>
        {
          careerMapColors.map(({ className, label }) => (
            <InfoColorItem
              key={label}
              className={className}
              label={label}
            />
          ))
        }
      </InfoColorsContainer>

      <CareerMapContainer className="mt-7 mb-10">
        {
          Object.keys(careerMap).map((semester) => (
            <CareerMapRow key={semester}>
              <CareerMapRowHeader label={`Semestre #${semester}`} />

              <SubjectContainer>
                {
                  careerMap[Number(semester)].map((subject) => (
                    <Subject
                      key={subject.id}
                      {...subject}
                    />
                  ))
                }
              </SubjectContainer>
            </CareerMapRow>
          ))
        }
      </CareerMapContainer>
    </>
  )
}

export default ProfilePage
