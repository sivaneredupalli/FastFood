import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    console.log(err)
    return (
        <>
        <h1>Oops</h1><br/>

        <h2>Something went wrong...!</h2><br/>

        <h3>{err.status} : {err.statusText}</h3>
        
        </>
        
    )
}
export default Error;
