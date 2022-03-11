/* eslint-disable jsx-a11y/anchor-is-valid */
import { Avatar, BannerCard, Container, FeedList, FollowCard, Recommendation, Title } from "./styles";

import FeedIcon from '../../assets/images/feed-icon.svg'
import RightIcon from '../../assets/images/right-icon.svg'

export function Rightside() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Linkedin Notícias</h2>
          <img 
          src={FeedIcon} 
          alt="" 
          />
        </Title>

        <FeedList>
          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>
                #Linkedin
              </span>
              <button>Seguir</button>
            </div>
          </li>

          <li>
            <a>
              <Avatar />
            </a>
            <div>
              <span>
                #Empregos
              </span>
              <button>Seguir</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          Veja todas recomendações
          <img 
          src={RightIcon} 
          alt="" />
        </Recommendation>

        <BannerCard>
          <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt=""
          />
        </BannerCard>
      </FollowCard>
    </Container>
  );
}