import { render } from '@testing-library/react';
import React from 'react'
import './Comments.css'

function Comment({prop}){

    const renderStar = (num) => {
        var indents = []
        if(num === 0)
            indents.push("No Rating")
        for(let i=0; i < num; i++)
        {
            indents.push(<span className={num > 3 ? "green-star" : num < 3 ? "red-star" : "yellow-star"}><i class="fas fa-star"></i></span>);
        }
        return(indents);
    }
    return(
        <>
            <div className="comment-container">

            <hr className="line"></hr>
            <div className="row">
                <div className="column-left-comment">
                    {prop.name}
                </div>
                <div className="column-right-comment">
                    {prop.comment}
                </div>

                <div className="column-right-rating">
                RATING : &nbsp;
                {
                    renderStar(prop.rating)   
                }
                </div>
            </div>
            </div>
        </>
    );
}

export default Comment;