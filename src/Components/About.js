import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <div className="text-center m-4 p-4">
        <h1 className="text-xl font-semibold">Class Component Demonstration </h1>
         
         <div className=" m-4 p-4">
         <User name="Siva Neredupalli(Functional)"/>
         </div>
         <div className=" m-4 p-4">
         <UserClass name="First Child(Class)"/>
         </div>
         <div className=" m-4 p-4">
         <UserClass name="Second Child(Class)"/>
         </div>
         </div>   
    )
}
export default About;

