import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Weather App",
      description:
        "Built a responsive weather application that displays current conditions and a three-day forecast using the Weather API. Developed with Vue.js and Tailwind CSS while focusing on clean UI design and responsive layouts.",
      technologies: "Vue.js, Tailwind.css, Weather API",
      image: "src/assets/weatherapi.png",
      link: "https://arabellaball2.github.io/ball-weatherapp/",
    },
    {
      title: "Task Manager",
      description:
        "Built a task tracking application with user authentication and CRUD operations. Developed with JavaScript, Node.js, Express, and MongoDB while implementing secure password hashing and JWT-based authentication.",
      technologies:
        "JavaScript, Node.js, Express, MongoDB, Bcrypt, jsonwebtokens",
      image: "src/assets/task.png",
      link: "https://github.com/ArabellaBall2/Task-Tracker-API.git",
    },
    {
      title: "Macon County Redesign",
      description:
        "Redesigned a county website with an emphasis on accessibility, navigation, and responsive layouts while following modern web design practices.",
      technologies: "HTML, CSS",
      image: "src/assets/maconcounty.png",
      link: "https://arabellaball2.github.io/Final_CountyRedesign/",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={project.image}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Projects;
