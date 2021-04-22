import React from "react"
import "./How.css"

export const How = () => {
    return(
        <div className="how">
            <h2> What is Odius? </h2>
            <p className="main_desc" style={{marginBottom: "5px"}} >
            Odius is an experimental AI/NFT project that aims to utilize machine learning to create unique NFTs. We love the art that is possible to create with GANs, it is truly fascinating to see beautiful works that are completely generated from a computer.
            </p>
            <p>TLDR: We're gonna create some dope AI art.</p>
            <h2 style={{marginTop: "60px"}}>Join the AI Revolution</h2>
            <p className="main_desc" style={{marginBottom: "30px"}} >
            We wanted to use our machine learning skills to create AI-art, but GAN models are extremely computationally expensive to train. Without spending thousands of dollars on industry leading hardware, getting higher than 128x128 resolution images can take several months to train, even on a RTX 2080 Ti. This means that very few people have the computing power needed to train such models. With time, if the launch is successful, we can acquire cutting edge GPU hardware which will allow Odius to produce amazing high-fidelity art.       
            </p>
            <p className="main_desc" style={{marginBottom: "50px"}} >
            We hope to make a fun ecosystem that combines our passion for AI and art, made possible through the means of DeFi and NFTs.
            </p>
            <p className="main_desc" style={{marginBottom: "30px"}} > Disclaimer: Please bear in mind that investing in crypto projects is inherently risky and we make no promises that you will make money by investing in us. You could lose your entire investment. </p>
        </div>
    )
}
