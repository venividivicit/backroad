import React from "react"
import Layout from "../components/Layout"
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/Banner'

export default function Error() {
  return <Layout>
    <header className={styles.error}>
      <Banner title="Oops...this page doesn`t exists">
        <Link to='/' className="btn-white">Back to home page</Link>
      </Banner>
    </header>
  </Layout>
}
