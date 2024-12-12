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
  findSubject: (subjectId: string) => Subject | undefined
  deleteSubject: (subjectId: string) => void
}

const storeApi: StateCreator<SubjectState> = (set, get) => ({
  subjects: [],
  loading: true,

  setLoading: (loading) => set({ loading }),
  setSubjects: (subjects) => set({ subjects }),
  fetchSubjects: async () => {
    if (get().subjects.length !== 0) return

    get().setLoading(true)
    const res = await new Promise<Subject[]>((resolve) => {
      setTimeout(() => {
        resolve([])
      }, 1000)
    })
    get().setLoading(false)
    get().setSubjects(res)
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

    get().setSubjects(newSubjects)
  },
  selectedGroup: (subjectId) => {
    const subjects = get().subjects
    const subject = subjects.find(subject => subject.id === subjectId)
    const group = subject?.groups.find(group => group.isSelected)

    return group?.id || ""
  },
  addSubject: (subject) => set(state => ({
    subjects: [...state.subjects, subject]
  })),
  findSubject: (subjectId) => {
    const subjects = get().subjects
    return subjects.find(subject => subject.id === subjectId)
  },
  deleteSubject: (subjectId) => set(state => ({
    subjects: state.subjects.filter(subject => subject.id !== subjectId)
  })
  )
})

export const useSubjectsStore = create<SubjectState>()(
  devtools(
    storeApi,
    {
      name: "subjects"
    }
  )
)