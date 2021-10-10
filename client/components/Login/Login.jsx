import React, { useState, useEffect } from "react";
import axios from "axios";
import Signup from "./Signup.jsx";
import Main from "../Main.jsx";

function Login(props) {
    const [mode, setMode] = useState(props.mode);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userId, setUserId] = useState('');

    if (mode === "signup") {
        return <Signup />;
    }

    if (mode === "home") {
        return <Main />;
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        };
        axios
            .post("/login", data)
            .then((response) => {
                console.log("after login: ", response);
                props.setUserId(response.data[0].id);
                props.setUserName(response.data[0].name);
                setMode("home");
            })
            .catch((error) => {
                console.log("error");
                setMode("signup");
            });
    };

    const handleSubmitSignup = (e) => {
        e.preventDefault();
        let data = {
            name: name,
            email: email,
            password: password,
        };
        axios
            .post("/signup", data)
            .then((response) => {
                console.log(response);
                setMode("login");
            })
            .catch((error) => {
                console.log("error");
            });
    };

    if (mode === "login") {
        return (
            <div>
                <div className="form-wrapper">
                    <form class="login-wrapper" onSubmit={handleSubmitLogin}>
                        <div class="host-title">Host and join hangouts!</div>

                        <div>
                            Email:
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            Password:
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <input
                                id="form-submit"
                                className="form-submit"
                                type="submit"
                                value="Login"
                            ></input>
                        </div>
                    </form>
                    {/* <button type="button" onClick={e => setMode('signup')}>Sign Up</button> */}
                    <p>
                        Don't have an account?{" "}
                        <u onClick={(e) => setMode("signup")}>Sign Up Here</u>
                    </p>
                </div>
            </div>
        );
    }
    return (
        <div className="signup">
            SIGNUP
            <form onSubmit={handleSubmitSignup}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                ></input>
                <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <input
                    className="form-submit"
                    type="submit"
                    value="Signup"
                ></input>
            </form>
        </div>
    );
}

export default Login;
