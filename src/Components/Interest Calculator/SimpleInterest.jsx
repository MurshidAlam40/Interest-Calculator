import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DisplayResult from "./DisplayResult";

function SimpleInterest() {
  // State to manage input fields
  const [input, setInput] = useState({
    amount: "1000",
    rate: "2",
    month: "10",
  });
  
  // State to store calculated data
  const [calculatedData, setCalculatedData] = useState({
    principal: 1000,
    interest: 200,
    total: 1200,
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((res) => ({ ...res, [name]: value }));
  };

  // Calculate interest on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const principal = parseFloat(input.amount) || 0;
    const rate = parseFloat(input.rate) || 0;
    const time = parseFloat(input.month) || 0;
    const calculatedInterest = (principal * rate * time) / 100;
    setCalculatedData({
      principal: principal,
      interest: calculatedInterest,
      total: principal + calculatedInterest,
    });
  };

  return (
    <div className="simpleInterest mt-4 mb-3">
      <Container>
        <Row>
          {/* Input Form Column */}
          <Col xs={12} md={6}>
            <div className="card rounded-3">
              <div className="card-body p-4">
                <h3 className="pb-md-0px-md-2">Simple Interest</h3>

                {/* Form for user inputs */}
                <form onSubmit={handleSubmit} className="px-md-2 shadow-none">
                  {/* Principal Amount Input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="amount">
                      Principal Amount (Rs.)
                    </label>
                    <input
                      type="number"
                      id="amount"
                      name="amount"
                      value={input.amount}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  {/* Monthly Interest Rate Input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="rate">
                      Monthly rate of Interest
                    </label>
                    <input
                      type="number"
                      id="rate"
                      name="rate"
                      value={input.rate}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  {/* Number of Months Input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="month">
                      Number of Months
                    </label>
                    <input
                      type="number"
                      id="month"
                      name="month"
                      value={input.month}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  {/* Calculate Button */}
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg mb-1 w-100"
                  >
                    Calculate
                  </button>
                </form>
              </div>
            </div>
          </Col>

          {/* Display Results Column */}
          <Col xs={12} md={6}>
            <DisplayResult
              principal={calculatedData.principal}
              interest={calculatedData.interest}
              total={calculatedData.total}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SimpleInterest;
