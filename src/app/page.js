
'use client'
import React from 'react'
import styles from './page.module.css'
import { signIn, useSession } from 'next-auth/react'
function page() {
  const session = useSession()
  console.log(session)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Next Authentication</h1>
      <button onClick={()=>signIn('google')} className={styles.loginBtn}>Login With Google</button>
      <button onClick={()=>signIn('github')} className={styles.loginBtn}>Login With Github</button>
      <button onClick={()=>signIn('credentials')} className={styles.loginBtn}>Login with Credentials</button>
    </div>
  )
}

export default page
