function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-4 text-center mb-4 mb-md-0">
            <img
              src="src/assets/me.jpg"
              alt="Portrait of myself"
              className="img-fluid rounded-circle profile-img shadow"
            />
          </div>

          <div className="col-12 col-md-8">
            <h2 className="mb-3">About Me</h2>

            <p>
              Hi! I'm <strong>Arabella Ball</strong>, a software development
              student pursuing an A.A.S. in Software Development with a
              concentration in Full Stack Development. I enjoy building clean,
              responsive web applications and continually expanding my skills
              through coursework and personal projects. My experience includes
              React, JavaScript, Node.js, Express, MongoDB, C#, PHP, SQL, Git,
              and modern CSS frameworks. Outside of programming, you'll usually
              find me knitting, spending time with my cats, or learning
              something new.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
