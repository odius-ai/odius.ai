import React from "react"
import './Stats.css';
import { Card } from "../Card"

export const Stats = () => {
    return (
        <div className="info_container">
            <div className="line"> </div>
            <div className="info">
                <Card text="Circulation: 1000"/>
                <Card text="TVL: 1000"/>
                <Card text="Odius price: $100"/>
                <Card text="Unicrypt lock"/>
            </div>
        </div>
    )
}
