import { create, StateCreator } from "zustand"
import { Subject } from "../interfaces/api-response"
import { devtools } from "zustand/middleware"

interface SubjectState {
  subjects: Subject[]
  loading: boolean

  setSubjects: (subjects: Subject[]) => void
  setLoading: (loading: boolean) => void
  fetchSubjects: () => void
  selectGroup: (subjectId: string, groupId: string) => void
  selectedGroup: (subjectId: string) => string
  addSubject: (subject: Subject) => void
}

const storeApi: StateCreator<SubjectState> = (set, get) => ({
  subjects: [],
  loading: true,

  setLoading: (loading) => set({ loading }),
  setSubjects: (subjects) => set({ subjects }),
  fetchSubjects: async () => {
    if (get().subjects.length !== 0) return

    set({ loading: true })
    const res = await new Promise<Subject[]>((resolve) => {
      setTimeout(() => {
        resolve([])
      }, 1000)
    })
    set({ subjects: res, loading: false })

    return res
  },
  selectGroup: (subjectId, groupId) => {
    const newSubjects = get().subjects
    const subjectIndex = newSubjects.findIndex(subject => subject.id === subjectId)

    for (const group of newSubjects[subjectIndex].groups) {
      group.isSelected = false

      if (group.id === groupId) {
        group.isSelected = true
      }
    }

    set({ subjects: newSubjects })
  },
  selectedGroup: (subjectId) => {
    const subjects = get().subjects
    const subject = subjects.find(subject => subject.id === subjectId)
    const group = subject?.groups.find(group => group.isSelected)

    return group?.id || ""
  },
  addSubject: (subject) => {
    const newSubjects = get().subjects
    newSubjects.push(subject)
    set({ subjects: newSubjects })
  }
})

export const useSubjectsStore = create<SubjectState>()(
  devtools(
    storeApi,
    {
      name: "subjects"
    }
  )
)