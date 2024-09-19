import React from "react";
import "./style_card.css";

export const Card = ({title, description, asignedTo, startDate, endDate}) => {
    return (    
        <div className="card>">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{asignedTo}</p>
            <p>{startDate}</p>
            <p>{endDate}</p>
        </div>
    );
};

