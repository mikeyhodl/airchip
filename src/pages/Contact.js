import "../styles.css";
import Helmet from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="./contacticon.png"
          hrefLang="en-us"
        />
        <title>Contact Me</title>
        <style type="text/css">{`
        body {
          background-image: url( './contactbg.avif');
        }
    `}</style>
      </Helmet>
      <div className="main" id="section-6">
        {/* Contact me */}
        <h2>
          <b>Contact me</b>
        </h2>
        <p>
          If you would like to learn more about me, request the worksheets and
          recommendation letter from Lancola tech during my work experience, you
          can reach out to me using the the social icons under my name{" "}
          <span role="img" aria-label="">
            📲
          </span>
        </p>
      </div>
      <div className="main" id="section-7">
        <p>
          <b>Copyright: Cyril Amir Mwambeyu ©2022</b>
        </p>
      </div>
    </>
  );
}
