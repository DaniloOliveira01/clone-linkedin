// Styles
import { Container, Join, Nav, Section, SignIn, Hero, Form, Google } from "./styles";

// Images 
import LoginLogo from '../../assets/images/login-logo.svg'
import LoginImg from '../../assets/images/login-hero.svg'
import GoogleIcon from '../../assets/images/google.svg'


export function Login() {
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
          <Google>
            <img src={GoogleIcon} alt="" />
            Entre com o Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
}