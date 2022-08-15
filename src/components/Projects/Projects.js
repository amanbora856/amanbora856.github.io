import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import staking from "../../Assets/Projects/staking.png";
import wallet from "../../Assets/Projects/wallet.png";
import ERC20 from "../../Assets/Projects/ERC20.png";
import ERC721 from "../../Assets/Projects/ERC721.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wallet}
              isBlog={false}
              title="MultiSignature Wallet"
              description="The goal of this project was to learn how to connect backend frontend along with the testnet server.
              TechStack=React.js,Truffle,Solidity,Metamask"
              ghLink="https://github.com/amanbora856/Multi-sig-wallet"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERC721}
              isBlog={false}
              title="ERC721 "
              description="An ERC721 NFT compatible project with the feature of minting a new nft ,along with frontend and metamask integration.User can come and mint there nft as and when required   .
              TechStack=Hardhat,Solidity,Metamask,PINATA."
              ghLink="https://github.com/amanbora856/ERC721"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ERC20}
              isBlog={false}
              title="ERC20"
              description="An ERC20 compatible project which  I integrated with frontend and metamask and user can trade there nft to a particular address as and when required."
              ghLink="https://github.com/amanbora856/ERC20"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Vending Machine"
              description="A vending machine selling    donut.User can deposit ether whenever they want to have donuts .Also the events are emitted according to the scenario coming and the owner of the machine can restock the machine whenever required."
              ghLink="https://github.com/amanbora856/VendingMachine"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Locker System"
              description="A Basic Locker system for depositing and withdrawing the amount as and when required also it emits event accoring to the events approaching."
              ghLink="https://github.com/amanbora856/LockerSystem"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lottery Contract"
              description=" A basic lottery contract with the ability to select the winner out of the participating players and transferring the ether to the winner's account."
              ghLink="https://github.com/amanbora856/lotterycontract"
                            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio"
              description="The following is my portfolio which I created using different techstack .It showcase my talents and the works that I have done until now. "
              ghLink="https://github.com/amanbora856/amanbora856.github.io"
              
            />
          </Col>

       {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Offers Target"
              description="OffersTarget is an enterprise class performance marketing platform to manage your affiliate business with ease.

              Improve your business conversions with real time smart insights, powered with AI backed feature and advance anti-fraud system. "
              ghLink="https://offerstarget.com/"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="HP Protrain"
              description="HP ProTrain, an interactive application is putting the power of learning into the hands of HP promoters. This real-time training platform streamlines and centralizes all training materials into the mobile device, making learning convenient, rewarding and trackable."
              ghLink="https://play.google.com/store/apps/details?id=com.pmg.hpprotrain&hl=en_IN&gl=US"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={staking}
              isBlog={false}
              title="Crypto Staking"
              description="Crypto users stake there crypto coin giving the time duration for which the coin will be staked and after the time duration completes user will be rewarded with ether in there wallets.Note:In development phase"
              ghLink="https://github.com/amanbora856/staking_app_"
            />
          </Col>

          


        


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
