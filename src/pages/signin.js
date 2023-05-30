import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import Form, { FormTitle, FormError, FormBase, FormInput, FormText, FormLink, FormTextSmall } from '../components/form';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import Button from '../components/button';
import * as ROUTES from '../constants/routes';
import users from '../data/users.json';

export default function SignIn() {
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  const autofillUser = users[0];
  const [emailAddress, setEmailAddress] = useState(autofillUser.email);
  const [password, setPassword] = useState(autofillUser.password);
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAddress === '';

  const handleSignin = (event) => {
    event.preventDefault();

    return auth
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <div>
      <HeaderContainer>
        <Form>
          <FormTitle>Sign In</FormTitle>
          {error && <FormError data-testid="error">{error}</FormError>}

          <FormBase onSubmit={handleSignin} method="POST">
            <FormInput
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <FormInput
              type="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button size="large" disabled={isInvalid} type="submit" data-testid="sign-in">
              Sign In
            </Button>
          </FormBase>

          <FormText>
            New to TubeFlix?&nbsp;<FormLink to="/">Sign up now.</FormLink>
          </FormText>
          <FormTextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </FormTextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </div>
  );
}
