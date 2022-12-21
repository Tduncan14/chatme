import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [user,setUser] = useState({
      
        email:'',
        password:''
    })


    const login = async (e) => {
        e.preventDefault()

        console.log(user)
    }


  return (

    <div className="h-screen bg-secondary flex items-center justify-center">

        <div className="bg-white shadow-md p-7 flex flex-col gap-5 w-96">
            <h1 className="text-2xl font-bold uppercase"> Chat</h1>
 


     <hr />

<input
       type="text"
       value={user.email}
       placeholder="Enter your email"
       onChange={(e) => setUser({...user, email: e.target.value})}
       />
          <input
       type="password"
       value={user.password}
       placeholder="Enter your password"
       onChange={(e) => setUser({...user, password: e.target.value})}
       />

       <button className="contained-btn"
        onClick = {login}>Login</button>


       <Link to="/register">
       Don't have an account ?
       </Link>

</div>
      
    </div>
  )
}

export default Login