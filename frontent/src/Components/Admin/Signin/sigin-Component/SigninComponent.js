import React, {useState} from 'react'
import signinImage from "../signin-public/signinImage.jpg";
import "../signin-style/signin.css";

const SigninComponent = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch("/signin",{
                method: "post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    userName : username,
                    password : password
                })
            });

            const data = await res.json();

            if(data){
                alert(data.message);
            }
            else{
                localStorage.setItem("token", data.token);
                alert(data.message);
            }
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <section>
            <div class="imgBx">
                <img src={signinImage} alt=""/>
            </div>
            <div class="contentBx">
                <div class="formBx">
                    <h2>Login</h2>
                    <form>
                        <div class="inputBx">
                            <span>Username</span>
                            <input onChange={(e)=>{setUsername(e.target.value)}} value={username} type="text" name="username" autocomplete="off"/>
                        </div>
                        <div class="inputBx">
                            <span>Password</span>
                            <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type="password" name="password" autocomplete="none"/>
                        </div>
                        <div class="inputBx">
                            <input onClick={handleSubmit} type="submit" value="Sign in" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default SigninComponent;
