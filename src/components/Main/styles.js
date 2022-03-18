import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
`;

export const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

export const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: #fff;
  
  div {

    button {
      outline: none;
      color: rgba(0,0,0,0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 400;
      cursor: pointer;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0,0,0,0.15);
        background-color: #fff;
        text-align: left;

        &:hover {
          background-color: rgba(0,0,0,0.13);
        }
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;
      
      button:nth-child(1) {
        cursor: pointer;
        color: #70b5f9;

        span {
          margin: 0 10px 0 10px;
        }
      }

      button:nth-child(2) {
        cursor: pointer;
        color: #32CD32;

        span {
          margin: 0 10px 0 10px;
        }
      }

      button:nth-child(3) {
        cursor: pointer;
        color: #FFD700;

        span {
          margin: 0 10px 0 10px;
        }
      }

      button:nth-child(4) {
        cursor: pointer;
        color: #FA8072;

        span {
          margin: 0 10px 0 10px;
        }
      }
    }
  }
`;

export const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

export const ShareActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
        }

        :nth-child(n+1) {
          font-size: 12px;
          color: rgba(0,0,0,0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
  }
`;

export const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0,0,0,0.9);
  font-size: 14px;
  text-align: left;
`;

export const ShareImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  color: #808080;

  li {
    margin-right: 5px;
    font-size: 10px;

    button {
      background: transparent;
      border: none;
      display: flex;
      color: #808080;
    }
  }
`;

export const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;

  button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    color: #696969;
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: rgba(0,0,0,0.09);
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;