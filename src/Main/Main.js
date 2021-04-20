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
                </div>
                <a href="https://app.uniswap.org/#/swap?inputCurrency=0xa49dc04d118bdf4a3471f593c1bba0c99b2187ea">
                    <button class="button">Buy on Uniswap </button>
                </a>
        </div>
    )
}
