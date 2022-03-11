/* eslint-disable jsx-a11y/anchor-is-valid */
import { Article, Container, ShareActor, ShareBox } from "./styles";

import UserSvg from '../../assets/images/user.svg'

import { FaImage } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { FaNewspaper } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'

export function Main() {
  return (
  <Container>
    <ShareBox>
      <div>
        <img 
        src={UserSvg} 
        alt="" 
        />
        <button>Começar publicação</button>
      </div>

      <div>
        <button>
          <FaImage />
          <span>Foto</span>
        </button>

        <button>
          <FaVideo />
          <span>Vídeo</span>
        </button>

        <button>
          <FaCalendar />
          <span>Eventos</span>
        </button>

        <button>
          <FaNewspaper />
          <span>Escrever artigo</span>
        </button>
      </div>
    </ShareBox>

    <div>
      <Article>
        <ShareActor>
          <a>
            <img 
            src={UserSvg} 
            alt="" 
            />
            <div>
              <span>Título</span>
              <span>Informações</span>
              <span>Data</span>
            </div>
          </a>

          <button>
            <FaEllipsisH />
          </button>
        </ShareActor>
      </Article>
    </div>
  </Container>
  );
}