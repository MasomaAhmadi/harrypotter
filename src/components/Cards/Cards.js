import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './Cards.css'

function Cards({ groupName, description, img, btn,id }) {
  return (
    <Card className="cards">
      <Card.Img
        variant="top"
        style={{ height: "10rem", width: "10rem", float:"center" }}
        src={img} 
      />
      <Card.Body className="card-body" style={{ height: "15rem" }}>
        <Card.Title>{groupName}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button
          style={{ textAlign: "center", width: "100%", backgroundColor: btn }}
          className="hover"
        >
          <Link to={`/Groups/${id}`} className="cards-btn">
            اطلاعات بیشتر
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
