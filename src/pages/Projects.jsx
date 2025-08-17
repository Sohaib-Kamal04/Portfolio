import { PROJECTS } from "../constants/index.js";
const Projects = () => {
  return (
    <div className="pb-4 -mt-20">
      <h2 className="my-20 text-center text-8xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={350}
                height={350}
                alt={project.title}
                className="mb-6 rounded transform transition duration-400 ease-in-out md:hover:scale-200 md:hover:translate-x-30"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                  key={index}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
