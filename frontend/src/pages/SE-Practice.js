import React from "react";
import articles from "../Data/articles.js";
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <div class="SE-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div>
             <Styles>
                <Table
                  data={articles}
                  columns={tablecolumns}
                  />
              </Styles>
        </div>
        <p>There will be a way to select an SE practice from our SEPER repository here</p>
        <p>Also the display table of evidence levels for different claims will show here for the SE practice selected</p>
      </div>
    );
} 
 
export default SEPractice;
