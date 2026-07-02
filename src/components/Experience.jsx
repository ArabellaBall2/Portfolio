import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      title: "A.A.S. Software Development",
      place: "Wake Technical Community College",
      date: "2025 – Present",
      description:
        "Pursuing an Associate in Software Development with a focus on full-stack web development. Gaining experience in React, JavaScript, Node.js, Express, MongoDB, C#, PHP, SQL, Git, and modern CSS frameworks.",
    },
    {
      title: "Volunteer Website Redesign",
      place: "New Hope Valley Railway",
      date: "2025",
      description:
        "Assisted in redesigning a website interface using Figma. Focused on improving layout structure and user experience design.",
    },
  ];

  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Experience</h2>

        <div className="row g-4">
          {experiences.map((exp, index) => (
            <div key={index} className="col-12">
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
