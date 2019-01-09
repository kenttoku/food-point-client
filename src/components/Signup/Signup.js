import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import React, { Component } from 'react';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!){
    signup(email: $email, password: $password)
  }
`;

class Signup extends Component {
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
        mutation={SIGNUP_MUTATION}
        variables={{ email, password }}
        onCompleted={(data) => {
          localStorage.setItem('authToken', data.signup);
        }}
      >
        {signup => (
          <form onSubmit={(e) => {
            e.preventDefault();
            signup();
          }}
          >
            <input type="text" placeholder="Email" value={email} onChange={e => this.setState({ email: e.target.value })} />
            <input type="password" placeholder="Password" value={password} onChange={e => this.setState({ password: e.target.value })} />
            <button type="submit">Sign Up</button>
          </form>
        )}
      </Mutation>
    );
  }
}

export default Signup;
