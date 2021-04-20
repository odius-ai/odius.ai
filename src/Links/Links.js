import React from "react"
import "./Links.css"

import dext from "../images/dext.png"
import twitter from "../images/twitter.png"
import telegram from "../images/telegram.png"
import gecko from "../images/gecko.png"
import etherscan from "../images/etherscan.png"

export const Links = () => {
    return(
        <>
            <div className="links">
                <a className="link_item" href="https://www.dextools.io/app/">
                    <img src={dext} alt="the fuck" width="80px"/> 
                </a>
                <a className="link_item" href="https://etherscan.io/token/0x0cf8c12c961b117e3327bc8d78077dc2c315bfb1?a=0xb682bcb015fa3a1f7b46a5eef34539a0f82d8e80">
                    <img src={etherscan} alt="the fuck" width="40px"/> 
                </a>
                <a className="link_item" href="https://twitter.com/">
                    <img src={twitter} alt="the fuck" width="40px"/> 
                </a>
                <a className="link_item" href="https://telegram.org/">
                    <img src={telegram} alt="the fuck" width="40px"/> 
                </a>
                <a className="link_item" href="https://www.coingecko.com/en">
                    <img src={gecko} alt="the fuck" width="40px"/> 
                </a>
            </div> 
            <div className="line_faded"> </div>
        </>
    )
}
