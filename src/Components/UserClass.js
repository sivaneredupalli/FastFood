import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count1 :10,
            count2 :11
        }
        console.log(this.props.name + "constructor");
    }
    componentDidMount(){
        console.log(this.props.name +"componentDidMount")
    }
render(){
    const {name} = this.props;
    let {count1,count2} = this.state;
    return(
        <div>
            
            <h2>count1 = {count1}</h2>
            <h2>count2 = {count2}</h2>
            <button onClick={()=>{
                this.setState({
                    count1 : count1+1,
                    count2 : count2+1
                }
                    )
            }}>Increase The Count</button>
            <h2>Name : {name} </h2>
            <h3>Location : Hyderabad</h3>
            <h4>Contact : @neredupallisiva3 </h4>
            
        </div>
        
    )
}
}
export default UserClass;