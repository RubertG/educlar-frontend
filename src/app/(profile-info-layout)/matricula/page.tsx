import { ChangeGroupDialog, DeleteSubjectDialog, Unpaid } from "@/enrollment/components"

interface Props {
  searchParams: { [key: string]: string | undefined }
}

function EnrollementPage({
  searchParams: { cambiar: changeId, eliminar: removeId }
}: Props) {
  return (
    <section className="mb-5">
      <Unpaid />

      {/* <Paid /> */}

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
