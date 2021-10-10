import React, { useState, useEffect } from "react";
import axios from "axios";
import Main from "./Main.jsx";
import HomeFeed from "./HomeFeed/HomeFeed.jsx";

const App = () => {
    const [mode, setMode] = useState("login");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userId, setUserId] = useState("");

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        let data = {
            email: email,
            password: password,
        };
        axios
            .post("/login", data)
            .then((response) => {
                console.log(response);
                setUserId(response.data[0].id);
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
            <div className="login">
                LOGIN
                <form onSubmit={handleSubmitLogin}>
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
                        value="Login"
                    ></input>
                </form>
            </div>
        );
    } else if (mode === "signup") {
        return (
            <div className="signup">
                SIGNUP
                <form onSubmit={handleSubmitSignup}>
                    <input
                        typpe="text"
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
    } else {
        return (
            <div>
                <HomeFeed userId={userId} />
                {/* <Main userId={userId}/> */}
            </div>
        );
    }
};

export default App;
