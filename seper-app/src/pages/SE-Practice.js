// import articles from "../Data/articles.js";
// import Styles from "../components/tablestyle.js";
// import Table from "../components/evidencetable.js";
// import tablecolumns from "../components/tablecolumns.js";
// import Dropdown from "../components/Dropdown.js";
// import React from "react";
// import axios from "axios";
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
 


// const Article = props => (
//   <tr>
//     <td>{props.article.title}</td>
//   </tr>
// )
// class SEPractice extends React.Component{
//   // constructor(props){
//   //   super(props);
//   //   this.state = {articles: []};
//   // }
//   state ={articles: []};
//   componentDidMount() {
//     this.getArticle();
//   }

//   getArticle = () => {
//     axios.get('http://localhost:5000/articles/')
//       .then((res) => {
//         const data =res.data
//         this.setState({articles: data});
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   displayArticle = (articles) => {
//     // this.state.articles.map(currentArticle => {
//     //   return <Article article={currentArticle} key={currentArticle.id}/>;
//     // })
//     if(!articles.length) return null;
//     return articles.map((article, index) => {
//       <div key={index}>
//         <h3>{article.title}</h3>
//       </div>
//     });
//   };

//   render() {
//     return (
//             <div>
//               <h2>Select SE Practice to get evidence for the claimed benefits</h2>
//                      {/* <Dropdown
//                       title="SE Methods"             
//                      />
//                      <Styles>
//                        <Table
//                         data={articles}
//                         columns={tablecolumns}
//                        />
//                     </Styles> */}
//                     {this.displayArticle(this.state.articles)}
//             </div>
//           );
//   }


// }
// export default SEPractice;  



import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ArticleCard from './ArticleCard';
class SEPractice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/articles')
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowBookList');
      })
  };


  render() {
    const articles = this.state.articles;
    console.log("PrintBook: " + articles);
    let articleList;

    if(!articles) {
      articleList = "there is no book record!";
    } else {
      articleList = articles.map((article, k) =>
        <ArticleCard article={article} key={k} />
      );
    }

    return (
      <div className="ShowBookList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Books List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/create-book" className="btn btn-outline-warning float-right">
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {articleList}
          </div>
        </div>
      </div>
    );
  }
}

export default SEPractice;