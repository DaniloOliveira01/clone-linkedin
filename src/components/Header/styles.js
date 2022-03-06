import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0,0,0,0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100%;
  // height: 50px;
  z-index: 100;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1120px;
`;

export const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

export const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;

  & > div {
    max-width: 280px;

    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0,0,0,0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  // transition: background-color 0.15s;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: #fff;
    width: 100%;
  }
`;

export const NavListWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;

  .active {
    span:after {
      content: '';
      transform: scaleX(1);
      border-bottom: 2px solid #fff;
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0,0,0,0.9);
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0,0,0,0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
      
    }
  }

  &:hover, &:active {
    a {
      span {
        color: rgba(0,0,0, 0.9);
      }
    }
  }
`;