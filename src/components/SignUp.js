import React from 'react';

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

export default SignUp; 
