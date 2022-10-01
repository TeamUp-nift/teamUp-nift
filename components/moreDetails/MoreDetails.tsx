import React from 'react'
import styles from './more.module.scss'
import Image from 'next/image'
import Link from 'next/link'
// import logo1 from '../../assets/Client-img-2-H.svg'
// import logo2 from '../../assets/Client-img-4.svg'
// import logo3 from '../../assets/Client-img-2-H.svg'
// import logo4 from '../../assets/Client-img-5-H.svg'
// import logo5 from '../../assets/Client-img-2-H.svg'
import moreNFT from '../../assets/more_NFT.svg'
import moreNFT2 from  '../../assets/more_NFTs.svg'

const MoreDetails = () => {
     return (
          <section className={styles.more}>
              <div className={styles.wrapper}>
               <div className={styles.container}>
                    {/* <div className={styles.clientLogo_container}>
                     <Image src={logo1} className={styles.logo_img} />
                     <Image src={logo2} className={styles.logo_img2} />
                     <Image src={logo3} className={styles.logo_img3} />
                     <Image src={logo4} className={styles.logo_img4} />
                     <Image src={logo5} className={styles.logo_img5} />
                    </div> */}

                    <div className={styles.more__content}>
                      <div className={styles.title}>Learn and Earn Free ETH with NFT</div>
                    <p className={styles.desc}>A creative nft business agency that lead & inspire</p>
                    {/* Link is here */}
                    <div className={styles.moreBtn}>
                    <Link href="/Create">
                         <button className={styles.btnprimary}>Create Item</button>
                    </Link>

                      <Link href="/Explore">
                         <button className={styles.btnsecondary}>Explore more</button>
                    </Link>
                    </div>
                    </div>

                    <div className={styles.more__image}>
                         <figure className={styles.figure__item}>
                             <Image src={moreNFT} className={styles.image} />
                         </figure>
                    </div>
               </div>
              </div>
          </section>
     )
}

export default MoreDetails
