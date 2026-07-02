function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-white shadow-sm fixed-top">
        <div className="container">
          <div className="text-center text-md-start">
            <h1 className="h4 mb-0">Arabella Ball</h1>
            <p className="text-muted mb-0 small">
              Aspiring Full-Stack Developer
            </p>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navMenu"
          >
            <ul className="navbar-nav gap-3 text-center text-md-end">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
