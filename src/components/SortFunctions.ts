import { propsQueryStudents, propsQueryProwadzacyProjekt } from "../interfaces/propsQueryStudents"

export function sortImie(currIndex: number, data:propsQueryStudents[] | propsQueryProwadzacyProjekt[]) {
    let copyArray: (propsQueryStudents | propsQueryProwadzacyProjekt)[] = [...data]; // Create a copy of the data array
          
    if (currIndex % 2 === 0) {
      copyArray.sort((a:propsQueryStudents | propsQueryProwadzacyProjekt, b:propsQueryStudents | propsQueryProwadzacyProjekt) => {
        return a.imie.localeCompare(b.imie);
      });
      
      
    } else {
      copyArray.sort((a:propsQueryStudents | propsQueryProwadzacyProjekt, b:propsQueryStudents | propsQueryProwadzacyProjekt) => {
        return b.imie.localeCompare(a.imie);
      });
    }

    return copyArray
}

export function sortNazwisko(currIndex: number, data:propsQueryStudents[] | propsQueryProwadzacyProjekt[]) {
    let copyArray2: (propsQueryStudents | propsQueryProwadzacyProjekt)[] = [...data]; // Create a copy of the data array
          
    if (currIndex % 2 === 0) {
      copyArray2.sort((a:propsQueryStudents | propsQueryProwadzacyProjekt, b:propsQueryStudents | propsQueryProwadzacyProjekt) => {
        return a.nazwisko.localeCompare(b.nazwisko);
      });
    } else {
      copyArray2.sort((a:propsQueryStudents | propsQueryProwadzacyProjekt, b:propsQueryStudents | propsQueryProwadzacyProjekt) => {
        return b.nazwisko.localeCompare(a.nazwisko);
      });

      
    }
    return copyArray2
}

export function sortGrupa(currIndex: number, data:propsQueryStudents[]) {
    let copyArray3: propsQueryStudents[] = [...data]; // Create a copy of the data array
          
    if (currIndex % 2 === 0) {
      copyArray3.sort((a:propsQueryStudents, b:propsQueryStudents) => {
        return a.nazwaGrupy.localeCompare(b.nazwaGrupy);
      });
    } else {
      copyArray3.sort((a:propsQueryStudents, b:propsQueryStudents) => {
        return b.nazwaGrupy.localeCompare(a.nazwaGrupy);
      });
    }

    return copyArray3
}

export function sortProjekty(currIndex: number, data: propsQueryStudents[] | propsQueryProwadzacyProjekt[]) {
    let copyArray4: (propsQueryStudents | propsQueryProwadzacyProjekt)[] = [...data]; // Create a copy of the data array
            
    if (currIndex % 2 === 0) {
      copyArray4.sort((a:propsQueryStudents | propsQueryProwadzacyProjekt, b:propsQueryStudents | propsQueryProwadzacyProjekt) => {
        return a.projekty.join(", ").localeCompare(b.projekty.join(", "));
      });
    } else {
      copyArray4.sort((a:propsQueryStudents | propsQueryProwadzacyProjekt, b:propsQueryStudents | propsQueryProwadzacyProjekt) => {
        return b.projekty.join(", ").localeCompare(a.projekty.join(", "));
      });
    }

    return copyArray4
}