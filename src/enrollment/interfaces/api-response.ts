export interface Day {
  id: string
  date: string
  hourStart: Date
  hourEnd: Date
}

export interface Group {
  id: string
  name: string
  days: Day[]
  isSelected?: boolean
}

export interface Subject {
  id: string
  name: string
  semester: number
  credits: number
  isObligatory: boolean
  groups: Group[]
}

export const subjects: Subject[] = [
  {
    id: "1",
    name: "Math",
    semester: 1,
    credits: 5,
    isObligatory: true,
    groups: [
      {
        id: "1",
        name: "A",
        days: [
          {
            id: "1",
            date: "Lunes",
            hourStart: new Date(2024, 0, 1, 8, 30),
            hourEnd: new Date(2024, 0, 1, 9, 59)
          }
        ]
      },
      {
        id: "2",
        name: "B",
        days: [
          {
            id: "100",
            date: "Martes",
            hourStart: new Date(2024, 0, 1, 8, 30),
            hourEnd: new Date(2024, 0, 1, 9, 59)
          }
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Physics",
    semester: 1,
    credits: 5,
    isObligatory: true,
    groups: [
      {
        id: "1000",
        name: "A",
        days: [
          {
            id: "2",
            date: "Lunes",
            hourStart: new Date(2024, 0, 1, 10, 0),
            hourEnd: new Date(2024, 0, 1, 11, 59)
          }
        ]
      }
    ]
  },
  {
    id: "3",
    name: "Chemistry",
    semester: 1,
    credits: 5,
    isObligatory: false,
    groups: [
      {
        id: "3",
        name: "A",
        days: [
          {
            id: "3",
            date: "Lunes",
            hourStart: new Date(2024, 0, 1, 13, 0),
            hourEnd: new Date(2024, 0, 1, 16, 59)
          }
        ]
      }
    ]
  }
]