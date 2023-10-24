import React,{useState} from "react";
import Layout from "../../Layouts/Layout";
import ValidationError from "../../Utility/ValidationError";
import axios from "axios";

export default function Register(){
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message,setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    let footerClass = "fixed-bottom";

    function handleFirstNameChange(e){
        setFirstName(e.target.value.trim());
    }

    function handleLastNameChange(e){
        setLastName(e.target.value.trim());
    }

    function handleEmailChange(e){
        setEmail(e.target.value.trim());
    }

    function handlePasswordChange(e){
        setPassword(e.target.value.trim());
    }

    async function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        if(firstname && lastname && email && password){
            if(password.length >= 8){
                try{
                    let result = await axios.post('http://localhost:3000/user/register',{
                        first_name: firstname,
                        last_name: lastname,
                        email: email,
                        password: password
                    });
                    if(result.status === 201){
                        alert("Your account has been created! Try to Log In");
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setPassword("");
                        setMessage("");
                    }
                } catch (e){
                    setMessage(e.response.data.message);
                }
            } else {
                setMessage('SHORT_PASSWORD');
            }
        } else {
            setMessage('INCOMPLETE_FIELDS');
        }
        setIsLoading(false);
    }
    
    return (
        <Layout footerClass={footerClass}>
            <main className="form-signin w-150 m-auto mt-3 ">
                <form onSubmit={handleSubmit}>
                    <img className="mb-4" src="http://www.getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className={`form-control ${message==='INCOMPLETE_FIELDS'? 'is-invalid' : ''}`} 
                            id="FirstName" 
                            placeholder="First Name" 
                            name="first_name" 
                            value={firstname}
                            onChange={handleFirstNameChange}
                            required  
                        />
                        <label htmlFor="FirstName">First Name</label>
                        {(message==='INCOMPLETE_FIELDS' && firstname.length===0) && <ValidationError message="Please, fill up with valid data." /> }
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className={`form-control ${message==='INCOMPLETE_FIELDS'? 'is-invalid' : ''}`} 
                            id="LastName" 
                            placeholder="Last Name" 
                            name="last_name" 
                            value={lastname}
                            onChange={handleLastNameChange}
                            required
                        />
                        <label htmlFor="LastName">Last Name</label>
                        {(message==='INCOMPLETE_FIELDS' && lastname.length===0) && <ValidationError message="Please, fill up with valid data." /> }
                    </div>
                    <div className="form-floating">
                        <input 
                            type="email" 
                            className={`form-control ${['ALREADY_EXIST','INVALID_EMAIL','INCOMPLETE_FIELDS'].includes(message) ? 'is-invalid' : ''}`} 
                            id="Email" 
                            placeholder="example@email.com" 
                            name="email" 
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <label htmlFor="Email">Email</label>
                        {(message==='ALREADY_EXIST') && <ValidationError message="User with this email address already exists." /> }
                        {(message==='INVALID_EMAIL') && <ValidationError message="Please, give a valid email address." /> }
                        {(message==='INCOMPLETE_FIELDS' && email.length===0) && <ValidationError message="Please, fill up with valid data." /> }
                    </div>
                    <div className="form-floating">
                        <input 
                            type="password" 
                            className={`form-control ${['SHORT_PASSWORD','INCOMPLETE_FIELDS'].includes(message) ? 'is-invalid' : ''}`}
                            id="PassWord" 
                            placeholder="Password" 
                            name="password" 
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <label htmlFor="PassWord">Password</label>
                        {(message==='SHORT_PASSWORD') && <ValidationError message="Password should be more than 8 characters." /> }
                        {(message==='INCOMPLETE_FIELDS' && password.length===0) && <ValidationError message="Please, fill up with valid data." /> }
                    </div>
                    <button className={`btn btn-success w-100 py-2 ${isLoading? 'disabled' :''}`} type="submit" onSubmit={handleSubmit}>Sign Up</button>
                </form>
                {isLoading && (<div id="loadingSpinner" className="spinner-border text-primary" role="status"/>)}
            </main>
        </Layout>
    );
}