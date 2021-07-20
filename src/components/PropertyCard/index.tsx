/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './styles.module.scss';

interface PropertyCardProps {
  imageUrl: string;
  address: string;
  price: string;
  bedsNumber: number;
  bothesNumber: number;
  size: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  address,
  price,
  bedsNumber,
  bothesNumber,
  size,
}) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt="Image" />
      <div className={styles.content}>
        <strong>{price}</strong>
        <p>{address}</p>
        <div className={styles.details}>
          <span>
            <img src="/images/bed.svg" alt="Bed" />
            {bedsNumber} Beds
          </span>
          <span>
            <img src="/images/bath.svg" alt="Bath" />
            {bothesNumber} Both
          </span>
          <span>
            <img src="/images/size.svg" alt="Size" />
            {size} Sqft
          </span>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;