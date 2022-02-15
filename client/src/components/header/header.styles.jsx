import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

const OptionContainerStyles = css `
 
     padding: 10px 15px;
     cursor: pointer;
`; // to write a piece of css code to use it in anywhere i want 

export const HeaderContainer =  styled.div `
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;

`; // it's the same as a component but stylized with css

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 25px;

`; // puedo usar el Link component that react-router-dom provides me 

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;

`; // styled.div me genera un div

export const OptionLink = styled(Link)`
    ${OptionContainerStyles} 

`; 
