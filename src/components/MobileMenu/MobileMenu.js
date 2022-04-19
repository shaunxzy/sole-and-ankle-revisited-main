/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {COLORS, QUERIES} from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <MenuOverLay>
      <MenuWrapper>
          <ButtonWrapper onClick={onDismiss}><Icon id={"close"} strokeWidth={2}/></ButtonWrapper>
          <NavWrapper>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
          </NavWrapper>
          <FootWrapper>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
          </FootWrapper>
      </MenuWrapper>
    </MenuOverLay>
  );
};

const MenuOverLay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row-reverse;
  
  background-color: #60646CCC;
`

const ButtonWrapper = styled.button`
  background-color: white;
  border: none;
  align-self: flex-end;
  flex: 1;
  display: flex;
  align-items: flex-start;
  padding: 2rem 1.5rem;
`

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 0 8rem 2rem 2rem;
  flex: 2;
  
  
  &  > a{
    font-family: 'Raleway',sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    text-decoration: none;
    color: black;
    padding: 0.5rem 0 0.5rem 0;
    
    &:first-of-type{
      color: ${COLORS.secondary};
    }
  }
`

const MenuWrapper = styled(DialogContent)`
  background-color: white;
  display: flex;
  flex-direction: column;
`

const FootWrapper = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  padding: 2rem 2rem;
  
  & > a {
    padding: 0.5rem 0 0.5rem 0;
    color: ${COLORS.gray["700"]};
    text-decoration: none;
  }
`

export default MobileMenu;
