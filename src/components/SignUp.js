import React from 'react';
import { connect } from 'react-redux';
import { updateSignupForm } from '../actions/signupForm';

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
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="name" type="text" name="name" value={props.signupForm.name} onChange={handleChange}/>
            <input placeholder="username" type="text" name="username" value={props.signupForm.username} onChange={handleChange}/>
            <input placeholder="password" type="text" name="password" value={props.signupForm.password} onChange={handleChange}/>
            <input type="submit"/>
        </form>

    )

}

const mapStateToProps = state => {
    return {
        signupForm: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm })(SignUp); 
