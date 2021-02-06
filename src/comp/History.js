import React,{useContext} from 'react'
import { Historycontext } from "../App";
import '../App.css'
 function History() {
    const list = useContext( Historycontext)
    return (
        <div id="history">
            <h4>History</h4>
            <div id="historyin">
                <ul>
            
            { list.length==0?<h3>NO HISTORY YET</h3>: list.map((list,index)=>{
        console.log(list.text)
         return <li key={index} id={Number(list.amount)<0?'negativeb':'positiveb'}> <p> {list.text}</p> <p> {list.amount}</p></li>
       
      })}
            </ul>
            </div>
        </div>
    )
}
export default History