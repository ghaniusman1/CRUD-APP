import axios from 'axios'
import React, { useState , useEffect} from 'react'
import { Link , useParams } from 'react-router-dom'
const intialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
}

const Add = () => {
    const { id }= useParams()
    // console.log(id);
    const [state, setState] = useState(intialState)
    const [resID , setResId] = useState(true)
    const handleGetData = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

   
   useEffect(()=>{
            if(id !== undefined){

                fetchData()
            }
   } , [id])

   const fetchData = async()=>{
      const res = await axios.get(`http://localhost:4000/myapp/singleuser/${id}`)

        // console.log(res.data);
        setState(res.data.user)
        // console.log(res.data.ID);
        setResId(false)
   }
    // =========data to db============================
    const SubmitData = async () => {
        try {
            const res = await axios.post("http://localhost:4000/myapp/create", state)
            // console.log(res.data.message);
            alert(res.data.message)
        }
        catch (err) {
            console.error(err.message)
        }
    }
// ==============data update ==========================
    const handleupdate = async () => {
        const res = await axios.put(`http://localhost:4000/myapp/getupdate/${id} ` , state)
        setState(res.data.handleupdate)

    }

    console.log(state);

    // useEffect(()=>{

    //     fetchData()

    // },[])



    // const fetchData =async()=>{
    //     // await axios.get()
    // }




    return (
        <>
            <div className='flex justify-center items-center h-[100vh] flex-col  w-[50rem] mx-auto'>
                <h1 className='text-center border-3 '>ADD DATA</h1>
                <form className='flex flex-col w-[100%]' onSubmit={(e) => e.preventDefault()} action="">
                    <input onChange={handleGetData} value={state.first_name} name='first_name' className='border-4 mt-2 p-2' type="text" placeholder='first name' required />
                    <input onChange={handleGetData} value={state.email} name='email' className='border-4  mt-2 p-2' type="email" placeholder='email' required />
                    <input onChange={handleGetData} value={state.last_name} name='last_name' className='border-4  mt-2 p-2' type="text" placeholder='last name' required />
                    <input onChange={handleGetData} value={state.password} name='password' className='border-4  mt-2 p-2' type="password" placeholder='password' required />


                   {
                      resID ? <Link to="/"><input className='border-4  mt-2 p-2' onClick={SubmitData} type="submit" /></Link>:

                      <Link to="/">           <button className='border-4  mt-2 p-2' onClick={handleupdate} >Updata</button> </Link>
                   } 
                   
                </form>
            </div>
        </>

    )
}

export default Add