"use client"
import Navbar from "@/components/Navbar";
import { useState } from "react";
import "../../styles/report.css"

const Report = () => {
    const [issueType, setIssueType] = useState("");

    return (
        <div className="report">
            <h1>Report Page</h1>
            <p>Please tell us about the issue</p>
            <div className="issues">
            <div className="select-issue">
                <button 
                    onClick={() => setIssueType("User Issue")} 
                    className={issueType === "User Issue" ? "active" : ""}
                >
                    User Issue
                </button>
                <button 
                    onClick={() => setIssueType("Product Issue")} 
                    className={issueType === "Product Issue" ? "active" : ""}
                >
                    Product Issue
                </button>
            </div>

            {issueType && (
                <div className="issues">
                    <h2>{issueType}</h2>
                    <p>Please provide more details about the {issueType.toLowerCase()}.</p>
                    <textarea
                        placeholder={`Describe the ${issueType.toLowerCase()}...`}
                        rows={5}
                        
                    ></textarea>
                    <button type="submit">Submit</button>
                </div>
            )}
            </div>
        </div>
    );
};

export default Report;
