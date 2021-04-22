import React from "react"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "../images/gandalf.png"
import "./Timeline.css"

export const Timeline = () => {
    return(
        <div className="timeline">
            <h1> Roadmap (for now)</h1>
            <VerticalTimeline className="custom-line" animate={false}>
              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="Q2 2021"
                iconStyle={{background: "#66008c", opacity: "100%", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">The Inception</h3>
                <p>Launch on Uniswap</p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#123' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="Q2 2021"
                iconStyle={{background: "#66008c", opacity: "100%", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">The Socials</h3>
                <p>Create different social platforms on which we share updates</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="Q2 2021"
                iconStyle={{background: "None", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">Hardware</h3>
                <p>Acquire the needed hardware to train our models</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="Q2 2021"
                iconStyle={{background: "None", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">Training</h3>
                <p>Finalize the algorithms and start training our network on data</p>
              </VerticalTimelineElement>


              <VerticalTimelineElement
                className="vertical-timeline-element"
                contentStyle={{ background: "#111", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #66008c' }}
                date="Q2 2021"
                iconStyle={{background: "None", boxShadow: "0 0 10px 3px #66008c"}}
              >
                <h3 className="vertical-timeline-element-title">Website</h3>
                <p>Website Improvements</p>
              </VerticalTimelineElement>

            </VerticalTimeline>
        </div>
    )
}
