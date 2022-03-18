/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
// Styles
import { Container, Join, Nav, Section, SignIn, Hero, Form, Google } from "./styles";

// import react 

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Images 
import LoginLogo from '../../assets/images/login-logo.svg'
import LoginImg from '../../assets/images/login-hero.svg'
import GoogleIcon from '../../assets/images/google.svg'

// Services

import { auth } from '../../services/firebase';
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, setUserLoginDetails, setSignOutState } from '../../reducers/User/userSlice'

export function Login(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        setUser(user);
        navigate("/home") 
      };
    });
  }, [userName])

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = () => {
    if(!userName) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
    } else if (userName) {
      auth.signOut()
      .then(() => {
        dispatch(setSignOutState())
        navigate("/")
      }).catch((err) => alert(err.message))
    }
  }


  return (
    <Container>
      <Nav>
        <a href="/">
          <img src={LoginLogo} alt="" />
        </a>
        <div>
          <Join>Entrar</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Bem vindo(a) a maior rede profissional do mundo!</h1>
          <img src={LoginImg} alt="" />
        </Hero>
        <Form>
          <Google onClick={handleAuth}>
            <img src={GoogleIcon} alt="" />
            Entre com o Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

