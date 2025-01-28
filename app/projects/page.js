import Link from "next/link";
import ProjectCard from "../_components/ProjectCard";
import { projects } from "../_lib/constants";
import Button from "../_components/Button";

function page() {
  return (
    <section className="px-4 md:px-[5rem] pb-6 py-[7rem] ">
      <h2 className="text-indigo-400 text-[30px] md:text-3xl font-bold mb-8">
        Projects
      </h2>
      <div className="flex flex-col ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            index={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            demoLink={project.demoLink}
            projectImage={project.projectImage}
            skills={project.skills}
          />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="https://github.com/chirag412vijayvergiya/">
          <Button label="More Projects" />
        </Link>
      </div>
    </section>
  );
}

export default page;
