import { Container } from "react-bootstrap";
import "../dist/css/404.css";
import YourSvg from "../assets/img/404.svg";

function NotFound() {
  return (
    <div className="bg">
      <Container>
        <img className="ops" src={YourSvg} alt="" />
        <br />
        <h1 className="mt-4">
            Oppss!!!, Halaman tidak ditemukan
        </h1>
        <br />
        <a className="buton mt-3" href="/">
          Beranda
        </a>
      </Container>
    </div>
  );
}

export default NotFound;
