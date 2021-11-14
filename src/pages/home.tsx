import { GroovyButton } from "components/groovyButton/groovyButton";
import React from "react";
import { Color } from "types/colors";
import { ReactComponent as LogoPink } from "../assets/temp-logo.svg";

export const Home: React.FC = () => {
  return (
    <div className="page home">
      <GroovyButton
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
      </GroovyButton>
      <LogoPink className="logo" />
    </div>
  );
};
