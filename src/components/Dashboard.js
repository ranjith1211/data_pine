import Card from "react-bootstrap/Card";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <Card className="card">
        <Card.Body>
          <div className="title">
            <Card.Title>Sales Performance Dashboard</Card.Title>
          </div>
          <Card.Text className="titles">
            Open Sales Performance Dashboard in FullScreen
          </Card.Text>
        </Card.Body>
        <div className="img">
          <Card.Img
            variant="bottom"
            src="https://www.datapine.com/images/sales-performance-dashboard.png"
          />
        </div>
      </Card>
    </>
  );
}

export default Dashboard;
