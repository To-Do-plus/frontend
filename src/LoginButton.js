import React from 'react';
// import { Button } from 'react-bootstrap'
// import { withAuth0 } from '@auth0/auth0-react';
import GoogleLogin from 'react-google-login';

class LoginButton extends React.Component {



    render() {
        return (
            <>
                <GoogleLogin
                    clientId='800440768090-n9kc75hsra6cfeq27kvu0fhgc90d1cbb.apps.googleusercontent.com'
                    buttonText='Login'
                    onSuccess={this.props.resGoogle}
                    onFailure={this.props.resGoogle}
                    cookiePolicy={'single_host_origin'}

                />
            </>
        )
    }
}

export default LoginButton;