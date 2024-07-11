import Card from 'react-bootstrap/Card';
import './CountCardDashbord.css';
import Row from 'react-bootstrap/Row';

function CountCardDashbord({number , unit , title}) {
  return (
    <Card className='CountCardDashbord'>
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

export default CountCardDashbord;