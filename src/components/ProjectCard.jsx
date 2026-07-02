function ProjectCard({
  title,
  description,
  technologies,
  image,
  link
}) {
  return (
    <div className="card project-card shadow-sm mb-4">
      <div className="row g-0 align-items-center">

        <div className="col-md-6">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>

            <p>{description}</p>

            <p>
              <strong>Technologies:</strong><br />
              {technologies}
            </p>

            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={image}
            alt={title}
            className="img-fluid project-image"
          />
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;