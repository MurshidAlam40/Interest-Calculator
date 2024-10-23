import React from "react";
import { Card, Container } from "react-bootstrap";
import PieChart from "./PieChart";

function DisplayResult({ principal, interest, total }) {
  return (
    // Main container wrapping the result display
    <div className="result">
      <Container>
        {/* Card used to group the chart and financial information */}
        <Card className="p-3" style={{ height: "100%" }}>
          {/* Display PieChart component to visualize principal and interest */}
          <PieChart principal={principal} interest={interest} />

          {/* Display Interest Earned */}
          <div className="interest d-flex align-items-center justify-content-between p-2 border-bottom">
            <span className="fs-5">Interest Earned:</span>
            {/* Formatted value with Indian currency format */}
            <span className="fs-5 text-danger">₹{interest.toLocaleString('en-IN')}</span>
          </div>

          {/* Display Principal Amount */}
          <div className="principal d-flex align-items-center justify-content-between p-2 border-bottom">
            <span className="fs-5">Principal Amount:</span>
            <span className="fs-5">₹{principal.toLocaleString('en-IN')}</span>
          </div>

          {/* Display Total Amount (Principal + Interest) */}
          <div className="total d-flex align-items-center justify-content-between p-2 border-bottom">
            <span className="fs-5">
              Total Amount <span className="fs-6">(Principal + Interest)</span>:
            </span>
            <span className="fs-5">₹{total.toLocaleString('en-IN')}</span>
          </div>
        </Card>
      </Container>
    </div>
  );
}

export default DisplayResult;
