import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import heroImge from '../../assets/hero_img.svg'

const Header = () => {
     return (
          <section className={styles.hero}>
          <div className={styles.wrapper}>
             <div className={styles.container}>
               <div className={styles.heroContent}>
                    <div className={styles.heroTitle}>Explore, Collect, and Sell NFTs</div>
                    <p className={styles.heroDesc}>On the world's Best & largest NFT marketplace</p>
                    {/* Link is here */}
                    <div className={styles.heroBtn}>
                    <Link href="/Explore">
                         <button className={styles.btnprimary}>Explore</button>
                    </Link>

                      <Link href="/Create">
                         <button className={styles.btnsecondary}>Create</button>
                    </Link>
                    </div>
               </div>

               <div className={styles.heroImg}>
                    <figure className={styles.figure}>
                     <Image src={heroImge} className={styles.heroImage} alt="Nift hero img" />
                    </figure>
               </div>
             </div>
        
          </div>
          </section>
     )
}

export default Header
