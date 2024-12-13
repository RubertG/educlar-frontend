import { Subject } from "../interfaces/api-response"

export const parseSubjects = (subjects: Subject[]) => {
  const enrolledSubjects: Subject[] = []
  const availableSubjects: Subject[] = []

  for (const subject of subjects) {
    if (subject.isEnrolled) {
      enrolledSubjects.push(subject)
    } else {
      availableSubjects.push(subject)
    }
  }

  return {
    enrolledSubjects,
    availableSubjects
  }
}