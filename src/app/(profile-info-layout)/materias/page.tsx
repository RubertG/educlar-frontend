import { USER_PATH } from "@/auth/consts/cookies"
import { User } from "@/core/interfaces/user"
import { ScheduleContainer, SubjectItem, ScheduleOfDay } from "@/subjects/components"
import { DAYS } from "@/subjects/consts"
import { APIResponse } from "@/subjects/interfaces/api-response"
import { cookies } from "next/headers"

const getData = async () => {
  const user = JSON.parse(cookies().get(USER_PATH)?.value as string) as User

  if (!user) return null 

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/horario/${user.id}`)
  return response.json() as Promise<APIResponse>
}

/*
  Página de las materias
*/
async function SubjectsPage() {
  const data = await getData()

  if (!data) return null

  const classes = Object.keys(data) as (keyof APIResponse)[]

  return (
    <ScheduleContainer className="mb-10">
      {
        classes.map((day) => {
          return (
            <ScheduleOfDay key={day} day={DAYS[day]}>
              {
                data[day].length > 0 ? (
                  data[day].map((subject, index) => {
                    return (
                      <SubjectItem
                        classname="border-t border-bg-300 first:border-t-0"
                        key={index}
                        subject={subject}
                      />
                    )
                  })
                ) : (
                  <li className="p-3 text-center text-text-200">
                    No hay clases programadas
                  </li>
                )
              }
            </ScheduleOfDay>
          )
        })
      }
    </ScheduleContainer>
  )
}

export default SubjectsPage
