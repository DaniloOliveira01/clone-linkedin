/* eslint-disable jsx-a11y/anchor-is-valid */
// Styles
import { AddPhotoText, ArtCard, CardBackground, CommunityCard, Container, Item, Link, Photo, UserInfo, Widget } from "./styles";

// Imagens
import ItemIcon from '../../assets/images/item-icon.svg'
import WidIcon from '../../assets/images/widget-icon.svg'
import PlusIcon from '../../assets/images/plus-icon.svg'

// Import React

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
        <Widget>
          <a>
            <div>
              <span>
                Conexões
              </span>

              <span>
                Aumente sua rede
              </span>
            </div>
            <img 
            src={WidIcon} 
            alt="" 
            />
          </a>
        </Widget>
        <Item>
          <span>
            <img 
            src={ItemIcon} 
            alt="" 
            />
            Meu itens
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>
            Grupos
          </span>
        </a>
        
        <a>
          <span>
            Eventos
            <img 
            src={PlusIcon} 
            alt="" 
            />
          </span>
        </a>

        <a>
          <span>
            Hastags seguidas
          </span>
        </a>

        <a>
          <span>
            Descubra mais
          </span>
        </a>
      </CommunityCard>
    </Container>
  );
}