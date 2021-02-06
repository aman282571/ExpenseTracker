import React,{useState,useContext} from 'react'
import {Addcontext} from '../App'

 function Add() {
     const[add,change]=useState({text:"",amount:0})
    const context = useContext(Addcontext);
     function call(e){
      context.changelist([...context.list,{text:add.text,amount:add.amount}])
      e.preventDefault()
            

    } 
    return (
        
        <div id="add">
            <h4>Add New Transaction</h4>
            <form onSubmit={call}>
           <h5>Text</h5> 
           <input type="text" onChange={(e)=>change({...add,text: e.target.value})} placeholder="enter text..."/>

           <h5 id="h5">Amount  </h5> 
           <input type="number"  onChange={(e)=>change({...add,amount:e.target.value})} placeholder="enter amount..."/><br/>
           <input type="submit" value="ADD TRANSACTION"></input>
           </form>
        </div>
    )
}
export default Add