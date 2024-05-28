import { Col, Row } from "react-bootstrap";
import Hogarts from "../../assets/images/Hogwartscrest.webp";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <Row className="fullWidth m-0">
        <Col className="col-sm-12 col-md-6">
          <h2 className="h2">هری پاتر و هاگوارتز</h2>
          <p>مکتب علوم‌وفنون جادوگری در دنیای هری‌ پاتر</p>
        </Col>
        <Col className="photo col-sm-12 col-md-6">
          <img src={Hogarts} className="p-3 float-left" />
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
