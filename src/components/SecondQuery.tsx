import React, {useState, useEffect} from 'react'
import { propsQueryStudentsGroup } from '../interfaces/propsQueryStudents';

function SecondQuery() {
    const [data, setData] = useState<propsQueryStudentsGroup[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("/api/getstudentsgroupnull")
              .then((response) => response.json())
              .then((data) => {
                    // console.log(data)
                    setData(data);
              })
        }  

        fetchData();
        
    },[])

  return (
    <div className='table-info'>
        <h1>SECOND</h1>
        <table className='second-table'>
            <thead>
                <tr>
                    <th>IMIE</th>
                    <th>NAZWISKO</th>
                    <th>NAZWA GRUPY</th>
                </tr>
            </thead>
            <tbody>
                    {data.length > 0 &&
                        data.map((el: propsQueryStudentsGroup, index: any) => 
                        <tr key={el.id.toString()}  className={index % 2 === 0 ? 'odd' : 'even'}>
                            <td>{el.imie}</td>
                            <td>{el.nazwisko}</td>
                            {
                                el.nazwaGrupy !== null ?
                                <td>{el.nazwaGrupy}</td> :
                                <td>BRAK</td>
                            }
                            
                        </tr>
                        )
                    }
            </tbody>
      </table>
    </div>
  )
}

export default SecondQuery
