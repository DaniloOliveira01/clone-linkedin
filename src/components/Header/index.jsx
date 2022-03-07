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

// Images
import HomeLogo from '../../assets/images/home-logo.svg'
import SearchSvg from '../../assets/images/search-icon.svg'
import NavHome from '../../assets/images/nav-home.svg'
import NavNetwork from '../../assets/images/nav-network.svg'
import NavJobs from '../../assets/images/nav-jobs.svg'
import NavMensages from '../../assets/images/nav-messaging.svg'
import NavNotification from '../../assets/images/nav-notifications.svg'
import UserSvg from '../../assets/images/user.svg'
import DownSvg from '../../assets/images/down-icon.svg'
import NavWork from '../../assets/images/nav-work.svg'



export function Header() {
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
                src={UserSvg} 
                />
                <span>
                  Eu
                  <img 
                src={DownSvg}  
                />
                </span>
              </a>

              <SignOut>
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