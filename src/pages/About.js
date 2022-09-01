import "../styles.css";
import Helmet from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="./abouticon.png"
          hrefLang="en-us"
        />
        <title>About Me</title>
        <style type="text/css">{`
        body {
          background-image: url( './aboutbg.avif');
        }
    `}</style>
      </Helmet>
      <div className="main" id="section-2">
        {/* About */}
        <h2>About</h2>
        <p>
          <b>
            Hi there{" "}
            <span role="img" aria-label="">
              😀
            </span>{" "}
            , Welcome to this website all about me, feel free to scroll through,
            learn about me and my qualifications
          </b>
        </p>
        <p></p>
        <p>I am 15 years of age</p>
        <p>Currently schooling at Gulab Lochab Academy, Eldoret </p>
        <p>I am aspiring web Developer</p>
      </div>
    </>
  );
}
