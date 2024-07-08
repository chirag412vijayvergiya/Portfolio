import Image from "next/image";
import Badge from "./Badge";
import { Github, Globe } from "lucide-react";
function ProjectCard({
  title,
  description,
  githubLink,
  demoLink,
  projectImage,
  skills,
  index,
}) {
  return (
    <div
      key={index}
      className={`flex flex-col items-center p-6 rounded-xl shadow-lg gap-[2rem] md:gap-[10rem] ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative flex-shrink-0 w-full md:w-2/5 mt-2 md:mt-0">
        <Image
          src="/laptop.svg"
          alt="Laptop Graphic"
          width={400}
          height={400}
          className="w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {projectImage && (
            <Image
              src={projectImage}
              alt={title}
              fill
              className="object-cover object-top"
              quality={100}
              style={{
                clipPath: "polygon(12% 16%, 88% 16%, 88% 84%, 12% 84%)",
              }}
            />
          )}
        </div>
      </div>
      <div className="md:ml-8 w-full md:w-1/2 text-white flex flex-col justify-center">
        <h3 className="text-2xl font-body-1 pb-6 text-green-500">{title}</h3>
        <p className="text-base text-white-48 pb-4">{description}</p>
        <div className="flex flex-wrap items-center pb-6">
          {skills.map((skill, index) => (
            <Badge key={index} text={skill} />
          ))}
        </div>
        <div className="flex items-center space-x-4 mb-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1"
            >
              <Github />
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 ease-in-out hover:bg-white-12 hover:rounded p-1"
            >
              <Globe />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
