/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Article, Container, Description, ShareActor, ShareBox, ShareImg, SocialActions, SocialCounts } from "./styles";

import UserSvg from '../../assets/images/user.svg'
import Image from '../../assets/images/image.jpg'

import { FaImage } from 'react-icons/fa'
import { FaVideo } from 'react-icons/fa'
import { FaCalendar } from 'react-icons/fa'
import { FaNewspaper } from 'react-icons/fa'
import { FaEllipsisH } from 'react-icons/fa'
import { FaThumbsUp } from 'react-icons/fa'
import { FaComment } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa'
import { FaPaperPlane } from 'react-icons/fa'

import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";


import { auth } from '../../services/firebase';
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../../reducers/User/userSlice'

export function Main() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const userPhoto = useSelector(selectUserPhoto)

  useEffect(() => {
    auth.onAuthStateChanged( async (user) => {
      if (user) {
        setUser(user);
        navigate("/home") 
      };
    });
  }, 
  [userName]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
  <Container>
    <ShareBox>
      <div>
        <img 
        src={userPhoto} 
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
            <span>
              3 comentários
            </span>
          </li>
        </SocialCounts>
        
        <SocialActions>
          <button>
            <FaThumbsUp />
            <span>Gostar</span>
          </button>

          <button>
            <FaComment />
            <span>Comentar</span>
          </button>

          <button>
            <FaShare />
            <span>Compartilhar</span>
          </button>

          <button>
            <FaPaperPlane />
            <span>Enviar</span>
          </button>
        </SocialActions>
      </Article>
    </div>
  </Container>
  );
};