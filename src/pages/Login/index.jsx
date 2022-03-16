// Styles
import { Container, Join, Nav, Section, SignIn, Hero, Form, Google } from "./styles";

// Images 
import LoginLogo from '../../assets/images/login-logo.svg'
import LoginImg from '../../assets/images/login-hero.svg'
import GoogleIcon from '../../assets/images/google.svg'

import { connect } from 'react-redux'
import { signInLogin } from "../../actions";

export function Login(props) {
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
          <Google onClick={() => props.signIn()}>
            <img src={GoogleIcon} alt="" />
            Entre com o Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  signIn: () => dispatch(signInLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)

