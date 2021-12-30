import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import signinImage from "../signin-public/signinImage.jpg";
import "../signin-style/signin.css";
import Loading from "../../../Loading/loading-main/Loading";

const SigninComponent = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, [loading])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/signin", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: username,
                    password: password
                })
            });

            const data = await res.json();

            if (data.err) {
                alert(data.message);
            }
            else {
                localStorage.setItem("token", data.token);
                alert(data.message);
                navigate("/admin");
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <section>
            {
                loading ?
                    <Loading /> :
                    <>
                        <div class="imgBx">
                            <img src={signinImage} alt="" />
                        </div>
                        <div class="contentBx">
                            <div class="formBx">
                                <h2>Login</h2>
                                <form>
                                    <div class="inputBx">
                                        <span>Username</span>
                                        <input onChange={(e) => { setUsername(e.target.value) }} value={username} type="text" name="username" autocomplete="off" />
                                    </div>
                                    <div class="inputBx">
                                        <span>Password</span>
                                        <input onChange={(e) => { setPassword(e.target.value) }} value={password} type="password" name="password" autocomplete="none" />
                                    </div>
                                    <div class="inputBx">
                                        <input onClick={handleSubmit} type="submit" value="Sign in" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </>
            }
        </section>
    )
}
export default SigninComponent;
