import {useState, useEffect} from 'react'
import styles from './footer.module.scss'
import Link from 'next/link'
import {GrFacebookOption} from 'react-icons/gr';
import {FaInstagram} from 'react-icons/fa'
import {FiTwitter} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const Footer = () => {

     return (
          <>
            <div className={styles.footer}>
               <div className={styles.container}>
                   <div className={styles.footerDetail1}>
                     <h3 className={styles.h3}>Get the lastest NFT updates</h3>
                      <div className={styles.search}>
                         <input type="text" className={styles.searchTerm} placeholder="Your-email" />
                         <button type="submit" className={styles.searchButton}>
                          I'm in
                         </button>
                      </div>
                   </div>

                     {/* Links to NFT div */}
                   <div className={styles.footerLinks}>
                    <h2 className={styles.h2}>NFT</h2>
                    
                      <div className={styles.linksContainer}>
                     <Link href='/Explore'>
                      <span className={styles.links}>Explore</span>
                     </Link>

                       <Link href='/Blog'>
                      <span className={styles.links}>Blog</span>
                     </Link>

                       <Link href='/HelpCenter'>
                      <span className={styles.links}>Help Center</span>
                     </Link>

                       <Link href='/Jobs'>
                      <span className={styles.links}>Jobs</span>
                     </Link>

                       <Link href='/Partner'>
                      <span className={styles.links}>Become a Partner</span>
                     </Link>

                       <Link href='/Bounty'>
                      <span className={styles.links}>Bug Bounty</span>
                     </Link>
                     </div>
                   </div>
                      
                      {/* Links to Community div */}
                   <div className={styles.footerLinks}>
                    <h2 className={styles.h2}>Community</h2>
 
                     <div className={styles.linksContainer}>
                     <Link href='/Token'>
                      <span className={styles.links}>ARAI Token</span>
                     </Link>

                       <Link href='/Discussion'>
                      <span className={styles.links}>Discussion</span>
                     </Link>

                       <Link href='/Voting'>
                      <span className={styles.links}>Voting</span>
                     </Link>

                       <Link href='/Suggest'>
                      <span className={styles.links}>Suggest Feature</span>
                     </Link>

                       <Link href='/NFTProtocol'>
                      <span className={styles.links}>NFT Protocol</span>
                     </Link>

                       <Link href='/Subscribe'>
                      <span className={styles.links}>Subscribe</span>
                     </Link>
                     </div>
                   </div>

                    <div className={styles.language}>
                      <h2 className={styles.h2}>Langauge</h2>
                       
                       <div className={styles.languageSelector}>
                         <label className={styles.label}>
                         <select className={styles.select}>
                         <option className={styles.option} value="http://begrowingfamilies/fr-be">English</option>
                         <option className={styles.option} value="http://begrowingfamilies/nl-be">French</option>
                        </select>
                        </label>
                       </div>
                    </div>
               </div>

               <hr className={styles.hr} />

               <div className={styles.attribution}>

                <div className={styles.left}>
                 <div className={styles.footerCopyright}>
                   © NFT, Inc. All rights reserved.
                 </div>
                 </div>

                    {/* Links to Terms and Privacy */}
                  <div className={styles.center}>
                    <div className={styles.termsPrivacy}>
                      <Link href="/Terms">
                        <h2 className={styles.h2}>Terms</h2>
                      </Link>

                       <Link href="/Privacy">
                        <h3 className={styles.h3}>Privacy Policy</h3>
                      </Link>
                   </div>
                 </div>
                   
              <div className={styles.right}>
               <div className={styles.footerSocialLinks}>
                  
                <div className={styles.circle}>
                  <Link href="#">
                      <GrFacebookOption className={styles.socialLink}  />
                  </Link>
                  </div>
                   
                   <div className={styles.circle}>
                   <Link href="#">
                      <FaInstagram className={styles.socialLink} />
                  </Link>
                  </div>
                    
                    <div className={styles.circle}>
                   <Link href="#">
                      <FiTwitter className={styles.socialLink} />
                  </Link>
                  </div>
                    
                    <div className={styles.circle}>
                   <Link href="#">
                      <FiLinkedin className={styles.socialLink} />
                  </Link>
                  </div>
                </div>
               </div>
               </div>
            </div>
          </>
     )
}

export default Footer
