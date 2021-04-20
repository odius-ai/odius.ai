import React from "react"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "../images/gandalf.png"
import "./Timeline.css"

export const Timeline = () => {
    return(
        <div className="timeline">
            <h1> Roadmap </h1>
            <VerticalTimeline className="custom-line" animate={false}>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="February/March 2021"
                iconStyle={{background: "#66008c", opacity: "100%", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">The Inception</h3>
                <p>The first generation of the Odius AI is trained. </p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#123' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="March 2021"
                iconStyle={{background: "#66008c", opacity: "100%", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">Pre-Sale and Launch on Uniswap</h3>
                <p>To be able to provide enough liquidity on Uniswap, we will have a pre-sale where everyone can buy up to 20 Eth worth of Odius. The price per token will be 100 Odius per Eth. Uniswap launch will follow.</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="April 2021"
                iconStyle={{background: "None", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">First NFT Airdrop</h3>
                <p>First collection of NFTs will be airdropped to the holders of Odius, in a tiered fashion. From this point airdrops will continue on a monthly basis. </p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="May 2021"
                iconStyle={{background: "None", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">Gen 2</h3>
                <p>Funds from Pre-sale will be used to invest in state-of-the-art GPUs which will allow us to train extremely powerful models that output high-resolution art. </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="June 2021"
                iconStyle={{background: "None", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">Staking and Contract Audits</h3>
                <p>Odius ecosystem expanded to include staking of tokens to be able to mint your very own art pieces. Auditing of contracts will be made a priority to ensure that funds are safe. </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}
