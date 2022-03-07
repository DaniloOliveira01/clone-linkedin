import styled from 'styled-components'
import PhotoSvg from '../../assets/images/photo.svg'
import CardBg from '../../assets/images/card-bg.svg'

export const Container = styled.div`
  grid-area: leftside;
`;

export const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0,0,0,0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardBackground = styled.div`
  background-image: url(${CardBg});
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

export const Photo = styled.div`
  box-shadow: none;
  background-image: url(${PhotoSvg});
`;

export const Link = styled.div``;

export const AddPhotoText = styled.div``;