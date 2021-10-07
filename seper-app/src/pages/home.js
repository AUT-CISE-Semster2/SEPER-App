import React from "react";
 
const Home = () =>  {
    return (
      <div>
        <div>
          <h2>About SEPER</h2>
          <p>This App is created to support developers’ decisions about
the use of different practices based on evidence and experience rather than possibly unsubstantiated claims. 
<br/><br/>There is a lot of evidence about claims that are documented in published academic research papers but these are unavailable to many commercial software engineers because: 
<br/>(a) they are behind a paywall, 
<br/>(b) they are written in unfamiliar academic language and 
<br/>(c) it is difficult to find the trends in evidence to make a decision without a lot of searching, filtering and reading. 
<br/><br/>The Ideal is to make this easier for practitioners by doing most of this work and storing the results in a searchable database.</p>
        </div>
        <hr/>
        <div>
        <h2> How to use SEPER</h2>
        <h3> How to sort columns</h3>
        <p><b>To sort any columns: </b></p>
        <ul>
          <li>Click on the Column's header once for ascending order</li>
          <li>Click on the Column's header twice for descending order</li>
        </ul>
        <p><b>How to sort multiple columns</b></p>
        <ul>
          <li>To select multiple columns hold shift and click on the column</li>
        </ul>
        </div>
      </div>
    );
  }
 
export default Home;
