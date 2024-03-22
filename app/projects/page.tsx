import "@/app/projects/projects.css";
import Image from "next/image";

export default function Projects() {
  return (
    <main>
      <div className="project-23 flex flex-col rounded-2xl p-4 m-4 text-center">
        <h1>
          In the 2022-2023 First Lego League season, we won the Innovative
          Project 2nd place award with our Street Lamp Improvement Project.
          <img src="/odul.png" alt="Our Prize" className="img-projects flex my-4 rounded-2xl" />
          <Image
            src="/proje23.png"
            alt="Our Project in 2023"
            className="img-projects flex my-4 rounded-2xl"
            width={280}
            height={280}
          />
        </h1>
      </div>
      <div className="project-24 flex flex-col rounded-2xl p-4 m-4 text-center">
        <h1>
          We are counting down the days with excitement to find out our ranking
          for the 2023-2024 season with our project developed using the art of
          installation.
          <Image
            src="/proje24.png"
            alt="Our Project in 2024"
            className="img-projects flex my-4 rounded-2xl "
            width={280}
            height={280}
          />
        </h1>
      </div>
    </main>
  );
}
