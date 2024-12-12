export interface Group {
  id: string
  name: string
}

// Definición de las interfaces de la respuesta de la API
export interface Schedule {
  id: number
  name: string
  hourStart: string
  hourEnd: string
  teacher?: string
  group: Group
  room: string
}

// Definición de la respuesta de la API
export interface APIResponse {
  monday: Schedule[]
  tuesday: Schedule[]
  wednesday: Schedule[]
  thursday: Schedule[]
  friday: Schedule[]
  saturday: Schedule[]
}