import "../styles.css";
import Helmet from "react-helmet";

export default function Skills() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="https://mikeowino.com/img/emojis/technologist.png"
          hrefLang="en-us"
        />
        <title>My Skills</title>
        <style type="text/css">{`
        body {
          background-image: url( './skillsbg.avif');
        }
    `}</style>
      </Helmet>
      <div className="main" id="section-4">
        {/* Skills */}
        <h2>Skills</h2>
        <p>I Can assemble websites using github repositories (templates)</p>
        <p>
          I am very fluent with the workings of all office applications and thus
          can work a a virtual office assistant{" "}
        </p>
        <p>
          i am a junior graphics designer with the help of{" "}
          <a href="https://www.canva.com/" target="_blank" rel="noreferrer">
            Canva
          </a>{" "}
        </p>
        <p>
          I have learnt to design websites with <b>html</b>
        </p>
        <p>I can program in the CSS computer language</p>
      </div>
    </>
  );
}
