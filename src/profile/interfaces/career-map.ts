import { SUBJECT_STATUS } from "../consts/subject-status"

export type SubjectStatus = typeof SUBJECT_STATUS[keyof typeof SUBJECT_STATUS]

export interface Subject {
  id: string
  name: string
  status: SubjectStatus
  semester: number
}

export interface CareerMap {
  [key: number]: Subject[]
}

export interface CareerMapColors {
  [key: string]: {
    className: string
    label: string
  }
}