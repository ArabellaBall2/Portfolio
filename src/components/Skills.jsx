function Skills() {
  const skills = ["HTML & CSS", "JavaScript", "React", "Node.js", "MongoDB"];

  return (
    <section id="skills" className="py-5">
      <div className="container text-center">
        <h2 className="mb-4">Skills</h2>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
