import { SUBJECT_STATUS } from "../consts/subject-status"

export type SubjectStatus = typeof SUBJECT_STATUS[keyof typeof SUBJECT_STATUS]

export interface Subject {
  id: number
  name: string
  status: SubjectStatus
}

export interface CareerMap {
  [key: string]: Subject[]
}

export interface CareerMapColors {
  [key: string]: {
    className: string
    label: string
  }
}