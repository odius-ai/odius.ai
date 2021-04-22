import React from "react"
import { Donut } from "../Donut"
import "./Tokenomics.css"


export const Tokenomics = () => {
    return(
        <div>
            <h1>Tokenomics</h1>
            <Donut />
            <table className="table">
                <tr>
                    <td>Name: </td>
                    <td className="value">Odius.ai</td>
                </tr>
                <tr>
                    <td>Ticker: </td>
                    <td className="value">ODI</td>
                </tr>
                <tr>
                    <td>Supply: </td>
                    <td className="value">1,000,000,000,000</td>
                </tr>
                <tr>
                    <td>Contract: </td>
                    <td className="value">0xa49dc04d118bdf4a3471f593c1bba0c99b2187ea</td>
                </tr>
            </table>
        </div>
    )
}
