import React from 'react'
import styles from './process.module.scss'
import Image from 'next/image'
import creditCard from '../../assets/credit-card.svg'
import { data } from './data'

const NFTProcess = () => {
     return (
           <section className={styles.process_content}>
               <div className={styles.wrapper}>
                  <div className={styles.container}>
                    <div className={styles.processContent}>
                        <div className={styles.process_title}>NFT Business Process</div>
                           <div className={styles.process__container}>
                              {
                   data.map(({ id, image, title, desc }) => {
                       return (
                           <article className={styles.process__item} key={id}>
                             <div className={styles.process_item_image}>
                             <div className={styles.process_image_bg}>
                                <Image src={image} className={styles.img}  />
                             </div>
                            </div>
                            <h3 className={styles.process__title}>{title}</h3>
                            <p className={styles.process__desc}>{desc}</p>
                           </article>
                       )
                             })
                               }
                        </div>
                    </div>
                  </div>
               </div>
          </section>
     )
}

export default NFTProcess
