/* TODO - add your code to create a functional React component that renders account details for a logged in user.
 Fetch the account data from the provided API. 
 You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */ 
import { useNavigate } from 'react-router-dom'

 import Books from "./Books"

 export default function MyAccount() {

    const navigate = useNavigate()

return (
    <>
<h1>Welcome</h1>
<button onClick={() => {
    navigate('/accountInfo');
}}>View Account Info</button>
<button>Checkout Book</button>
<button>Return Book</button>
<Books/>
    </>
)

}
