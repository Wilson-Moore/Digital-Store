"use client"

import Link from "next/link";
import { useState } from "react"

const Signin = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        birth_year: "",
        country: "",
    })
    
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
    
  };
    return (
        <div>
            <form>
                <div className="title-sign-up">
                    Sign Up As <span>User</span>
                </div>
                <div className="inputs-sign-up">
                    <input name="name" onChange={onChangeHandler} value={data.name} placeholder="Your Name" required />
                    <input name="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" type="email" required/>
                    <input name="birthYear" onChange={onChangeHandler} value={data.birth_year} placeholder="Your Date Of Birth" type="date" />
                    <input name="country" onChange={onChangeHandler} value={data.country} placeholder="Your Country" />
                    <input name="password" onChange={onChangeHandler} value={data.password} placeholder="Your Password" />
                </div>
                <div className="condition-sign-up">
                    <input type="checkbox" name="" id="" required />
                    <p>I Agree To The Terms Of Use & Privacy Terms</p>
                </div>
                <button type="submit">Sign Up</button>
                <p>
                    Already Have An Account{" "}
                    <Link href="/signin" >Click Here</Link>
                </p>
            </form>
        </div>
    )
}

export default Signin