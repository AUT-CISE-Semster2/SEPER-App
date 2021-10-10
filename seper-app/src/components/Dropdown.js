import React from 'react';
import SEPractices from "../Data/SEPractices"

//loop thorugh SEPractices and list all the practices
  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );

  const Dropdown = ({filter, setFilter}) => {
    return (
        <div>
             <select
             className="select"
             value ={filter || ""} //if value is set, filter the set value OR if the value is null filter all method
             onChange = {
               e => setFilter(e.target.value)} //on select set the filter value to target value
             >
              <option value="">All Methods</option>
              {optionItems}
             </select>
         </div>

    )
  }
  export default Dropdown;

  