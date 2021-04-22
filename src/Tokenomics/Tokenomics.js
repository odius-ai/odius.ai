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
                    <td className="value">odius.ai</td>
                </tr>
                <tr>
                    <td>Ticker: </td>
                    <td className="value">$ODI</td>
                </tr>
                <tr>
                    <td>Supply: </td>
                    <td className="value">1,000,000,000,000</td>
                </tr>
            </table>
        </div>
    )
}
