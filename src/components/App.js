// create your App component here
import React,{useEffect, useState} from "react";



function App(){
    const[dog,setdog]=useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res=>res.json())
        .then(data=>setdog(data.message))
    },[])
    return (dog.length>0 ?<img src={dog} alt="A Random Dog"></img>:<p>Loading...</p>)
}

export default App;