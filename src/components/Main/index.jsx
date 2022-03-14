/* eslint-disable jsx-a11y/anchor-is-valid */
import { Article, Container, Description, ShareActor, ShareBox, ShareImg, SocialCounts } from "./styles";

import UserSvg from '../../assets/images/user.svg'
import Image from '../../assets/images/image.jpg'

import { FaImage } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { FaNewspaper } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'

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

        <Description>Description</Description>

        <ShareImg>
          <a>
            <img 
            src={Image} 
            alt="" 
            />
          </a>
        </ShareImg>

        <SocialCounts>
          <li>
            <button>
              <img 
              src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" 
              alt="" 
              />

              <img 
              src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" 
              alt="" 
              />

              <span>
                93
              </span>
            </button>
          </li>

          <li>
            <a>
              3 comentários
            </a>
          </li>
        </SocialCounts>

        <button>
          <FaThumbsUp style={{ color: '#0000FF'}}/>
          <span>Curtir</span>
        </button>
      </Article>
    </div>
  </Container>
  );
}