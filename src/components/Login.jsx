import React,{useState} from "react"


const LoginDiv=()=>{
    const[userData,setUserData]=useState(
        {
            userName:"",
            password:""
        })
        const setUserName=(e)=>{
            let copy={...userData}
            copy.userName=e.target.value 
            setUserData(copy)
        }
        const setUserPassword=(e)=>{
            let copy={...userData}
            copy.password=e.target.value
            setUserData(copy) 
        }
        const handletologin=()=>{
            console.log(userData)
        }

        return (
            <div>
                <input type="text" onChange={setUserName} placeholder="Enter the userName:"/>
                <input type="text" onChange={setUserPassword} placeholder="Enter the password"/>
                <button onClick={handletologin}>LOGIN</button>
            </div>
        )
    
}
export default LoginDiv

        
         

        

