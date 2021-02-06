import React,{useState,useEffect} from 'react'
import Summary from'./comp/Summary'
import History from'./comp/History'
import Add from'./comp/Add'
import './App.css'
export const Summarycontext= React.createContext();
export const Addcontext= React.createContext();
  export const Historycontext= React.createContext();


 function App() {
  
   const[income,changeincome]=useState(0)
   const[expenses,changeexpenses]=useState(0)
   const[list,changelist]=useState([])
  
      useEffect(()=>{
        if(list.length!==0)
       {
        if( list[list.length-1].amount<0)
           changeexpenses(expenses + Number(list[list.length-1].amount))
           else
           changeincome(income + Number(list[list.length-1].amount))
           
        }
      },[list.length]) 
  return (
    <div id="tracker">
      <div id="container">
        
      <header>
      <h2>Expenxe Tracker</h2>
      <h4>Your Balance</h4>
       <p id={(income+expenses)<0?'negative':'positive'}>{income+expenses}</p>
       </header>
  <Summarycontext.Provider value={{income:income,expenses:expenses}}>
      <Summary/>
     
      </Summarycontext.Provider>
      <Historycontext.Provider value={list}>
      <History/>
      </Historycontext.Provider>
      <Addcontext.Provider value={{list:list,changelist:changelist}}>
      <Add/>
      </Addcontext.Provider>
     
     
      </div>

    </div>
  )
}
export default App
