import React from 'react';
import SEPractices from "../Data/SEPractices"

  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );
  const Dropdown = (props) => {
    return (
        <div>
             <select
             options={props.options}
             className="select"
            //  onChange={({value, label}) => {
            //     props.setSelected(value);
            //  }}
             >
                {optionItems}
             </select>
         </div>

    )
  }
  export default Dropdown;
