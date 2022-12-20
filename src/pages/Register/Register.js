import React,{useState} from 'react'

const Register= () => {

    const [user,setUser] = useState({
        name:'',
        email:'',
        password:''
    })


  return (

    <div className="h-screen bg-primary flex items-center justify-center">

        <div className="bg-white shadow-md p-7 flex flex-col gap-5 w-96">
            <h1 className="text-2xl font-bold uppercase"> Chat</h1>
 


     <hr />
     <input
       type="text"
       value={user.name}
       placeholder="Enter your name"
       onChange={(e) => setUser({...user, name: e.target.value})}
       />

<input
       type="text"
       value={user.email}
       placeholder="Enter your email"
       onChange={(e) => setUser({...user, email: e.target.value})}
       />
          <input
       type="text"
       value={user.password}
       placeholder="Enter your password"
       onChange={(e) => setUser({...user, password: e.target.value})}
       />

       <button className="contained-btn">Register</button>

</div>
      
    </div>
  )
}

export default Register