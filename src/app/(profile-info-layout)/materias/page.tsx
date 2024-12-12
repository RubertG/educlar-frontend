import { ScheduleContainer, SubjectItem, ScheduleOfDay } from "@/subjects/components"
import { DAYS } from "@/subjects/consts"
import { APIResponse } from "@/subjects/interfaces/api-response"

const API_RESPONSE: APIResponse = {
  monday: [
    {
      id: 1,
      name: 'Materia 1',
      hourStart: new Date(2024, 0, 1, 8, 0),
      hourEnd: new Date(2024, 0, 1, 9, 59),
      group: {
        id: '1',
        name: 'A'
      },
      room: 'Room 101'
    },
    {
      id: 2,
      name: 'Materia 2',
      hourStart: new Date(2024, 0, 1, 10, 0),
      hourEnd: new Date(2024, 0, 1, 11, 59),
      group: {
        id: '1',
        name: 'A'
      },
      teacher: 'Profesor 2',
      room: 'Room 102'
    }
  ],
  tuesday: [{
    id: 3,
    name: 'Materia 3',
    hourStart: new Date(2024, 0, 1, 8, 0),
    hourEnd: new Date(2024, 0, 1, 9, 59),
    group: {
      id: '1',
      name: 'B'
    },
    teacher: 'Profesor 3',
    room: 'Room 103'
  }, {
    id: 4,
    name: 'Materia 4',
    hourStart: new Date(2024, 0, 1, 10, 0),
    hourEnd: new Date(2024, 0, 1, 11, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Mauricio Alberto Contreras Maldonado',
    room: 'FJ 104'
  }],
  wednesday: [{
    id: 5,
    name: 'Materia 5',
    hourStart: new Date(2024, 0, 1, 8, 0),
    hourEnd: new Date(2024, 0, 1, 9, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 5',
    room: 'Room 105'
  }, {
    id: 6,
    name: 'Materia 6',
    hourStart: new Date(2024, 0, 1, 10, 0),
    hourEnd: new Date(2024, 0, 1, 11, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 6',
    room: 'Room 106'
  }],
  thursday: [{
    id: 7,
    name: 'Materia 7',
    hourStart: new Date(2024, 0, 1, 8, 0),
    hourEnd: new Date(2024, 0, 1, 9, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 7',
    room: 'Room 107'
  }, {
    id: 8,
    name: 'Materia 8',
    hourStart: new Date(2024, 0, 1, 10, 0),
    hourEnd: new Date(2024, 0, 1, 11, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 8',
    room: 'Room 108'
  }],
  friday: [{
    id: 9,
    name: 'Materia 9',
    hourStart: new Date(2024, 0, 1, 8, 0),
    hourEnd: new Date(2024, 0, 1, 9, 59),
    teacher: 'Profesor 9',
    group: {
      id: '1',
      name: 'A'
    },
    room: 'Room 109'
  }, {
    id: 10,
    name: 'Materia 10',
    hourStart: new Date(2024, 0, 1, 10, 0),
    hourEnd: new Date(2024, 0, 1, 11, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 10',
    room: 'Room 110'
  }],
  saturday: [{
    id: 11,
    name: 'Materia 11',
    hourStart: new Date(2024, 0, 1, 8, 0),
    hourEnd: new Date(2024, 0, 1, 9, 59),
    teacher: 'Profesor 11',
    group: {
      id: '1',
      name: 'A'
    },
    room: 'Room 111'
  }, {
    id: 12,
    name: 'Materia 12',
    hourStart: new Date(2024, 0, 1, 10, 0),
    hourEnd: new Date(2024, 0, 1, 11, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 12',
    room: 'Room 112'
  }, {
    id: 13,
    name: 'Materia 11',
    hourStart: new Date(2024, 0, 1, 17, 0),
    hourEnd: new Date(2024, 0, 1, 19, 59),
    group: {
      id: '1',
      name: 'A'
    },
    teacher: 'Profesor 11',
    room: 'Room 113'
  }
  ]
}

/*
  Página de las materias
*/
function SubjectsPage() {
  const classes = Object.keys(API_RESPONSE) as (keyof APIResponse)[]

  return (
    <ScheduleContainer className="mb-10">
      {
        classes.map((day) => {
          return (
            <ScheduleOfDay key={day} day={DAYS[day]}>
              {
                API_RESPONSE[day].length > 0 ? (
                  API_RESPONSE[day].map((subject, index) => {
                    return (
                      <SubjectItem
                        classname="border-t border-bg-300 first:border-t-0"
                        key={index}
                        subject={subject}
                      />
                    )
                  })
                ) : (
                  <li className="p-3 text-center text-text-200">
                    No hay clases programadas
                  </li>
                )
              }
            </ScheduleOfDay>
          )
        })
      }
    </ScheduleContainer>
  )
}

export default SubjectsPage
