import React from "react"
import "./Card.css"

export const Card = ({ text }) => {
    return (
        <div className="card">
            <h4>{text}</h4>
        </div>
    )
}
