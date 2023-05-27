import React, { useEffect, useState } from 'react'
import { propsQueryProwadzacyProjekt, propsQueryStudents } from '../interfaces/propsQueryStudents';
import {sortGrupa, sortImie, sortNazwisko, sortProjekty} from "./SortFunctions"

function FirstQuery() {
    const [data, setData] = useState<(propsQueryStudents)[]>([]);
    const [defaultData, setDefaultData] = useState<propsQueryStudents[]>([]);
    const [currentSortImie, setCurrentSortImie] = useState<number>(0);
    const [currentSortNazwisko, setCurrentSortNazwisko] = useState<number>(0);
    const [currentSortGrupa, setCurrentSortGrupa] = useState<number>(0);
    const [currentSortProjekt, setCurrentSortProjekt] = useState<number>(0);
    const [previousSort, setPreviousSort] = useState<string>('');

    useEffect(() => {

        const fetchData = async () => {
            let dataStudents:propsQueryStudents[] = [];
            let idsStudent: any = [];

            // fetch api from backend
            await fetch("/api/getstudentsgroup")
              .then((response) => response.json())
              .then((data) => {
                  data.forEach((el:any) => {
                    if (!idsStudent.includes(el.id_student)) {
                      idsStudent.push(el.id_student)
                      let newEl: propsQueryStudents = {id_student: el.id_student, imie: el.imie, nazwaGrupy: el.nazwaGrupy, nazwisko: el.nazwa, projekty: [el.temat]}
                      dataStudents.push(newEl);
                    } else {
                      
                      const existingEl = dataStudents.find((elExist: propsQueryStudents) => {
                        return elExist.id_student === el.id_student;
                      })

                      existingEl!.projekty.push(el.temat);
                    }
                    
                  });

                  // sort by key;
                  dataStudents.sort((a:propsQueryStudents, b:propsQueryStudents) => {
                    return a.id_student - b.id_student;
                  });

                  setData(dataStudents);
                  setDefaultData(dataStudents)
              })

        }  

        fetchData();
    }, [])
    

    const sortTable = (header: string, e: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
      switch (header) {
        case 'imie':
          if (previousSort !== 'imie') {
            setPreviousSort('imie');
            // setCurrentSort(0);
            setCurrentSortGrupa(0);
            setCurrentSortNazwisko(0);
            setCurrentSortProjekt(0);
          }

          let copyArray: (propsQueryStudents| propsQueryProwadzacyProjekt)[] = sortImie(currentSortImie, data);
          setCurrentSortImie((num: number) => num + 1)
          setData(copyArray as propsQueryStudents[]);
          
          break;
        case 'nazwisko':
          if (previousSort !== 'nazwisko') {
            setPreviousSort('nazwisko');

            setCurrentSortGrupa(0);
            setCurrentSortImie(0);
            setCurrentSortProjekt(0);
          }

          let copyArray2: (propsQueryStudents| propsQueryProwadzacyProjekt)[] = sortNazwisko(currentSortNazwisko, data);
          setCurrentSortNazwisko((num: number) => num + 1)
          setData(copyArray2 as propsQueryStudents[]);
          
          break;
        case 'nazwagrupy':
          if (previousSort !== 'nazwagrupy') {
            setPreviousSort('nazwagrupy');

            setCurrentSortImie(0);
            setCurrentSortNazwisko(0);
            setCurrentSortProjekt(0);
          }
          let copyArray3: propsQueryStudents[] = sortGrupa(currentSortGrupa, data);
          
          setCurrentSortGrupa((num: number) => num + 1)
          setData(copyArray3);
          break;
          case 'projekty':
            if (previousSort !== 'projekty') {
              setPreviousSort('projekty');
  
              setCurrentSortImie(0);
              setCurrentSortNazwisko(0);
              setCurrentSortGrupa(0);
            }
            let copyArray4: (propsQueryStudents| propsQueryProwadzacyProjekt)[] = sortProjekty(currentSortProjekt, data)
  
            setCurrentSortProjekt((num: number) => num + 1)
            setData(copyArray4 as propsQueryStudents[]);
          break;
        default:
          break;
      }
    }

    // console.log(data)

  return (
    <div className='table-info'>
      <h1>FIRST</h1>
      <table className='first-table'>
        <thead>
          <tr>
            <th className='imie' onClick={(e) => sortTable('imie', e)}>IMIE</th>
            <th className='nazwisko' onClick={(e) => sortTable('nazwisko',e)}>NAZWISKO</th>
            <th className='nazwagrupy' onClick={(e) => sortTable('nazwagrupy',e)}>NAZWA GRUPY</th>
            <th className='projekty' onClick={(e) => sortTable('projekty',e)}>PROJEKTY</th>
          </tr>
        </thead>
        <tbody>
          
        {data.length > 0 &&
            data.map((el: propsQueryStudents, index: any) => 
              <tr key={el.id_student.toString()} className={index % 2 === 0 ? 'odd' : 'even'}>
                <td>{el.imie}</td>
                <td>{el.nazwisko}</td>
                <td>{el.nazwaGrupy}</td>
                <td>{el.projekty.join(", ")}</td>
              </tr>
            )
        }
        </tbody>
      </table>
    </div>
  )
}

export default FirstQuery
