import React from 'react'
import styles from './more.module.scss'
import Image from 'next/image'
import logo1 from '../../assets/Client-img-2-H.svg'
import logo2 from '../../assets/Client-img-4.svg'
import logo3 from '../../assets/Client-img-2-H.svg'
import logo4 from '../../assets/Client-img-5-H.svg'
import logo5 from '../../assets/Client-img-2-H.svg'

const MoreDetails = () => {
     return (
          <section className={styles.more}>
              <div className={styles.wrapper}>
               <div className={styles.container}>
                    <div className={styles.clientLogo_container}>
                     <Image src={logo1} className={styles.logo_img} />
                     <Image src={logo2} className={styles.logo_img2} />
                     <Image src={logo3} className={styles.logo_img} />
                     <Image src={logo4} className={styles.logo_img} />
                     <Image src={logo5} className={styles.logo_img} />
                    </div>
               </div>
              </div>
          </section>
     )
}

export default MoreDetails
