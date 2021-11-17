import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';
import { signup } from '../actions/currentUser';
import { withRouter, Link } from 'react-router-dom';
import { openOrCloseModal } from '../actions/openOrCloseModal';
import { Close } from '@material-ui/icons';
import "./Modal.css";

const SignUp = (props) => {

    const handleChange = (event) => {
        
        const { name, value } = event.target
        const updatedFormData = {
            ...props.signupForm,
            [name]: value
        }
        props.updateSignupForm(updatedFormData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.signup(props.signupForm)
    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">

            <div className="first_row">
                <div className="title">
                Create an account
                </div><br/><br/>

                <div className="loginModalCloseButton">
                    <button onClick={ props.openOrCloseModal }><Close/></button>
                </div>
            </div>

            <div className="body">
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={props.signupForm.name} onChange={handleChange}/>
                    <label>Username</label>
                    <input type="text" name="username" value={props.signupForm.username} onChange={handleChange}/>
                    <label>Password</label>
                    <input type="text" name="password" value={props.signupForm.password} onChange={handleChange}/>
                    <input className="submit-button" type="submit" value="Sign Up" />
                </form>
            </div>

            <div className="footer">
                Already have an account? 
                <br/><br/>
                <Link className="login_btn" to="/login">Sign in here.</Link>
                <br/><br/>
            </div>
        </div>
    </div>





        

    )

}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}

export default withRouter(connect(mapStateToProps, { updateSignupForm, signup, openOrCloseModal })(SignUp)); 
