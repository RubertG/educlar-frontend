import { Group, Subject } from "./api-response"

export interface EnrolledSubject {
  id: string
  subject: Subject
  group: Group
}