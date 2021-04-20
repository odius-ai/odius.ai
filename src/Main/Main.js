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

                </div>
                <a href="https://info.uniswap.org/home">
                    <button class="button">Buy on Uniswap </button>
                </a>
        </div>
    )
}
