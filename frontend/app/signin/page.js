"use client"
import "./../../styles/sign-in.css"
import Link from "next/link";
import { useState } from "react"

const Signin = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })
    
  const onChangeHandler = (event) => {
    const email = event.target.email;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));

  };
    return (
        <div className="sign-in">
            <div className="container"></div>
            
            <div className="sign-in-form">
                <div className="sign-in-title">
                    <h2>Sign In As <span>User</span></h2>
                </div>
                <form >
                    <input name="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" type="email" required/>
                    <input name="password" onChange={onChangeHandler} value={data.password} placeholder="Your Password" />
                    <button type="submit">Sign In</button>
                    <p>
                        Create A New Account{" "}
                        <span><Link href="/signup" >Click Here</Link></span>
                    </p>
                </form>
                </div>
        </div>
    )
}

export default Signin