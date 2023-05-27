export interface propsQueryStudents {
    id_student: number,
    imie: string,
    nazwaGrupy: string,
    nazwisko: string,
    projekty: string[]
  }

export interface propsQueryStudentsGroup {
    id: Number,
    imie: string,
    nazwisko: string,
    nazwaGrupy: string
}

export interface propsQueryProwadzacyProjekt {
    id: Number,
    imie: string, 
    nazwisko: string,
    projekty: string[]
}

export interface propsQueryStudentOver {
    id: Number,
    imie: string,
    nazwisko: string,
    srednia: Number
}