import React from "react";

const SignIn = ()=>{
    return (
        <section className="signIn-container">
            <h5>Welcome back! 👋</h5>
            <h1>Sign in to your account</h1>
            <form>
                <div className="input-container">
                    <label htmlFor="email">Your email</label>
                    <input type="email" id="email" name="email" placeholder="abc@xyz.com" />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </div>

                <button type="submit">Continue</button>
            </form>
            <a href="#"><h4>forgot your password?</h4></a>
        </section>
    )
}

export default SignIn;