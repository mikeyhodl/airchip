import "../styles.css";
import Helmet from "react-helmet";

export default function Projects() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="./projecticon.png"
          hrefLang="en-us"
        />
        <title>My Projects</title>
        <style type="text/css">{`
        body {
          background-image: url( './projectbg.avif');
        }
    `}</style>
      </Helmet>
      <div className="main" id="section-5">
        {/* Projects */}
        <h2>Projects</h2>
        <p>
          I have only managed to build one website so far (for now), you're
          looking at it! It may not look like much right now but its a start{" "}
          <span role="img" aria-label="">
            😉
          </span>
        </p>
        <a href="https://airchip66.netlify.app/">My portfolio so far</a>
        <p>
          It has been one of my most difficult projects, it took me
          approximately 47 hours to construct upto this point, however it is
          still in the workings.
        </p>
      </div>
    </>
  );
}
