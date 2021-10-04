import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleList = (props) => {
    const  article  = props.article;

    return(
        <div>
        <p>
        { article.title}
        </p>
        <p>
        { article.authors}
        </p>
        <p>
        { article.source}
        </p>
        <br/>
        </div>
        
    )
};

export default ArticleList;