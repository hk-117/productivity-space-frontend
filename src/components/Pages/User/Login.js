import React,{useState,useEffect} from "react";
import Layout from "../../Layouts/Layout";
import ValidationError from "../../Utility/ValidationError";
import axios from "axios";

export default function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [loginDone,setLoginDone] = useState(localStorage.getItem('isLogged'));

    useEffect(()=>{
        if(loginDone){
            window.location.href='/';
        }
    },[loginDone]);

    let footerClass = "fixed-bottom";

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        if(email.trim() && password.trim()){
            try {
                let result = await axios.post('http://localhost:3000/user/login',{
                    email: email,
                    password: password
                });
                if(result.status === 200){
                    localStorage.setItem('Authorization', result.data.user.token);
                    localStorage.setItem('isLogged',true);
                    setEmail("");
                    setPassword("");
                    setMessage("");
                    setLoginDone(localStorage.getItem('isLogged'));
                    setIsLoading(false);
                }
            } catch (error) {
                setMessage(error.response.data.message);
            }
        }
        setIsLoading(false);
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
                            className={`form-control ${message==='USER_NOT_FOUND'? 'is-invalid' : ''}`} 
                            id="Email" 
                            placeholder="example@email.com" 
                            name="email" 
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <label htmlFor="Email">Email</label>
                        {(message==='USER_NOT_FOUND') && <ValidationError message="User with this email address does not exist." /> }
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className={`form-control ${message==='PASSWORD_MISMATCH'? 'is-invalid' : ''}`}  
                            id="PassWord" 
                            placeholder="Password" 
                            name="password" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <label htmlFor="PassWord">Password</label>
                        {(message==='PASSWORD_MISMATCH') && <ValidationError message="Wrong credentials." /> }
                    </div>
                    <div className="d-flex justify-content-around">
                        <button className={`btn btn-success w-40 py-2 ${isLoading? 'disabled' :''}`} type="submit">LogIn</button>
                        <button className="btn btn-danger w-40 py-2">Forgot Password?</button>
                    </div>
                </form>
                {isLoading && (<div id="loadingSpinner" className="spinner-border text-primary" role="status"/>)}
            </main>
        </Layout>
    );
}