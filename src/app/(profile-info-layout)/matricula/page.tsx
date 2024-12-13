import { USER_PATH } from "@/auth/consts/cookies"
import { User } from "@/core/interfaces/user"
import { ChangeGroupDialog, DeleteSubjectDialog, Paid, TableAvailableSubjects, TableEnrolledSubjects, Unpaid } from "@/enrollment/components"
import { parseSubjects } from "@/enrollment/utils"
import { cookies } from "next/headers"

const getData = async () => {
  try {
    const user = JSON.parse(cookies().get(USER_PATH)?.value || "{}") as User

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/materiasValidas/${user.id}`)
    const data = await res.json()

    if (data?.response) {
      return {
        availableSubjects: [],
        enrolledSubjects: [],
        isPaid: false
      }
    }

    return {
      ...parseSubjects(data),
      isPaid: true
    }
  } catch (error) {
    console.log(error)

    return {
      availableSubjects: [],
      enrolledSubjects: [],
      isPaid: false
    }
  }
}

interface Props {
  searchParams: { [key: string]: string | undefined }
}

async function EnrollementPage({
  searchParams: { cambiar: changeId, eliminar: removeId }
}: Props) {
  const { availableSubjects, enrolledSubjects, isPaid } = await getData()

  return (
    <section className="mb-5">
      {
        isPaid ? (
          <Paid>
            <TableEnrolledSubjects data={enrolledSubjects} />
            <TableAvailableSubjects data={availableSubjects} />
          </Paid>
        ) : (
          <Unpaid />
        )
      }

      {
        changeId && (
          <ChangeGroupDialog subjectId={changeId} />
        )
      }

      {
        removeId && (
          <DeleteSubjectDialog subjectId={removeId} />
        )
      }
    </section>
  )
}

export default EnrollementPage
