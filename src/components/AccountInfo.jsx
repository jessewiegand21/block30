const apiUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export default async function AccountInfo({token}) {
console.log(token)
return <p>{token.token}</p>
// try {
//     const response = await fetch(`${apiUrl}/users/me`, {
//         headers: {

//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`,
//         },
//     })
//     const result = await response.json()
//     console.log(token)
//     console.log(result);
//     return result;
// } catch (error) {
//     console.log(error)
// }
// return (
//     <div>{result.id}</div>
// )

}