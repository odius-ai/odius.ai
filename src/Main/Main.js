import React from "react"
import dalfy from "../images/gandalf.png"
import odius from "../images/odius_cropped.png"
import "./Main.css"

export const Main = () => {
    return(
        <div className="main_container">
                <div className="image">
                    <img src={odius} alt="the fuck" width="200px"/>
                </div>
                <h1> Odius </h1>
                <div>
                    <p className="main_desc">Take part in making art history. </p>
                    <p className="main_desc">Odius is making cutting edge AI art - on the blockchain</p>

                </div>
                <a href="https://info.uniswap.org/home">
                    <button class="button">Buy on Uniswap </button>
                </a>
        </div>
    )
}
