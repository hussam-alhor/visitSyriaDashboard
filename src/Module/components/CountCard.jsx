import Card from 'react-bootstrap/Card';
import './CountCard.css';
import Row from 'react-bootstrap/Row';

function CountCard({number , unit , title}) {
  return (
    <Card className='CountCard'>
      <Card.Body>
        <Row>
        <Card.Title>{number}</Card.Title>
        <p>{unit}</p>
        </Row>
        <Card.Subtitle className="mb-2 text-muted">{title}</Card.Subtitle>
        </Card.Body>
    </Card>
  );
}

export default CountCard;