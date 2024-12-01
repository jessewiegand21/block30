/* TODO - add your code to create a functional React component that renders a registration form */
const apiUrl ="https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/"
import { useState } from "react"
import { AddUser } from "../API"

export default function RegForm({setToken}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 

    const user = {
        firstName ,
        lastName ,
        email ,
        password ,
    }

    

    return(
        <>
        <div className="regContainer">
        <h1>Register Here</h1>
        <form>
            <div>
            <label htmlFor="fName">First Name</label>
            <input type="text" className="fName" onChange={(e) => {
                setFirstName(e.target.value)
                console.log(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="lName" className="lName">Last Name</label>
                <input type="text" className="lName" onChange={(e) => {
                    setLastname(e.target.value)
                    console.log(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" className="email" onChange={(e) => {
                    setEmail(e.target.value)
                    console.log(e.target.value)
                }}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" className="password" onChange={(e) => {
                    setPassword(e.target.value)
                    console.log(e.target.value)
                }}/>
            </div>
            <div>
            <button type="submit" onClick={async (e) => {

                e.preventDefault();
              
                setToken(await AddUser(user))
            }}>Submit</button>
            </div>
        </form>
            </div>

        </>
    )
}