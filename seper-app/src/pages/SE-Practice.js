
import React from "react";
import articles from "../Data/articles";
import tablecolumns from "../components/tablecolumns.js";
import Table from "../components/evidencetable.js";
import Styles from "../components/tablestyle.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <h3>Select Method: </h3>
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