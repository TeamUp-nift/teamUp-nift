import React from 'react'
import Link from 'next/link'
import styles from './button.module.scss'

export const Button = () => {
     return (
          <Link href='/Create'>
               <button className={styles.btn}>Create</button>
          </Link>
     )
}

export default Button
