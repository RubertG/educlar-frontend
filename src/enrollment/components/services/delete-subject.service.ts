interface ApiResponse {
  response: string
  error: boolean
}

export const deleteSubjectService = async (userId: string, groupId: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/eliminarGrupo/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idGrupo: groupId
      })
    })
    const data = await response.json()

    if (!response.ok) {
      return {
        response: data.response,
        error: true
      }
    }

    return {
      response: data.response,
      error: false
    }
  } catch (error) {
    console.log(error)

    return {
      response: "Ocurrió un error al eliminar la materia",
      error: true
    }
  }
}