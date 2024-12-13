interface ApiResponse {
  response: string
  error?: boolean
}

export const enrollSubject = async (userId: string, subjectId: string, groupId: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/matricularMateria/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        idMateria: subjectId,
        idGrupo: groupId
      })
    })
    const data = await response.json()

    if (response.status !== 200) {
      return {
        response: data.response,
        error: true
      }
    }
    
    return data
  } catch (error) {
    console.log(error)
    
    return {
      response: 'Error al matricular la materia',
      error: true
    }
  }
}