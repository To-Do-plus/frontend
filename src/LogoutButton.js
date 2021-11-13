import React from 'react';
import GoogleLogout from 'react-google-login';

class LogoutButton extends React.Component {
  render() {
    return (
      <>
        <GoogleLogout
          clientId='800440768090-n9kc75hsra6cfeq27kvu0fhgc90d1cbb.apps.googleusercontent.com'
          buttonText='Logout'
          onLogoutSuccess={this.props.logout}
        />
      </>
    )
  }
}

export default LogoutButton;