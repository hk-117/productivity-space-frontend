import React,{useState} from "react";
import Layout from "../../Layouts/Layout";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    let footerClass = "fixed-bottom";

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log({
            email,
            password
        });
        if(email.trim() && password.trim()){
            alert("The form is submitted!");
            setEmail("");
            setPassword("");
        } else {
            alert("Please fill up all the field with values");
        }
    }
    return (
        <Layout footerClass={footerClass}>
            <main className="form-signin w-150 m-auto mt-3 ">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src="http://www.getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please Log In</h1>
                    <div className="form-floating">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="Email" 
                            placeholder="example@email.com" 
                            name="email" 
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <label htmlFor="Email">Email</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="PassWord" 
                            placeholder="Password" 
                            name="password" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <label htmlFor="PassWord">Password</label>
                    </div>
                    <div className="d-flex justify-content-around">
                        <button className="btn btn-success w-40 py-2" type="submit">LogIn</button>
                        <button className="btn btn-danger w-40 py-2">Forgot Password?</button>
                    </div>
                </form>
            </main>
        </Layout>
    );
}