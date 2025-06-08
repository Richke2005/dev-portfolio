import React from "react";

const Card = ({image, title, text, children}) =>{
    return (
        <div>
            <img src={image} alt={title}></img>
            <h2>
            {title}
            </h2>

            <p>
            {text}
            </p>

            {children}
        </div>
    );
}

export default Card;