import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Foot.css";

function Foot() {
  return (
    <CardGroup>
      <Card className="foot-container">
        <Card.Body>
          <Card.Title>BUSINESS INTELLIGENCE</Card.Title>
          <Card.Text>SaaS Business Intelligence</Card.Text>
          <Card.Text>MySQL Business Intelligence</Card.Text>
          <Card.Text>Self-Service BI</Card.Text>
          <Card.Text>BI Tools</Card.Text>
          <Card.Text>Online BI</Card.Text>
        </Card.Body>
      </Card>
      <Card className="foot-container">
        <Card.Body>
          <Card.Title>DASHBOARDS AND REPORTING</Card.Title>
          <Card.Text>Dashboard Creator</Card.Text>
          <Card.Text>Dashboard Software</Card.Text>
          <Card.Text>Dashboard Builder</Card.Text>
          <Card.Text>KPI Dashboard Software</Card.Text>
          <Card.Text>Dashboard Reporting</Card.Text>
        </Card.Body>
      </Card>

      <Card className="foot-container">
        <Card.Body>
          <Card.Title>SQL QUERIES</Card.Title>
          <Card.Text>SaaS Business Intelligence</Card.Text>
          <Card.Text>MySQL Business Intelligence</Card.Text>
          <Card.Text>Self-Service BI</Card.Text>
          <Card.Text>BI Tools</Card.Text>
          <Card.Text>Online BI</Card.Text>
        </Card.Body>
      </Card>
      <Card className="foot-container">
        <Card.Body>
          <Card.Title>BUSINESS INTELLIGENCE</Card.Title>
          <Card.Text>Online SQL Report Builder</Card.Text>
          <Card.Text>Online SQL Query Builder</Card.Text>
          <Card.Text>MySQL Query Builder</Card.Text>
          <Card.Text>MySQL Reporting Tools</Card.Text>
          <Card.Text>MySQL Report Builder</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default Foot;
