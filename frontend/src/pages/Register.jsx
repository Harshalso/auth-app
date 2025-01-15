import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        mobile: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    }
    const handleSumbit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:4000/auth/register', values)
            if(response.status === 201) {
                navigate('/login')
            }
        } catch(err) {
            console.log(err.message)
        }
    }
  return (
    // justify-center= horizatally center and items-center = center vertically; line 31 width = box width
        <div className='flex justify-center items-center h-screen'>
        <div className='shadow-lg px-8 py-5 border w-96'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form onSubmit={handleSumbit}>
                <div className="mb-4">
                    <label htmlFor="username" className='block text-gray-700'>Username</label>
                    <input type="text" placeholder='Enter Username' className='w-full px-3 py-2 border'
                    name="username" onChange={handleChanges}/>
                    {/* px and py is padding; onChange handle the event*/}
                    
                </div>

                <div className="mb-4">
                    <label htmlFor="mobile" className='block text-gray-700'>Contact Number</label>
                    <input type="int" placeholder='Enter Mobile Number' className='w-full px-3 py-2 border'
                    name="username" onChange={handleChanges}/>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className='block text-gray-700'>Email</label>
                    <input type="email" placeholder='Enter Email' className='w-full px-3 py-2 border'
                    name="email" onChange={handleChanges}/>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className='block text-gray-700'>Password</label>
                    <input type="password" placeholder='Enter Password' className='w-full px-3 py-2 border'
                    name="password" onChange={handleChanges}/>
                </div>
                <button className="w-full bg-green-600 text-white py-2 ">Submit</button>
            </form>
            <div className="text-center">
                <span>Already have account?</span>
                <Link to='/login' className='text-blue-500'>Login</Link>
                {/* className can be used to define CSS */}
            </div>
        </div>
    </div>
  )
}

export default Register
