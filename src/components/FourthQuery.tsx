import React, {useState, useEffect} from 'react'
import { propsQueryStudentOver } from '../interfaces/propsQueryStudents';


function FourthQuery() {
    const [data, setData] = useState<propsQueryStudentOver[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch("/api/getstudentoversrednia")
              .then((response) => response.json())
              .then((data) => {
                    setData(data);
                    console.log(data)
              })
        }  

        fetchData();
        
    }, [])

  return (
    <div className='table-info'>
       <h1>FOURTH</h1>
        <table>
            <thead>
                <tr>
                    <th>IMIE</th>
                    <th>NAZWISKO</th>
                    <th>ŚREDNIA</th>
                  </tr>
              </thead>
                  
                <tbody>
                    {data.length > 0 &&
                        data.map((el: propsQueryStudentOver, index: any) => 
                        <tr key={el.id.toString()} className={index % 2 === 0 ? 'odd' : 'even'}>
                            <td>{el.imie}</td>
                            <td>{el.nazwisko}</td>
                            <td>{el.srednia}</td>
                        </tr>
                        )
                    }
            </tbody>
      </table>
    </div>
  )
}

export default FourthQuery
