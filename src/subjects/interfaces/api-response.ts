// Definición de las interfaces de la respuesta de la API
export interface Schedule {
  name: string
  hourStart: string
  hourEnd: string
  teacher?: string
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