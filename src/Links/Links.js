import React from "react"
import "./Links.css"

import dext from "../images/dext.png"
import twitter from "../images/twitter.png"
import telegram from "../images/telegram.png"
import gecko from "../images/gecko.png"
import etherscan from "../images/etherscan.png"
import discord from "../images/discord.png"

export const Links = () => {
    return(
        <>
            <div className="links">
                <a className="link_item" href="https://www.dextools.io/app/uniswap/pair-explorer/0xbcfb8c20181a4a9952b693721c70fec2277967dd">
                    <img src={dext} alt="Dext" width="80px"/> 
                </a>
                <a className="link_item" href="https://etherscan.io/token/0xa49dc04d118bdf4a3471f593c1bba0c99b2187ea">
                    <img src={etherscan} alt="Etherscan" width="40px"/> 
                </a>
                <a className="link_item" href="https://twitter.com/odius_ai">
                    <img src={twitter} alt="Twitter" width="40px"/> 
                </a>
                <a className="link_item" href="https://www.coingecko.com/en/coins/odius">
                    <img src={gecko} alt="Gecko" width="40px"/> 
                </a>
                <a className="link_item" href="https://discord.gg/CZbQBJwS">
                    <img src={discord} alt="Discord" width="115px" height="35px"/> 
                </a>
            </div> 
            <div className="line_faded"> </div>
        </>
    )
}
