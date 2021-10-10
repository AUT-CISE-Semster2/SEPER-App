import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";

//this class fetch the articles data from database and display in a table
class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    //Axios GET Request from the HTTP address
    axios
      .get('http://localhost:5000/articles')
      .then(res => {
        this.setState({
          articles: res.data // set the articles state to the responded data from the Request
        })
      })
      .catch(err =>{
        console.log(err);
      })
  };


  render() {
    const articles = this.state.articles;
    console.log("PrintArticle: " + articles);

    return (
          <div>
              <Styles>
                  <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
          </div>
    );
  }
}

export default ArticleList;
