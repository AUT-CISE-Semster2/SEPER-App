import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Styles from "../components/tablestyle.js";
import Table from "../components/evidencetable.js";
import tablecolumns from "../components/tablecolumns.js";

class ArticleList extends Component {
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
