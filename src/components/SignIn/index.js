import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import TextField from "@material-ui/core/TextField";
import "./style.css";
// import { makeStyles } from '@material-ui/core/styles';

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget/index";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

// const useStyles = makeStyles(theme => ({
// 		container: {
// 				display: 'flex',
// 				flexWrap: 'wrap',
// 		},
// 		textField: {
// 				marginLeft: theme.spacing(1),
// 				marginRight: theme.spacing(1),
// 				width: 200,
// 		},
// }));

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    // const classes = useStyles();

    return (
      <form className={"container"} onSubmit={this.onSubmit}>
        <TextField
          // className={classes.textField}
          name="email"
          value={email}
          onChange={this.onChange}
          placeholder="Email Address"
          type="text"
        />
        <TextField
          name="password"
          value={password}
          onChange={this.onChange}
          placeholder="Password"
          type="password"
        />
        <button disabled={isInvalid} type="submit">
          Sign in
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

export default SignInPage;

export { SignInForm };
