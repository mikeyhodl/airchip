import "../styles.css";
import Helmet from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="https://mikeowino.com/img/emojis/technologist.png"
          hrefLang="en-us"
        />
        <title>Cyril Mwambeyu</title>
        <style type="text/css">{`
        body {
          background-image: url( './indexbg.avif');
        }
    `}</style>
      </Helmet>
      <div className="main" id="section-1">
        {/* <i class="fas fa-code fa-5x white"></i> */}
        <img src="Screenshot_20220823-090800.png" height={250} alt="myimage" />
        <h2>Cyril Mwambeyu</h2>
        <h3>Aspiring Computer scientist</h3>
        <p>Eldoret,Uasin Gishu.</p>
        {/* <a href="#"><i class="fab fa-email"></i></a> */}
        <a href="https://snapchat.com/add/serilreus" target="-blank">
          <i className="fab fa-snapchat" />
        </a>
        <a href="https://github.com/Airchip66" target="-blank">
          <i className="fab fa-github" />
        </a>
      </div>
    </>
  );
}
