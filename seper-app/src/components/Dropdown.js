import React from 'react';
import SEPractices from "../Data/SEPractices"

  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );

  const Dropdown = ({filter, setFilter}) => {
    return (
        <div>
             <select
             className="select"
             value ={filter || ""}
             onChange = {
               e => setFilter(e.target.value)}
             >
                {optionItems}
             </select>
         </div>

    )
  }
  export default Dropdown;

  