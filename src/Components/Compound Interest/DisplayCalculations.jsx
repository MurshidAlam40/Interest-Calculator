import React from 'react';
import { Card, Container } from "react-bootstrap";
import LoanPieChart from './LoanPieChart';

export default function DisplayCalculations({ principal, interest, total, emi }) {
    return (
        <div className="result">
            <Container>
                {/* Card to hold the calculations and pie chart */}
                <Card className="p-3" style={{ height: "35rem" }}>
                    {/* Pie chart displaying principal and interest distribution */}
                    <LoanPieChart principal={principal} interest={interest} />
                    {/* Monthly EMI display */}
                    <div className="principal d-flex align-items-center justify-content-between p-2 border-bottom">
                        <span className="fs-5">Monthly EMI:</span>
                        <span className="fs-5 fw-normal">₹{emi.toLocaleString('en-IN')}</span>
                    </div>
                    {/* Principal amount display */}
                    <div className="principal d-flex align-items-center justify-content-between p-2 border-bottom">
                        <span className="fs-5">Principal Amount:</span>
                        <span className="fs-5 fw-normal">₹{principal.toLocaleString('en-IN')}</span>
                    </div>
                    {/* Total interest display */}
                    <div className="interest d-flex align-items-center justify-content-between p-2 border-bottom">
                        <span className="fs-5">Total Interest:</span>
                        <span className="fs-5 text-danger">₹{interest.toLocaleString('en-IN')}</span>
                    </div>
                    {/* Total amount display */}
                    <div className="total d-flex align-items-center justify-content-between p-2 border-bottom">
                        <span className="fs-5">Total Amount <span className="fs-6">(Principal + Interest)</span>:</span>
                        <span className="fs-5">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                </Card>
            </Container>
        </div>
    );
}
