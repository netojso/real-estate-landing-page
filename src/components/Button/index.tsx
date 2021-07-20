import React from 'react';

import styles from './styles.module.scss';

interface ButtonProps {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({text, color}) => {
  return <button className={styles.button} style={{backgroundColor: color}}>{text}</button>;
}

export default Button;