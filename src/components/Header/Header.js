import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>

        <SuperHeaderWrapper><SuperHeader /></SuperHeaderWrapper>

      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
          <IconWrapper>
              <Icon id={"shopping-bag"}/>
              <Icon id={"search"}/>
              <IconButtonWrapper onClick={() => setShowMobileMenu(true)}><Icon id={"menu"} /></IconButtonWrapper>
          </IconWrapper>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const SuperHeaderWrapper = styled.div`
  display: contents;
  
    @media(max-width: ${props => props.theme.queries.laptop}){
      display: none;
    }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 16px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
  
  
  @media(max-width: ${props => props.theme.queries.laptop}){
    border-top: 4px solid black;
    align-items: center;
    gap: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1.5rem, 4.8vw - 0.9rem, 3rem);
  margin: 0px 48px;

  @media(max-width: ${props => props.theme.queries.laptop}){
    display: none;
  }
`;

const IconWrapper = styled.div`
  display: none;

  @media(max-width: ${props => props.theme.queries.laptop}){
    display: contents;
  }
`

const IconButtonWrapper = styled.button`
  background-color: white;
  border: none;
  padding: 0;
`

const Side = styled.div`
  flex: 1;
  
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
