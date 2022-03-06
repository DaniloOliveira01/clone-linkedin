// Styles
import { Container, Content, Logo, Nav, NavList, NavListWrapper, Search, SearchIcon } from "./styles";

// Images
import HomeLogo from '../../assets/images/home-logo.svg'
import SearchSvg from '../../assets/images/search-icon.svg'
import NavHome from '../../assets/images/nav-home.svg'
import NavNetwork from '../../assets/images/nav-network.svg'
import NavJobs from '../../assets/images/nav-jobs.svg'
import NavMensages from '../../assets/images/nav-messaging.svg'
import NavNotification from '../../assets/images/nav-notifications.svg'



export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src={HomeLogo} alt="" />  
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
            alt="" />
          </SearchIcon>
        </Search>

        <Nav>
          <NavListWrapper>
            <NavList className="active">
              <a href="/home">
                <img 
                src={NavHome} 
                alt="" 
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
                alt="" 
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
                alt="" 
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
                alt="" 
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
                alt="" 
                />
                <span>
                  Notificações
                </span>
              </a>
            </NavList>
          </NavListWrapper>
        </Nav>
      </Content>
    </Container>
  )
}