import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import React, { Component } from 'react';

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!){
    login(email: $email, password: $password)
  }
`;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{ email, password }}
        onCompleted={(data) => {
          localStorage.setItem('authToken', data.login);
        }}
      >
        {login => (
          <form onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
          >
            <input type="text" placeholder="Email" value={email} onChange={e => this.setState({ email: e.target.value })} />
            <input type="password" placeholder="Password" value={password} onChange={e => this.setState({ password: e.target.value })} />
            <button type="submit">Login</button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default Login;
