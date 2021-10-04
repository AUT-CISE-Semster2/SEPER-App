import Dropdown from "../components/Dropdown.js";
import React from "react";
import ArticleList from "../components/ArticleList.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
               <Dropdown
                title="SE Methods"             
               />
              <ArticleList/>
      </div>
    );
}

export default SEPractice;