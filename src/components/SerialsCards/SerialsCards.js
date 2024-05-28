import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./SerialsCards.css";
import { serials } from "../../groupsData";
import { Link } from "react-router-dom";

function SerialsCards({ id, title, episod, link, img }) {
  return (
    <Card>
      <Card.Img src={img} className="serialsImg" />
      <Card.Body className="card-body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>قسمت{episod} </Card.Text>
        <button className="serials-btn">
          <Link to={link} className="center btn">
            Watch Now
          </Link>
        </button>
      </Card.Body>
    </Card>
  );
}

export default SerialsCards;
