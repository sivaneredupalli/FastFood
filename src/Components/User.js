import { useState } from "react";

const User = (props)=>{
    const [count1,setCount1] = useState(10)
    const [count2,setCount2] = useState(20)
    const {name} = props;
    return(
        <div>
            <h2>Count1 = {count1}</h2>
            <h2>Count2 = {count2}</h2>
            <button onClick={()=>{
                setCount1(count1+1);
                setCount2(count2+2);
            }}>Increase The Count</button>
            <h2>Name : {name}</h2>
            <h3>Location : Hyderabad</h3>
            <h4>Contact : @neredupallisiva3 </h4>
        </div>
        
    )
}
export default User ;