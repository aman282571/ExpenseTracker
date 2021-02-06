import React, { useContext} from 'react'
import{Summarycontext} from '../App'
import '../App.css'
function Summary() {
      
    const summary=useContext(Summarycontext)
    return (
        <div id="summary">
            
            <div>
            <h4>Income</h4>
            <p id='positive'>{summary.income}</p>
            </div>
            <div>
            <h4>Expenses</h4>
            <p id='negative'>{summary.expenses}</p>
            </div>
          
        </div>
    )
}
export default Summary