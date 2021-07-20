/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './styles.module.scss';

interface ExplanationItemProps {
  imageUrl: string;
  title: string;
  text: string;
}

const ExplanationItem: React.FC<ExplanationItemProps> = ({imageUrl, title, text}) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
      <span>{text}</span>
    </div>
  );
}

export default ExplanationItem;