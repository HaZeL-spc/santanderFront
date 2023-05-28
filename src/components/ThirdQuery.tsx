import React, {useEffect, useState} from 'react'
import { propsQueryProwadzacyProjekt, propsQueryStudents } from '../interfaces/propsQueryStudents';
import { sortImie, sortNazwisko, sortProjekty } from './SortFunctions';


function ThirdQuery() {
    const [data, setData] = useState<propsQueryProwadzacyProjekt[]>([]);
    const [currentSortImie, setCurrentSortImie] = useState<number>(0);
    const [currentSortNazwisko, setCurrentSortNazwisko] = useState<number>(0);
    const [currentSortProjekt, setCurrentSortProjekt] = useState<number>(0);
    const [previousSort, setPreviousSort] = useState<string>('')

    useEffect(() => {
        const fetchData = async () => {
            let dataProwadzacy:propsQueryProwadzacyProjekt[] = [];
            let idsProwadzacy: any = [];

            // fetch api from backend
            await fetch("/api/getprowadzacyprojekt")
              .then((response) => response.json())
              .then((data) => {
                  data.forEach((el:any) => {
                    if (!idsProwadzacy.includes(el.id)) {
                        idsProwadzacy.push(el.id);
                      let newEl: propsQueryProwadzacyProjekt = {id: el.id, imie: el.imie, nazwisko: el.nazwisko, projekty: [el.temat]}
                      dataProwadzacy.push(newEl)
                    } else {
                      
                      const existingEl = dataProwadzacy.find((elExist: propsQueryProwadzacyProjekt) => {
                        return elExist.id === el.id;
                      })

                      existingEl!.projekty.push(el.temat);
                    }
                    
                  });

                  //default sorted by name
                  dataProwadzacy.sort((a:propsQueryProwadzacyProjekt, b:propsQueryProwadzacyProjekt) => {
                    return b.imie.localeCompare(a.imie);
                  }); 

                  setData(dataProwadzacy);
              })

        }  

        fetchData();
        
    }, [])

    const sortTable = (header: string) => {
      // console.log("in sort table")
      switch (header) {
        case 'imie':
          if (previousSort !== 'imie') {
            setPreviousSort('imie');

            setCurrentSortNazwisko(0);
            setCurrentSortProjekt(0);
          }
          let copyArray: (propsQueryProwadzacyProjekt | propsQueryStudents)[] = sortImie(currentSortImie, data);
          setCurrentSortImie((num: number) => num + 1)
          // console.log(currentSort)
          setData(copyArray as propsQueryProwadzacyProjekt[]);
          
          break;
        case 'nazwisko':
          if (previousSort !== 'nazwisko') {
            setPreviousSort('nazwisko');

            setCurrentSortImie(0);
            setCurrentSortProjekt(0);
          }
          
          let copyArray2: (propsQueryProwadzacyProjekt | propsQueryStudents)[] = sortNazwisko(currentSortNazwisko, data);
          setCurrentSortNazwisko((num: number) => num + 1)
          setData(copyArray2 as propsQueryProwadzacyProjekt[]);
          
          break;

          case 'projekty':
            if (previousSort !== 'projekty') {
              setPreviousSort('projekty');
  
              setCurrentSortNazwisko(0);
              setCurrentSortImie(0);
            }
            let copyArray4: (propsQueryProwadzacyProjekt | propsQueryStudents)[] = sortProjekty(currentSortProjekt, data);
  
            setCurrentSortProjekt((num: number) => num + 1)
            setData(copyArray4 as propsQueryProwadzacyProjekt[]);
          break;
        default:
          break;
      }
    }

  return (
    <div className='table-info'>
       <h1>THIRD</h1>
        <table className='third-table'>
            <thead>
              <tr>
                <th className='imie' onClick={() => sortTable('imie')}>IMIE</th>
               <th className='nazwisko' onClick={() => sortTable('nazwisko')}>NAZWISKO</th>
                <th onClick={() => sortTable('projekty')}>PROJEKTY</th>
              </tr>
            </thead>

            <tbody>
            {data.length > 0 &&
                data.map((el: propsQueryProwadzacyProjekt, index:any) => 
                <tr key={el.id.toString()} className={index % 2 === 0 ? 'odd' : 'even'}>
                    <td>{el.imie}</td>
                    <td>{el.nazwisko}</td>
                    <td>{el.projekty.join(", ")}</td>
                </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ThirdQuery
