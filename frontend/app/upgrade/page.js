"use client";
import "./../../styles/upgrade.css";
import { useState } from "react";

const Upgrade = () => {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        reason: "",
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData((data) => ({ ...data, [name]: value }));
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Upgrade Request Submitted:", data);
        alert("Upgrade request submitted successfully!");
    };

    return (
        <div className="upgrade">
            <div className="upgrade-form">
                <h1 className="upgrade-title">
                    Upgrade to <span>Publisher</span>
                </h1>
                <form onSubmit={onSubmitHandler}>
                    <input
                        name="fullName"
                        onChange={onChangeHandler}
                        value={data.fullName}
                        placeholder="Full Name"
                        required
                    />
                    <input
                        name="email"
                        onChange={onChangeHandler}
                        value={data.email}
                        placeholder="Email Address"
                        type="email"
                        required
                    />
                    <textarea
                        name="reason"
                        onChange={onChangeHandler}
                        value={data.reason}
                        placeholder="Why do you want to become a publisher?"
                        rows={5}
                        required
                    ></textarea>
                    <button type="submit">Submit Upgrade Request</button>
                </form>
            </div>
        </div>
    );
};

export default Upgrade;
