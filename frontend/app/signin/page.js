"use client"

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
        <div>
            <form>
                <div className="title-sign-up">
                    Sign In As <span>User</span>
                </div>
                <div className="inputs-sign-in">
                    <input name="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" type="email" required/>
                    <input name="password" onChange={onChangeHandler} value={data.password} placeholder="Your Password" />
                </div>
                <button type="submit">Sign In</button>
                <p>
                    Create A New Account{" "}
                    <Link href="/signup" >Click Here</Link>
                </p>
            </form>
        </div>
    )
}

export default Signin