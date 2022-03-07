/* eslint-disable jsx-a11y/anchor-is-valid */
// Styles
import { AddPhotoText, ArtCard, CardBackground, Container, Link, Photo, UserInfo } from "./styles";

// Import React
// import { Link } from "react-router-dom";


export function Leftside() {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Bem vindo</Link>
          </a>
          <a>
            <AddPhotoText>Adicione uma foto</AddPhotoText>
          </a>
        </UserInfo>
      </ArtCard>
    </Container>
  );
}