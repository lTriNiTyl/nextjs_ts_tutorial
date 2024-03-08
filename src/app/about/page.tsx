import React from 'react'
import Image from 'next/image'
import styles from './about.module.css'

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/20360845/pexels-photo-20360845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill />
      </div>
    </div>
  )
}

export default AboutPage 
