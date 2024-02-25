import "@/app/home.css";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="left-info-box">
          <span className="left-info-box-title">
            <h1 className="left-title p-4">Who we are?</h1>
          </span>
          <span className="left-info-box-text">
            <h3 className="left-box-text p-4">
              Hello! We are Team Voltran from İzmir/Çiğli Tuğba Özbek Anatolian
              High School. We are interested in technology, sensitive to nature,
              and always curious to do better.
            </h3>
          </span>
          <span>
            <img
              src="/teamphoto.png"
              alt="A photograph of our team."
              className="team-photo"
            />
          </span>
        </div>
        <div className="right-info-box">
          <span className="right-info-box-title">
            <h1 className="right-title p-4">What do we do?</h1>
          </span>
          <span className="right-info-box-text">
            <h3 className="right-box-text p-4">
              We participate in tournaments such as FLL (First Lego League) and
              Teknofest, where we strive to do our best as a team while also
              enjoying quality time together. We share our projects on social
              media and, with the support of our school, continually strive for
              improvement.
            </h3>
          </span>
          <span>
            <img
              src="/teamphoto.png"
              alt="A photograph of our team."
              className="team-photo"
            />
          </span>
        </div>
      </div>
      <div className="page-box">
        <h1 className="page-box-h1 text-teal-300">
          Click{" "}
          <i>
            <u>
              <a href="/members">here</a>
            </u>
          </i>{" "}
          to see our members.
        </h1>
        <h1 className="page-box-h1 text-teal-300">
          Click{" "}
          <i>
            <u>
              <a href="/projects">here</a>
            </u>
          </i>{" "}
          to see our projects.
        </h1>
        <h1 className="page-box-a text-teal-300">
          <a href="https://www.instagram.com/fll_voltran/">
            <u>
              <i>Instagram</i>
            </u>
          </a>
        </h1>
        <h1 className="page-box-a text-teal-300">
          <a href="https://www.youtube.com/@TugbaOzbek-zn9br">
            <u>
              <i>Youtube</i>
            </u>
          </a>
        </h1>
      </div>
      <a href="/"><img src="/favicon.png" alt="Voltran Logo" className="img-logo" /></a>
    </main>
  );
}
