import React from "react";
import { connect } from 'react-redux';
import { updateLoginForm } from "../actions/loginForm";
import { login } from "../actions/currentUser";
import { Close } from '@material-ui/icons';
import { withRouter, Link } from 'react-router-dom';
import { openOrCloseModal } from '../actions/openOrCloseModal'

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
            
            <button onClick={ () => props.closeModal }><Close/></button>
            
            <div className="title">
                Log in
            </div><br/><br/>

            <div className="body">
                <form onSubmit={handleSubmit}>
                        <label>Username</label><br/>
                        <input type="text" name="username" value={props.loginForm.username} onChange={handleChange} />
                        <br/><br/>
                        
                        <label>Password</label><br/>
                        <input type="text" name="password" value={props.loginForm.password} onChange={handleChange} />
                        <br/><br/>

                        <input type="submit" />
                </form>

                
            </div>

        <div className="footer">
            <Link to="/signup">Create Account</Link>
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

export default withRouter(connect(mapStateToProps, { updateLoginForm, login, openOrCloseModal })(Login));

//history is a mutable prop
//it's an object, which means it's pass-by reference
//which means you can grab it and pass it along




//passed closeModal in props from Home component