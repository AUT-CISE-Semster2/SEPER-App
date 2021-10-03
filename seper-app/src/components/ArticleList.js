import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ArticleList = (props) => {
    const  article  = props.article;

    return(
        <div>
        { article.title }
        </div>
        // <div className="list-container">
        //     <div className="desc">
        //         <h2>
        //             <Link to={`/show-article/${article._id}`}>
        //                 { article.title }
        //             </Link>
        //         </h2>
        //         <h3>{article.author}</h3>
        //     </div>
        // </div>
    )
};

export default ArticleList;