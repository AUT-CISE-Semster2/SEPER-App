// import articles from "../Data/articles.js";
// import Styles from "../components/tablestyle.js";
// import Table from "../components/evidencetable.js";
// import tablecolumns from "../components/tablecolumns.js";
// import Dropdown from "../components/Dropdown.js";
import React from "react";
import axios from "axios";
//import articles from "./routes/articles.js";


// const SEPractice = () => {
//     return (
//       <div>
//         <h2>Select SE Practice to get evidence for the claimed benefits</h2>
//                <Dropdown
//                 title="SE Methods"             
//                />
//                <Styles>
//                  <Table
//                   data={articles}
//                   columns={tablecolumns}
//                  />
//               </Styles>
//       </div>
//     );
// }
 
const Article = props => (
  <tr>
    <td>{props.article.title}</td>
  </tr>
)
class SEPractice extends React.Component{
  // constructor(props){
  //   super(props);
  //   this.state = {articles: []};
  // }
  state ={articles: []};
  componentDidMount() {
    this.getArticle();
  }

  getArticle = () => {
    axios.get('http://localhost:5000/articles/')
      .then((res) => {
        const data =res.data
        this.setState({articles: data});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  displayArticle = (articles) => {
    // this.state.articles.map(currentArticle => {
    //   return <Article article={currentArticle} key={currentArticle.id}/>;
    // })
    if(!articles.length) return null;
    return articles.map((article, index) => {
      <div key={index}>
        <h3>{article.title}</h3>
      </div>
    });
  };

  render() {
    return (
            <div>
              <h2>Select SE Practice to get evidence for the claimed benefits</h2>
                     {/* <Dropdown
                      title="SE Methods"             
                     />
                     <Styles>
                       <Table
                        data={articles}
                        columns={tablecolumns}
                       />
                    </Styles> */}
                    {this.displayArticle(this.state.articles)}
            </div>
          );
  }


}
export default SEPractice;  
