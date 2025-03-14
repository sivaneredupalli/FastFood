import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return (
        <>
        <h1>Namaste React Webseries</h1>
         <h1>Teaches By Akshay Saini</h1>
         <div className="aboutus">
         <User name="Siva Neredupalli(Functional)"/>
         </div>
         <div className="aboutus">
         <UserClass name="First Child(Class)"/>
         </div>
         <div className="aboutus">
         <UserClass name="Second Child(Class)"/>
         </div>
         </>   
    )
}
export default About;

