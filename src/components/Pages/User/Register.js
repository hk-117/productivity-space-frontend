import React,{useState} from "react";
import Layout from "../../Layouts/Layout";

export default function Register(){
    const [firstname,setFirstName] = useState("");
    const [lastname,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    let footerClass = "fixed-bottom";

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handlePasswordChange(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log({
            firstname,
            lastname,
            email,
            password
        });
        if(firstname.trim() && lastname.trim() && email.trim() && password.trim()){
            if(password.length >= 8){
                alert("The form is submitted!");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
            } else {
                alert("Password Should be at least 8 characters.");
            }
            
        } else {
            alert("Please fill up all the field with values");
        }
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
                            className="form-control" 
                            id="FirstName" 
                            placeholder="First Name" 
                            name="first_name" 
                            value={firstname}
                            onChange={handleFirstNameChange}
                            required  
                        />
                        <label htmlFor="FirstName">First Name</label>
                    </div>
                    <div className="form-floating">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="LastName" 
                            placeholder="Last Name" 
                            name="last_name" 
                            value={lastname}
                            onChange={handleLastNameChange}
                            required
                        />
                        <label htmlFor="LastName">Last Name</label>
                    </div>
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
                        <label htmlFor="PassWord">Password should be &gt;= 8 chars</label>
                    </div>
                    <button className="btn btn-success w-100 py-2" type="submit">Sign Up</button>
                </form>
            </main>
        </Layout>
    );
}