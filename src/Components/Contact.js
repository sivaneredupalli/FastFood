const Contact = ()=>{
    return(
        <div className="text-center m-4 p-4">
            <h1>If any further assistance needed, please feel free to contact us through below resources...</h1><br/>
            <h2> Mail : neredupallisiva3@gmail.com </h2> <br/>
            <h2> Mobile : 8465998776 </h2>
            <input type="text" placeholder="Name" className="p-2 m-2 border border-black text-center"></input>
            <input type="text" placeholder="Password" className="p-2 m-2 border border-black text-center"></input>
            <button className="p-2 m-2 border border-black rounded-lg text-center font-bold">Submit</button>

        </div>
    )
}
export default Contact;