/* eslint-disable jsx-a11y/anchor-is-valid */
import { Header } from "../../components/Header";
import { Leftside } from "../../components/LeftSide"
import { Main } from "../../components/Main"
import { Rightside } from "../../components/RightSide"
import { Container, Layout } from "./styles";


export function Home() {
  return (
    <>
    <Header />
    <Container>
      <Layout>
        <Leftside />
        <Main />
        <Rightside />
      </Layout>
    </Container>
    </>
  );
}