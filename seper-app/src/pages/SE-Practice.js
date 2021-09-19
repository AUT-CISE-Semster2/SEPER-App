/* eslint-disable eqeqeq */
import articles from "../Data/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";
import Dropdown from "../components/Dropdown.js";


const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <div class="SEsearch-bar">
          <input 
            type="search" 
            placeholder="Search for SE Practice" 
            id="search-input"
          /> 
          </div>
               <Dropdown/>
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  
