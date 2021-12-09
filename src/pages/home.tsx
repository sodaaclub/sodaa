import Logo from "assets/logo.png";
import React from "react";
import Twitter from "assets/twitter.svg";
import Discord from "assets/discord.svg";
import Instagram from "assets/instagram.svg";

export const Home: React.FC = () => {
  const openLink = (link: string) => {
    window.open(link, "_newtab");
  };

  return (
    <div className="page home">
      <div className="header-container">
        <img src={Logo} className="logo" />
      </div>
      <div className="staggered-1">
        <p className="a">Image a music and arts venue</p>
        <p className="b">
          funded and operated by its{" "}
          <span className="pink bold">community</span>,
        </p>
      </div>
      <div className="staggered-2">
        <p className="a">
          Where every member is <span className="highlight-1">involved</span>
        </p>
        <p className="b">
          in the <span className="highlight-2">decision making process.</span>
        </p>
      </div>
      <div className="staggered-3">
        <p className="a">HOW</p>
        <p className="b">WOULD</p>
        <p className="c">THAT</p>
        <p className="d">WORK?</p>
      </div>

      <div className="staggered-4">
        <div className="l">
          <div className="vertical-text">
            <div className="column">
              <p className="title">S</p>
              <p className="vertical">elf</p>
            </div>
            <div className="column">
              <p className="title">O</p>
              <p className="vertical">rganised</p>
            </div>
            <div className="column">
              <p className="title">D</p>
              <p className="vertical">ecentralised</p>
            </div>
            <div className="column">
              <p className="title">A</p>
              <p className="vertical">ccessible</p>
            </div>
            <div className="column">
              <p className="title">A</p>
              <p className="vertical">rts</p>
            </div>
          </div>
        </div>
        <div className="r">
          <p className="b">dreams of applying</p>
          <p className="c">
            new mode of <span className="cooperation">cooperation</span>
          </p>
          <p className="d">to physical spaces</p>
          <p className="e">combining online and IRL participation.</p>
        </div>
      </div>
      <div className="staggered-5">
        <div className="row-1">
          <p className="a">artists</p>
          <p className="b">DJs</p>
          <p className="c">musicians</p>
          <p className="d">producers</p>
          <p className="e">coders</p>
        </div>
        <div className="row-2">
          <p className="a">songwriters</p>
          <p className="b">hackers</p>
          <p className="c">promoters</p>
          <p className="d">partygoers</p>
        </div>
      </div>
      <div className="cta-container">
        <button className="cta" onClick={() => openLink("")}>
          JOIN US
        </button>
      </div>
      <div className="staggered-6">
        <div className="l">
          <p>in building a</p>
        </div>
        <div className="r">
          <p>decentralised governance model for a venue in London</p>
        </div>
      </div>
      <div className="info">
        <p>Jump into our Discord, attend our meetings,</p>
        <p>panels and parties and help us create a</p>
        <p>
          <span className="pink">sustainable and inclusive future</span> for the
          music scene.
        </p>
      </div>
      <div className="footer">
        <a href="mailto:hello@sodaa.club" className="link">
          hello@sodaa.club
        </a>
        <div className="icons">
          <button className="icon-button">
            <img src={Discord}></img>
          </button>
          <button className="icon-button">
            <img src={Instagram}></img>
          </button>
          <button className="icon-button">
            <img src={Twitter}></img>
          </button>
        </div>
      </div>
    </div>
  );
};
