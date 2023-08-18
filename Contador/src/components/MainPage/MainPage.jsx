import { useState } from "react"
import "./MainPage.css"

export default function MainPage(){
    const [counter, setCount] = useState(0)

    function add(){
        setCount(counter+1);
    }

    function sub(){
        setCount(counter-1);
    }

    return(
        <div className="container">
            <button onClick={()=>{
                sub()
            }}> - </button>
            <p className="text">{counter}</p>
            <button onClick={()=>{
                add()
            }}> + </button>
        </div>
    )
}