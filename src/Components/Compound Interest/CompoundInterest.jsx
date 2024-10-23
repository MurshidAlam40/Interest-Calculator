import React, { useState } from "react";
import { Card, Col, Container, Row } from 'react-bootstrap';
import DisplayCalculations from "./DisplayCalculations";

function CompoundInterest() {
    // Input field state to hold loan details
    const [input, setInput] = useState({
        amount: "500000",
        rate: "11",
        years: "5",
    });

    // State to hold calculated interest and total payment details
    const [calculatedData, setCalculatedData] = useState({
        principal: 500000,
        interest: 152273,
        total: 652273,
        emi: 10871,
    });

    // Function to handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput((res) => ({ ...res, [name]: value }));
    };

    // Function to calculate EMI and related values
    const calculateEmi = () => {
        const principal = parseFloat(input.amount) || 0;
        const rate = parseFloat(input.rate) || 0;
        const time = parseFloat(input.years) || 0;
        // Monthly interest rate
        const monthlyRate = rate / (12 * 100);
        // Total months for loan tenure
        const months = time * 12;
        // EMI calculation formula
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        // Total payment and total interest calculation
        const totalPayment = Math.floor(emi * months);
        const totalInterest = totalPayment - principal;

        // Update calculated data state
        setCalculatedData({
            principal: principal,
            interest: totalInterest,
            total: totalPayment,
            emi: Math.floor(emi),
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        calculateEmi();
    };

    return (
        <div className="compoundInterest mt-4 mb-3">
            <Container>
                <Row>
                    {/* Input Form Column */}
                    <Col xs={12} md={6} xl={6}>
                        <div className="card rounded-3">
                            <div className="card-body p-4">
                                <h3 className="pb-md-0px-md-2">Loan EMI Calculator</h3>

                                {/* Form for user input */}
                                <form onSubmit={handleSubmit} className="px-md-2 shadow-none">
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="amount">
                                            Loan Amount (Rs.)
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
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="rate">
                                            Rate of Interest (p.a %)
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
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="years">
                                            Loan Tenure (Years)
                                        </label>
                                        <input
                                            type="number"
                                            id="years"
                                            name="years"
                                            value={input.years}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    {/* Submit button for calculation */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg mb-1 w-100"
                                    >
                                        Calculate EMI
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Col>

                    {/* Display Results Column */}
                    <Col xs={12} md={6} xl={6}>
                        <DisplayCalculations
                            principal={calculatedData.principal}
                            rate={parseFloat(input.rate)}
                            time={parseFloat(input.years)}
                            interest={calculatedData.interest}
                            total={calculatedData.total}
                            emi={calculatedData.emi}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CompoundInterest;
