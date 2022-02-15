import React from 'react';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer  className = 'custom-button' {...props}>{children}</CustomButtonContainer> // el children es el nombre de o las letras del boton
); // no me aplicaba los estilos css en  collections-item.styles.css por que no le habia puesto el className al componente CustomButtonContainer

export default CustomButton;
