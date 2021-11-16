import React from "react";
import { connect } from 'react-redux';
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";

const Login = (props) => {
    
    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormData = {
            ...props.loginForm,
            [name]: value
        }
        
        props.updateLoginForm(updatedFormData)
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.login(props.loginForm, props.history);
    }

    return (
        <div className="modalBackground">
        <div className="modalContainer">
            
            <button>x</button>
            
            <div className="title">
                Log in
            </div>
 
            <div className="body">
                <form onSubmit={handleSubmit}>
                        <input placeholder="username" type="text" name="username" value={props.loginForm.username} onChange={handleChange} />
                        <input placeholder="password" type="text" name="password" value={props.loginForm.password} onChange={handleChange} />
                        <input type="submit" />
                </form>
            </div>

        <div className="footer">
            
        </div>


        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login);



//history is a mutable prop
//it's an object, which means it's pass-by reference
//which means you can grab it and pass it along




