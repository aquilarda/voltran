import "@/app/home.css";
// import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="main">
        <div className="left-info-box">
          <span className="left-info-box-title">
            <h1 className="left-title p-4">Who are we?</h1>
          </span>
          <span className="left-info-box-text">
            <h3 className="left-box-text p-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              quam fugiat corrupti cum, fuga modi doloremque suscipit dolorem
              voluptates unde aliquam voluptas consequatur odio ullam! Eum
              blanditiis itaque repellendus inventore?
            </h3>
          </span>
          <span><img src="/teamphoto.png" alt="A photograph of our team." className="team-photo"/></span>
        </div>
        <div className="right-info-box">
          <span className="right-info-box-title">
            <h1 className="right-title p-4">What are we doing?</h1>
          </span>
          <span className="right-info-box-text">
            <h3 className="right-box-text p-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
              quam fugiat corrupti cum, fuga modi doloremque suscipit dolorem
              voluptates unde aliquam voluptas consequatur odio ullam! Eum
              blanditiis itaque repellendus inventore?
            </h3>
          </span>
          <span>
            <img src="/teamphoto.png" alt="A photograph of our team." className="team-photo"/>
          </span>
        </div>
      </div>
    </main>
  );
}
