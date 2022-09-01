import "../styles.css";
import Helmet from "react-helmet";

export default function Experience() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="./experienceicon.png"
          hrefLang="en-us"
        />
        <title>My Experience</title>
        <style type="text/css">{`
        body {
          background-image: url( './experiencebg.avif');
        }
    `}</style>
      </Helmet>
      <div className="main" id="section-3">
        {/* Experience */}
        <h2>Experience</h2>
        <p>
          I have done Edexcel Igcse's Ict curriculum upto Yr 10 at GLA, Eldoret{" "}
        </p>
        <p>
          I have participated in a work experience program for two weeks at{" "}
          <a href="https://lancolatech.co.ke/" target="_blank" rel="noreferrer">
            Lancolatech Company
          </a>{" "}
        </p>
        {/* <a href="https://lancolatech.co.ke" target="_blank">LancolatechLimited</a>  */}
      </div>
    </>
  );
}
