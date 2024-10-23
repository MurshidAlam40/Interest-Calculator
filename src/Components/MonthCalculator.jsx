import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MonthCalculator() {
  const navigate = useNavigate();

  // Function to get today's date in DD/MM/YYYY format
  const getFormatDate = (date) => {
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0");
    let year = date.getFullYear();

    return `${day}/ ${month}/ ${year}`;
  };

  // Initialize form inputs with today's date
  const [input, setinput] = useState({
    startDate: getFormatDate(new Date()),
    endDate: getFormatDate(new Date()),
  });

  // State to store the calculated time difference
  const [timeDifference, setTimeDifference] = useState({
    years: 0,
    months: 0,
    days: 0,
    totalMonths: 0,
    totalDays: 0,
  });

  // Handle input change for date fields
  const handleCahnge = (e) => {
    const { name, value } = e.target;
    setinput((res) => ({ ...res, [name]: value }));
  };

  // Calculate the time difference between startDate and endDate on form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.startDate && input.endDate) {
      const start = new Date(input.startDate);
      const end = new Date(input.endDate);

      let years = end.getFullYear() - start.getFullYear();
      let months = end.getMonth() - start.getMonth();
      let days = end.getDate() - start.getDate();

      // Adjust days if negative
      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(end.getFullYear(), end.getMonth(), 0);
        days += prevMonth.getDate(); // Add days of the previous month
      }

      // Adjust months if negative
      if (months < 0) {
        years -= 1;
        months += 12;
      }
      // Calculate total months and days
      const totalMonths = years * 12 + months;
      const daysDiff = end.getTime() - start.getTime();
      const totalDays = Math.floor(daysDiff / (1000 * 60 * 60 * 24));
      setTimeDifference({ years, months, days, totalMonths, totalDays});
    }
  };

  return (
    <div className="monthCal">
      <Container>
        <h2 className="heading text-center mt-4 pb-3">
          Months Calculator: Time Between Two Dates
        </h2>

        {/* Form Section for selecting start and end dates */}
        <Row>
          <Col lg={6} md={12}>
            <form onSubmit={handleSubmit} className="p-3">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="start">
                  Start Date
                </label>
                <input
                  type="date"
                  id="start"
                  className="form-control"
                  name="startDate"
                  value={input.startDate}
                  onChange={handleCahnge}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="end">
                  End Date
                </label>
                <input
                  type="date"
                  id="end"
                  className="form-control"
                  name="endDate"
                  value={input.endDate}
                  onChange={handleCahnge}
                />
              </div>

              {/* Button to submit the form and calculate months */}
              <button type="submit" className="btn btn-primary w-100">
                Calculate Months
              </button>
            </form>
          </Col>
       

        {/* Display calculated time period */}
          <Col lg={6} md={12}>
            <div className="displayDate">
              <h4 className="mb-3 text-center">Time Period</h4>
              <table className="table table-bordered">
                <tbody>
                  <tr>
                    <td>Start Date</td>
                    <td>{input.startDate}</td>
                  </tr>
                  <tr>
                    <td>End Date</td>
                    <td>{input.endDate}</td>
                  </tr>
                  <tr>
                    <td>Total Time: </td>
                    <td>
                      Years: {timeDifference.years}, Months:{" "}
                      {timeDifference.months}, Days: {timeDifference.days}
                    </td>
                  </tr>
                  <tr className="bg-success text-light">
                    <td>No. of Months: </td>
                    <td>{timeDifference.totalMonths} Months</td>
                  </tr>
                  <tr>
                    <td>No. of Days: </td>
                    <td>{timeDifference.totalDays} Days</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Button to navigate back to Home */}
            <div className="back-btn text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => navigate("/")}
              >
                <i className="fa-solid fa-rotate-left"></i> Back to Home
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MonthCalculator;
