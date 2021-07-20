/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Button from '../components/Button'
import ExplanationItem from '../components/ExplanationItem'
import { Header } from '../components/Header'
import PropertyCard from '../components/PropertyCard'
import styles from './home.module.scss'

export default function Home() {
  const properties = [
    {
      key: 1,
      imageUrl: "/images/property1.png",
      address: "8502 Preston Rd. Inglewood, Maine 98280",
      price: "$24500",
      bedsNumber: 3,
      bothesNumber: 2,
      size: 2000
    },
    {
      key: 2,
      imageUrl: "/images/property2.png",
      address: "8502 Ogio Rd. England da Silva, Tune 98280",
      price: "$37250",
      bedsNumber: 5,
      bothesNumber: 3,
      size: 3500
    },
    {
      key: 3,
      imageUrl: "/images/property3.png",
      address: "8502 Preston Rd. Inglewood, Maine 98280",
      price: "$16375",
      bedsNumber: 2,
      bothesNumber: 1,
      size: 1350
    },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <Header />
          <main className={styles.heroContainer}>
            <section>
              <p>Welcome to Besnik Agency</p>
              <h1>{`Discover a place you'll love to live.`}</h1>
              <p>Get the best real estate deals first,
              before they hit the mass market! HOT FORECLOSURE DEALS with 
              one simple search</p>
              <Button text="More about us" color="#000339"/>
            </section>
            <img src="/images/house_illustration.svg" alt="House Illustration" />
          </main>   
        </div>
      </div>  
      <div className={styles.clients}>
        <div className={styles.clientsInfo}>
          <img src="/images/logo.svg" alt="Logo" />
          <img src="/images/stars.svg" alt="Logo" />
          <p>More than 45,000+ companies trust besnik</p>
          <p>5 Star Ratings (2k+ Review)</p>
        </div>
        <div className={styles.companies}>
          <img src="/images/companies/company1.svg" alt="Company" />
          <img src="/images/companies/company2.svg" alt="Company" />
          <img src="/images/companies/company3.svg" alt="Company" />
          <img src="/images/companies/company4.svg" alt="Company" />
          <img src="/images/companies/company5.svg" alt="Company" />
        </div>
      </div>
      <div className={styles.guide}>
        <hr />
        <h3>How its works?</h3>
        <p>{`Everything you need to know when you're looking to buy, rent, or sell - all in one place.`}</p>

        <div className={styles.steps}>
          <ExplanationItem
             imageUrl="/images/guide1.svg"
             title="Buyer Guides"
             text="How to buy" />
          <ExplanationItem
             imageUrl="/images/guide2.svg"
             title="Rental Guides"
             text="How to rent" />
          <ExplanationItem
             imageUrl="/images/guide3.svg"
             title="Seller Guides"
             text="How to sell" />
        </div>

        <Button text="See full guidelines" color="#000339"/>
      </div>

      <div className={styles.properties}>
        <div className={styles.propertiesContent}>
          <h3>Featured Properties</h3>
          <p>{`Everything you need to know when you're looking`}</p>
          
          <div className={styles.cards}>
            {properties.map(({key, ...props}) => (
              <PropertyCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}