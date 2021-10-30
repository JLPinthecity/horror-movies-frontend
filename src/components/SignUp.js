import React from 'react';
import { connect } from 'react-redux';


const SignUp = () => {

    return (
        <form onSubmit={console.log("test")}>
            <input placeholder="name" type="text" name="username"  />
            <input placeholder="username" type="text" name="username"  />
            <input placeholder="password" type="text" name="password"  />
            <input type="submit" />
        </form>

    )

}


export default connect()(SignUp); 
