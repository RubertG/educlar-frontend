import { ScheduleContainer, SubjectItem, ScheduleOfDay } from "@/subjects/components"
import { DAYS } from "@/subjects/consts"
import { APIResponse } from "@/subjects/interfaces/api-response"

const API_RESPONSE: APIResponse = {
  monday: [
    {
      name: 'Materia 1',
      hourStart: '08:00',
      hourEnd: '09:30',
      room: 'Room 101'
    },
    {
      name: 'Materia 2',
      hourStart: '10:00',
      hourEnd: '11:30',
      teacher: 'Profesor 2',
      room: 'Room 102'
    }
  ],
  tuesday: [{
    name: 'Materia 3',
    hourStart: '08:00',
    hourEnd: '09:30',
    teacher: 'Profesor 3',
    room: 'Room 103'
  }, {
    name: 'Materia 4',
    hourStart: '10:00',
    hourEnd: '11:30',
    teacher: 'Profesor 4',
    room: 'Room 104'
  }],
  wednesday: [{
    name: 'Materia 5',
    hourStart: '08:00',
    hourEnd: '09:30',
    teacher: 'Profesor 5',
    room: 'Room 105'
  }, {
    name: 'Materia 6',
    hourStart: '10:00',
    hourEnd: '11:30',
    teacher: 'Profesor 6',
    room: 'Room 106'
  }],
  thursday: [{
    name: 'Materia 7',
    hourStart: '08:00',
    hourEnd: '09:30',
    teacher: 'Profesor 7',
    room: 'Room 107'
  }, {
    name: 'Materia 8',
    hourStart: '10:00',
    hourEnd: '11:30',
    teacher: 'Profesor 8',
    room: 'Room 108'
  }],
  friday: [{
    name: 'Materia 9',
    hourStart: '08:00',
    hourEnd: '09:30',
    teacher: 'Profesor 9',
    room: 'Room 109'
  }, {
    name: 'Materia 10',
    hourStart: '10:00',
    hourEnd: '11:30',
    teacher: 'Profesor 10',
    room: 'Room 110'
  }],
  saturday: [{
    name: 'Materia 11',
    hourStart: '08:00',
    hourEnd: '09:30',
    teacher: 'Profesor 11',
    room: 'Room 111'
  }, {
    name: 'Materia 12',
    hourStart: '10:00',
    hourEnd: '11:30',
    teacher: 'Profesor 12',
    room: 'Room 112'
  }, {
    name: 'Materia 11',
    hourStart: '08:00',
    hourEnd: '09:30',
    teacher: 'Profesor 11',
    room: 'Room 113'
  }
  ]
}

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
