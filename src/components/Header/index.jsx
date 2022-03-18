/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Styles
import { 
  Container, 
  Content, 
  Logo, 
  Nav, 
  NavList, 
  NavListWrapper, 
  Search, 
  SearchIcon, 
  SignOut, 
  User,
  Work
} from "./styles";

import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

// Images
import HomeLogo from '../../assets/images/home-logo.svg'
import SearchSvg from '../../assets/images/search-icon.svg'
import NavHome from '../../assets/images/nav-home.svg'
import NavNetwork from '../../assets/images/nav-network.svg'
import NavJobs from '../../assets/images/nav-jobs.svg'
import NavMensages from '../../assets/images/nav-messaging.svg'
import NavNotification from '../../assets/images/nav-notifications.svg'
import DownSvg from '../../assets/images/down-icon.svg'
import NavWork from '../../assets/images/nav-work.svg'

// Services 
import { auth } from '../../services/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from '../../reducers/User/userSlice';

export function Header() {

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
        console.log("oi");
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
      <Content>
        <Logo>
          <a href="/home">
            <img 
            src={HomeLogo} 
            />  
          </a>
        </Logo>

        <Search>
          <div>
            <input 
            type="text" 
            placeholder="Pesquisar" 
            />
          </div>
          <SearchIcon>
            <img 
            src={SearchSvg} 
            />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrapper>
            <NavList className="active">
              <a href="/home">
                <img 
                src={NavHome} 
                />
                <span>
                  Início
                </span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img 
                src={NavNetwork} 
                />
                <span>
                  Minha rede
                </span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img 
                src={NavJobs}
                />
                <span>
                  Vagas
                </span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img 
                src={NavMensages} 
                />
                <span>
                  Mensagens
                </span>
              </a>
            </NavList>

            <NavList>
              <a href="/home">
                <img 
                src={NavNotification}
                />
                <span>
                  Notificações
                </span>
              </a>
            </NavList>

            <User>
              <a>
                <img 
                src={userPhoto} 
                />
                <span>
                  Eu
                  <img 
                src={DownSvg}  
                />
                </span>
              </a>

              <SignOut onClick={handleAuth}>
                <a>
                  Sair
                </a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img 
                src={NavWork} 
                />
                <span>
                  Soluções
                  <img 
                  src={DownSvg} 
                  />
                </span>
              </a>
            </Work>

          </NavListWrapper>
        </Nav>
      </Content>
    </Container>
  );
}