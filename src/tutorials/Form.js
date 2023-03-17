import React, { useState } from "react";
import "./formStyle.css";


const Form = () =>
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const onSubmit = (event) =>
    {

        setName(event.target.value);
        setEmail(event.target.value);
        setPassword(event.target.value);
        setConfirmPassword(event.target.value);

    };
    // const changeHandler = (event) =>
    // {
    //     setName(event.target.value);
    //     setEmail(event.target.value);
    //     setPassword(event.target.value);
    //     setConfirmPassword(event.target.value);
    //     event.preventDefaults();

    // };
    return (
        <div>
            <h1 className="formLabel"> FORM</h1>
            <form>
                <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    className="input1"
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="input1"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="input1"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input1"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                />
                <button type="submit" className="btnSubmit" onClick={onSubmit}>
                    Submit
                </button>
                <button type="submit" className="btnClear">
                    Clear
                </button>
            </form>
            <div className="showArea">
                <h3 className="text_center">Name:{name}</h3>
                <h3 className="text_center">Email:{email}</h3>
                <h3 className="text_center">Password Confirmed?:</h3></div>
        </div>
    );
}

export default Form;
