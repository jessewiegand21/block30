/* TODO - add your code to create a functional React component that renders a login form */
import { useState } from "react"
import { LoginFetch } from "../API"
import { useNavigate } from "react-router-dom"



export default  function Login({setToken}) {
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const handleClick = () => {
        
        navigate('/myAccount')
        
    }


    const info = {
        email ,
        password ,
    }

    return (
        <>
        <form>
            <label htmlFor="email">Email</label>
            <input type="text" onChange={(e) => {
                setEmail(e.target.value)
                console.log(e.target.value)
            }}/>
            <label htmlFor="password">Pasword</label>
            <input type="password" onChange={(e) => {
                setPassword(e.target.value)
                console.log(e.target.value) 
            }}/>
            <button type="submit" onClick={ async (e) => {
                e.preventDefault();
              const tk = await LoginFetch(info);
                console.log(tk)
                 setToken( await tk.token)
                handleClick();
            }}>Login</button>
        </form>
        </>
    )
}