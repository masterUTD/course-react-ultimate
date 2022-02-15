import React from 'react';
import { withRouter } from 'react-router-dom'



import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menu-item.styles';

const MenuItem = ({title, imageUrl , size, history, linkUrl, match}) => ( // match and history come from withRouter
  
    <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>

);


export default  withRouter(MenuItem); // i wrap my component as a function to get all the  improvements withRouter gives me 

