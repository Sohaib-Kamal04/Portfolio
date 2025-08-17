import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="pb-4 -mt-20">
      <h2 className="my-20 text-center text-8xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/8 pt-1">
              <p className="mb-2 text-m text-stone-400">{experience.year}</p>
            </div>
            <div className="wfull max-w-xl lg:w-3/4">
              <h2 className="text-2xl mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-stone-500">
                  {experience.company}
                </span>
              </h2>
              <p className="mb-4 text-stone-400">
                <ul>
                  {experience.description.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </p>
              {experience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mt-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
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

export default Experience;
