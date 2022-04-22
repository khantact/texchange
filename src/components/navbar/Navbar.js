import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import {FaBars} from 'react-icons/fa';

export const Nav = styled.nav`
  background: #D8C3A5;
  color: #8E8D8A;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10; 
`
export const NavLink = styled(Link)`
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  font-size: 1.5rem;
  height: 100%;
  cursor: pointer;

  &:hover{
    transition: all 0.2s ease-in-out;
    color: #E98074;
  }
`
export const Bars = styled(FaBars)`
  display: none;
  color: white;

  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px){
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #EAE7DC;
  padding: 10px 22px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #EAE7DC;
    color: #E98074;
  }
`
