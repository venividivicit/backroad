import React from "react"
import Layout from "../components/Layout"
import styles from '../css/error.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Banner from '../components/Banner'

export default function Error() {
  return <Layout>
    <header className={styles.error}>
      <Banner title="Oops...this page doesn`t exists">
        <AniLink fade to='/' className="btn-white">Back to home page</AniLink>
      </Banner>
    </header>
  </Layout>
}
