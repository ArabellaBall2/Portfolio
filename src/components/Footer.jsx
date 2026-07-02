function Footer() {
  return (
    <footer className="footer py-4 mt-5">
      <div className="container text-center">
        <p className="mb-3">✿Thanks for visiting! Let's connect.✿</p>
        <a href="mailto:arabellamball@gmail.com">
          <p>arabellamball@gmail.com</p>
        </a>

        <div className="social-icons">
          <a
            href="https://github.com/arabellaball2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <i class="bi bi-github"></i>
          </a>

          <a
            href="https://linkedin.com/in/arabella-ball"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <i class="bi bi-linkedin"></i>
          </a>
        </div>

        <small>© 2026 Arabella Ball. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
