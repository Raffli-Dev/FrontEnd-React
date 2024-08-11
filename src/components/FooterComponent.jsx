import { FaGithub, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const FooterComponent = () => (
  <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="animasi mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          {/* Ikon GitHub */}
          <FaGithub size={24} />
        </a>
        <span className="mb-3 mb-md-0 text-muted">© 2024 Kelas Koding, Raffli-Dev</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="animasi ms-3">
          {/* Ikon Instagram */}
          <a href="#">
            <FaInstagram size={26} />
          </a>
        </li>
        <li className="animasi ms-3">
          {/* Ikon Facebook */}
          <a href="#">
            <FaFacebook size={26} />
          </a>
        </li>
        <li className="animasi ms-3">
          {/* Ikon Facebook */}
          <a href="#">
            <FaLinkedin size={26} />
          </a>
        </li>
      </ul>
    </footer>
  </div>
);

export default FooterComponent