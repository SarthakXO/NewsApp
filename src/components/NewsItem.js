import React from "react";

const NewsItem =(props)=> {
    
  
    let { title, description, author, imageUrl,newsUrl,publishedAt } = props;
    return (
      <div>
        <div className="card my-3 mx-3" >
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{author}</li>
            <li className="list-group-item">{new Date(publishedAt).toLocaleString()}</li>
          </ul>
          <div className="card-body">
            
            <a href={newsUrl} target="_blank "className="card-link">
              Read More
            </a>
          </div>
        </div>
      </div>
    );

}

export default NewsItem;
