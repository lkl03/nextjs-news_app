import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '../styles/Toolbar.module.css'

const Toolbar = () => {
    const router = useRouter()

    return (
    <div className={styles.main}>
        <div onClick={() => router.push('/')}>Home</div>
        <div onClick={() => router.push('/feed/1')}>Feed</div>
        <div onClick={() => router.push('/eom')}>EOM</div>
        <div>
          <Link href="https://github.com/lkl03">
            <a>GitHub</a>
          </Link>
        </div>
    </div>
  )
}

export default Toolbar