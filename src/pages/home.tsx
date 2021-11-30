import { GroovyButton } from "components/groovyButton/groovyButton";
import React from "react";
import { Color } from "types/colors";
import Logo from "assets/logo.png";

export const Home: React.FC = () => {
  return (
    <div className="page home">
      {/* <GroovyButton
        onClick={() => {
          console.log("");
        }}
        style={{
          position: "absolute",
          top: "15%",
          left: "15%",
          width: "300px",
        }}
        color={Color.BLUE}
      >
        Manifesto
      </GroovyButton>
      <GroovyButton
        onClick={() => {
          console.log("");
        }}
        style={{
          position: "absolute",
          top: "82%",
          left: "15%",
          width: "300px",
          animationDelay: "-0.4s",
        }}
        color={Color.GREEN}
      >
        Events
      </GroovyButton>
      <GroovyButton
        onClick={() => {
          console.log("");
        }}
        style={{
          position: "absolute",
          top: "20%",
          left: "75%",
          width: "300px",
          animationDelay: "-1.4s",
        }}
        color={Color.LILAC}
      >
        Contact
      </GroovyButton>
      <GroovyButton
        onClick={() => {
          console.log("");
        }}
        style={{
          position: "absolute",
          top: "75%",
          left: "65%",
          width: "300px",
          animationDelay: "3.5s",
        }}
        color={Color.PINK}
      >
        Archive
      </GroovyButton>
      <GroovyButton
        onClick={() => {
          console.log("");
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          width: "300px",
          animationDelay: "2.2s",
        }}
        color={Color.YELLOW}
      >
        About
      </GroovyButton> */}
      <img src={Logo} width={700} className="logo" />
      <div className="manifesto-container">
        <h1>Manifesto</h1>
        <p>
          SODAA are a collective of dreamers. We think about new models of
          cooperation and how they connect with physical spaces through online
          and IRL participation.
        </p>

        <p>
          Imagine a music venue funded and operated by its community, where
          every member is involved in the decision-making process. How would
          that work? What would that sound like?
        </p>

        <p>
          SODAA embraces artists, musicians, DJs, producers, coders,
          songwriters, promoters, hackers, and partygoers (all others). We think
          they should communicate, participate, celebrate. SODAA listens to all.{" "}
        </p>

        <p>
          We form a community that will develop alternative, decentralised
          decision making and governance models: new ways of making, showing and
          listening, new spaces for participation.{" "}
        </p>

        <p>
          Jump into our Discord, attend our workshops, panels and parties and be
          part of creating a sustainable and inclusive music ecology.{" "}
        </p>
      </div>
    </div>
  );
};
