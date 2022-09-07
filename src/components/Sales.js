import Card from "react-bootstrap/Card";
import "./Sales.css";
function Sales() {
  return (
    <Card className="sale-container">
      <Card.Header style={{ fontSize: "30px", border: "0" }}>
        SALES DASHBOARD EXAMPLES
      </Card.Header>

      <Card.Body>
        <Card.Text>
          A sales dashboard is a tool that enables c-level executives and
          managers to effectively control sales KPIs and monitor them in one
          central place while helping teams to reach sales goals through
          detailed analyses of sales performance, cycle lengths, and sales
          funnels.
        </Card.Text>

        <Card.Text>
          Sales departments need to have strong ownership of their pipelines,
          data at their fingertips, and accurate information at any given point
          in time. By using modern sales dashboards, the performance of the
          team, sales opportunities, closed deals, various other sales KPIs, and
          sales management on a daily or strategic level become simplified and
          easier to follow. Trying to navigate all the sales tasks while
          increasing revenue and profits, forecasting and comparing data swiftly
          and accurately is of utmost importance for busy bees like sales
          representatives, managers, and VPs. To have a complete 360° overview
          of sales information, having real-time data overview in terms of your
          targets, visualizing your progress, and sharing the information with
          clients or stakeholders, sales dashboards will enable full control
          while empowering you to take full advantage of professional sales
          analytics software. To see these benefits in practice, we will show
          you our selected sales dashboard templates created with datapine’s
          professional dashboard builder.
        </Card.Text>
        <Card.Text>
          Here we present an overview of the top 5 sales dashboards covering the
          most important sales aspects of a company:
        </Card.Text>

        <Card.Text>
          Sales Performance Dashboard - Sales KPI Dashboard - Sales Cycle Length
          Dashboard - Sales Conversion Dashboard - Sales Opportunity Dashboard
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Sales;
