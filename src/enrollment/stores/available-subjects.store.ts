import { Subject, subjects } from "@/enrollment/interfaces/api-response"
import { create, StateCreator } from "zustand"
import { devtools } from "zustand/middleware"

interface AvailableSubjectsState {
  availableSubjects: Subject[]
  loading: boolean

  setAvailableSubjects: (subjects: Subject[]) => void
  setLoading: (loading: boolean) => void
  fetchAvailableSubjects: () => void
  selectGroup: (subjectId: string, groupId: string) => void
  selectedGroup: (subjectId: string) => string
  deleteAvailableSubject: (subjectId: string) => void
  addAvailableSubject: (subject: Subject) => void
}

const storeApi: StateCreator<AvailableSubjectsState> = (set, get) => ({
  availableSubjects: [],
  loading: true,

  setLoading: (loading) => set({ loading }),
  setAvailableSubjects: (subjects) => set({ availableSubjects: subjects }),
  fetchAvailableSubjects: async () => {
    if (get().availableSubjects.length !== 0) return

    get().setLoading(true)
    const res = await new Promise<Subject[]>((resolve) => {
      setTimeout(() => {
        resolve(subjects)
      }, 1000)
    })
    get().setLoading(false)
    get().setAvailableSubjects(res)
  },
  selectGroup: (subjectId, groupId) => {
    const newSubjects = get().availableSubjects
    const subjectIndex = newSubjects.findIndex(subject => subject.id === subjectId)

    for (const group of newSubjects[subjectIndex].groups) {
      group.isSelected = false

      if (group.id === groupId) {
        group.isSelected = true
      }
    }

    get().setAvailableSubjects(newSubjects)
  },
  selectedGroup: (subjectId) => {
    const subjects = get().availableSubjects
    const subject = subjects.find(subject => subject.id === subjectId)
    const group = subject?.groups.find(group => group.isSelected)

    return group?.id || ""
  },
  deleteAvailableSubject: (subjectId) => {
    const newSubjects = get().availableSubjects.filter(subject => subject.id !== subjectId)
    get().setAvailableSubjects(newSubjects)
  },
  addAvailableSubject: (subject) => set(state => ({
    availableSubjects: [...state.availableSubjects, subject]
  }))
})

export const useAvailableSubjectsStore = create<AvailableSubjectsState>()(
  devtools(
    storeApi,
    {
      name: "availableSubjects"
    }
  )
)