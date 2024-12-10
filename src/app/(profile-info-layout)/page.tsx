import { CareerMapContainer, CareerMapRow, CareerMapRowHeader, InfoColorItem, InfoColorsContainer, Subject, SubjectContainer } from "@/profile/components"
import { CAREER_MAP_COLORS } from "@/profile/consts/career-map-colors"
import { CareerMap } from "@/profile/interfaces/career-map"

const careerMap: CareerMap = {
  1: [
    {
      id: '1',
      name: 'Habilidades comunicativas 1',
      status: 'aprobada',
      semester: 1
    }, {
      id: '1324',
      name: 'Habilidades comunicativas 1',
      status: 'aprobada',
      semester: 1
    }, {
      id: '1234234',
      name: 'Habilidades comunicativas 1',
      status: 'aprobada',
      semester: 1
    }, {
      id: '12342342',
      name: 'Habilidades comunicativas 1',
      status: 'aprobada',
      semester: 1
    }, {
      id: '1234234234',
      name: 'Habilidades comunicativas 1',
      status: 'aprobada',
      semester: 1
    }, {
      id: '1234234234',
      name: 'Habilidades comunicativas 1',
      status: 'aprobada',
      semester: 1
    }
  ],
  2: [{
    id: '2',
    name: 'Habilidades comunicativas 2',
    status: 'aprobada',
    semester: 2
  }],
  3: [{
    id: '3',
    name: 'Habilidades comunicativas 3',
    status: 'aprobada',
    semester: 3
  }],
  4: [{
    id: '4',
    name: 'Habilidades comunicativas 4',
    status: 'cursando',
    semester: 4
  }],
  5: [{
    id: '5',
    name: 'Habilidades comunicativas 5',
    status: 'cursando',
    semester: 5
  }],
  6: [{
    id: '6',
    name: 'Habilidades comunicativas 6',
    status: 'aprobada',
    semester: 6
  }],
  7: [{
    id: '7',
    name: 'Habilidades comunicativas 7',
    status: 'pendiente',
    semester: 7
  }],
  8: [{
    id: '8',
    name: 'Habilidades comunicativas 8',
    status: 'cursando',
    semester: 8
  }],
  9: [{
    id: '9',
    name: 'Habilidades comunicativas 9',
    status: 'aprobada',
    semester: 9
  }],
  10: [{
    id: '10',
    name: 'Habilidades comunicativas 10',
    status: 'pendiente',
    semester: 10
  }]
}

const ProfilePage = () => {
  const careerMapColors = Object.values(CAREER_MAP_COLORS)

  return (
    <>
      <InfoColorsContainer>
        {
          careerMapColors.map(({ className, label }) => (
            <InfoColorItem
              key={label}
              className={className}
              label={label}
            />
          ))
        }
      </InfoColorsContainer>

      <CareerMapContainer className="mt-7 mb-10">
        {
          Object.keys(careerMap).map((semester) => (
            <CareerMapRow key={semester}>
              <CareerMapRowHeader label={`Semestre #${semester}`} />

              <SubjectContainer>
                {
                  careerMap[Number(semester)].map((subject) => (
                    <Subject
                      key={subject.id}
                      {...subject}
                    />
                  ))
                }
              </SubjectContainer>
            </CareerMapRow>
          ))
        }
      </CareerMapContainer>
    </>
  )
}

export default ProfilePage
