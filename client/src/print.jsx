import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { axios } from './axios/Axiox'
import axios from 'axios'
const Print = () => {
    const [state, setState] = useState([])
    console.log(state, 'sttae');
    const FetchData = async () => {

        try {
            const res = await axios.get("http://localhost:4000/myapp/getall")
            console.log(res, 'res');
            setState(res.data.allCruds)
        }
        catch (err) {
            console.error(err.message)
        }
    }
    useEffect(() => {
        FetchData()
    }, [])

    
    const handleDeleat = async (id) => {
        await axios.delete(`http://localhost:4000/myapp/getdell/${id}`)
        FetchData()
    }

    console.log(state);
    return (
        <>
            <div className='flex justify-center'>
                <Link
                    to="/add"> <button className='border-4'>ADD NEW USER</button>
                </Link>

            </div>
            <table className='w-[100%]'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>FIRST NAME</th>
                        <th>LAST NAME</th>
                        <th>EMAIL</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>
                <tbody className='text-center '>
                    {
                        state.map((items, i) => {
                            console.log(items);

                            return (
                                <tr key={i} className='border-2'>
                                    <td>{i}</td>
                                    <td>{items.first_name}</td>
                                    <td>{items.last_name}</td>
                                    <td>{items.email}</td>
                                    <td>
                                        <button onClick={() => handleDeleat(items._id)}>DEL</button>
                                        <Link to={`/add/${items._id}`}>
                                        <button  className='ml-2'>EDIT</button>
                                        </Link>
                                    </td>

                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Print