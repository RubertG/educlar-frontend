interface ApiResponse {
  response: string
  error: boolean
}

export const changeSubjectGroupService = async (userId: string, prevGroupId: string, currentGroupId: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/estudiantes/cambiarGrupo/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        idGrupo: currentGroupId,
        idGrupoAntiguo: prevGroupId
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
      response: "Ocurrió un error al cambiar el grupo",
      error: true
    }
  }
}